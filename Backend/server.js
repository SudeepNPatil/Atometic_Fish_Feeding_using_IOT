const express = require("express");
const net = require("net");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const ESP32_IP = "192.168.211.195"; // Replace with your ESP32 IP
const ESP32_PORT = 8266;

const sendCommandToESP32 = (command) => {
    return new Promise((resolve, reject) => {
        const client = new net.Socket();
        let receivedData = "";

        client.connect(ESP32_PORT, ESP32_IP, () => {
            console.log("Connected to ESP32, sending:", command);
            client.write(command + "\n");
        });

        client.on("data", (data) => {
            receivedData += data.toString();
            client.destroy(); // Close connection after receiving response
        });

        client.on("close", () => {
            if (receivedData) {
                resolve(receivedData.trim());
            } else {
                reject(new Error("No response from ESP32"));
            }
        });

        client.on("error", (err) => {
            reject(new Error("Failed to connect to ESP32"));
        });

        // Timeout Handling (5 sec for quick commands, 12 sec for CHANGE_WATER)
        let timeoutDuration = command === "CHANGE_WATER" ? 12000 : 5000;

        setTimeout(() => {
            client.destroy();
            reject(new Error("ESP32 Timeout or Busy"));
        }, timeoutDuration);
    });
};

// API Endpoint to Handle Commands
app.post("/control", async (req, res) => {
    const { command } = req.body;
    if (!command) return res.status(400).json({ message: "Invalid command" });

    try {
        const response = await sendCommandToESP32(command);
        res.json({ message: response });
        console.log(response)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/schedule", async (req, res) => {
    const { time } = req.body;
    if (!time) return res.status(400).json({ message: "Invalid schedule" });

    try {
        const response = await sendCommandToESP32(`SCHEDULE:${time}`);
        res.json({ message: response });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
