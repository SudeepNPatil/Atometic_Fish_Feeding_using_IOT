import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "./Header";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
    const [welcomeText, setWelcomeText] = useState("");
    const [serverText, setServerText] = useState("");
    const welcomeMessage = "Welcome to Fish Feeding";
    const serverMessage = "Please connect your server to feed your fish.";
    const statusofesp = "Connected Successfully 🎉✔"
    const navigate = useNavigate();
    const [status, setStatus] = useState("Not connected!");


    useEffect(() => {
        let welcomeIndex = 0;
        let serverIndex = 0;
        const welcomeInterval = setInterval(() => {
            setWelcomeText(welcomeMessage.slice(0, welcomeIndex + 1));
            welcomeIndex++;
            if (welcomeIndex === welcomeMessage.length) clearInterval(welcomeInterval);
        }, 100);

        const serverTimeout = setTimeout(() => {
            const serverInterval = setInterval(() => {
                setServerText(serverMessage.slice(0, serverIndex + 1));
                serverIndex++;
                if (serverIndex === serverMessage.length) clearInterval(serverInterval);
            }, 100);
        }, 2000);

        return () => {
            clearInterval(welcomeInterval);
            clearTimeout(serverTimeout);
        };
    }, []);

    setTimeout(() => {

        if (status === "ESP32 is Online") {
            navigate("/Feed")
        }

    }, 3000);



    const sendCommand = async (command) => {
        setStatus("Sending command...");

        try {
            const response = await fetch(`http://localhost:5000/control`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ command }),
            });

            const data = await response.json();
            setStatus(data.message); // Display response from ESP32
        } catch (error) {
            setStatus("Error: " + error.message);
        }
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center px-6">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {welcomeText}
                    <span className="animate-blink">|</span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl drop-shadow-md mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {serverText}
                    <span className="animate-blink">|</span>
                </motion.p>
                <motion.button
                    className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    onClick={() => sendCommand("STATUS")}
                >
                    Connect to Server
                </motion.button>
                {status === 'ESP32 is Online' && (<motion.p
                    className="text-lg md:text-xl ml-8 drop-shadow-md mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {statusofesp}
                </motion.p>
                )}
            </div>

        </>
    );
};

export default HomePage;
