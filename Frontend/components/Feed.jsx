
import React, { useState } from "react";
import Header from "./Header";
import { useEffect } from "react";

export default function Feed() {
    const [mode, setMode] = useState("automatic");
    const [schedule, setSchedule] = useState(null);
    const [autometictime, setautometictime] = useState('Pending ⏳');


    const handleSchedule = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const scheduleData = {
            fishCount: formData.get("numfish"),
            fishType: formData.get("fishtype"),
            date: formData.get("date"),
            time: formData.get("time"),
            waterChange: formData.get("select"),
        };

        setSchedule(scheduleData);

        try {
            const response = await fetch(`http://localhost:5000/schedule`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(scheduleData),
            });

            const data = await response.json();
            console.log("Schedule Response:", data);
        } catch (error) {
            console.error("Error scheduling feeding:", error);
        }
    };

    useEffect(() => {
        if (!schedule) return;

        const checkTime = () => {
            const currentTime = new Date();
            const scheduledTime = new Date(`${schedule.date}T${schedule.time}`);

            if (currentTime >= scheduledTime) {
                setautometictime("Feed Complete ✅");
            } else {
                setautometictime("Pending ⏳");
            }
        };

        const interval = setInterval(checkTime, 1000);

        return () => clearInterval(interval);
    }, [schedule]);




    const [status, setStatus] = useState("Not yet.....");
    const [statusforwater, setstatusforwater] = useState('Not yet.....')

    const sendCommand = async (command) => {
        command === 'FEED' ? setStatus("Sending command...") : command === 'CHANGE_WATER' ? setstatusforwater('Sending command...') : ''


        try {
            const response = await fetch(`http://localhost:5000/control`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ command }),
            });

            const data = await response.json();
            // Display response from ESP32
            command === 'FEED' ? setStatus(data.message) : command === 'CHANGE_WATER' ? setstatusforwater(data.message) : ''
        } catch (error) {

            command === 'FEED' ? setStatus("Error: " + error.message) : command === 'CHANGE_WATER' ? setstatusforwater("Error: " + error.message) : ''
        }
    };






    return (
        <>
            <Header />
            <div className="flex flex-col items-center mt-10 px-10">
                <div className="flex gap-6 mb-6">
                    <button onClick={() => setMode("automatic")} className={`px-6 py-2 rounded-md text-white font-bold ${mode === "automatic" ? "bg-green-600" : "bg-gray-500"}`}>Automatic Mode</button>
                    <button onClick={() => setMode("manual")} className={`px-6 py-2 rounded-md text-white font-bold ${mode === "manual" ? "bg-blue-600" : "bg-gray-500"}`}>Manual Mode</button>
                </div>
                {mode === "automatic" && (
                    <div className="bg-white border shadow-lg rounded-3xl w-full max-w-xl p-6 mb-6">
                        <h1 className="text-2xl font-bold text-center mb-5">Automatic Mode</h1>
                        <form onSubmit={handleSchedule} className="flex flex-col gap-4">
                            <input type="number" name="numfish" className="border rounded-md w-full h-10 text-sm pl-3" placeholder="Enter the number of fish" required disabled={mode === "manual"} />
                            <input type="text" name="fishtype" className="border rounded-md w-full h-10 text-sm pl-3" placeholder="Enter fish type" required disabled={mode === "manual"} />
                            <input type="date" name="date" className="border cursor-pointer rounded-md w-full h-10 text-sm pl-3" required disabled={mode === "manual"} />
                            <input type="time" name="time" className="border cursor-pointer rounded-md w-full h-10 text-sm pl-3" required disabled={mode === "manual"} />
                            <div className="flex gap-4 cursor-pointer">
                                <label><input type="radio" name="select" value="Alternative_day" disabled={mode === "manual"} /> Alternative</label>
                                <label><input type="radio" name="select" value="After 2 days" disabled={mode === "manual"} /> After 2 days</label>
                                <label><input type="radio" name="select" value="After 3 days" disabled={mode === "manual"} /> After 3 days</label>
                            </div>
                            <button type="submit" className="bg-green-500 text-white font-bold w-full h-10 rounded-2xl mt-4" disabled={mode === "manual"}>Save Schedule</button>
                        </form>

                        {schedule && (
                            <div className="mt-6 text-center bg-gray-100 p-4 rounded-lg">
                                <h2 className="text-lg font-bold">Scheduled Feeding</h2>
                                <p>Feeding Time: {schedule.date} at {schedule.time}</p>
                                <p>Fish Type: {schedule.fishType} ({schedule.fishCount})</p>
                                <p>Water Change: {schedule.waterChange}</p>
                                <p className="text-green-600 font-bold mt-2">Status : {autometictime}</p>
                            </div>
                        )}
                    </div>
                )}
                {mode === "manual" && (
                    <div className="bg-white border shadow-lg rounded-3xl w-full max-w-xl p-6">
                        <h1 className="text-2xl font-bold text-center mb-5">Manual Mode</h1>
                        <div className="flex flex-col gap-4">
                            <button className="bg-blue-700 cursor-pointer text-white font-bold w-96 self-center h-10 rounded-2xl" onClick={() => sendCommand("FEED")} disabled={mode === "automatic"}>Feed</button>
                            <p className="text-center text-lg font-semibold">Status: {status}</p>
                            <button className="bg-blue-700 cursor-pointer text-white font-bold w-96 self-center h-10 rounded-2xl" onClick={() => sendCommand("CHANGE_WATER")} disabled={mode === "automatic"}>Change Water</button>
                            <p className="text-center text-lg font-semibold">Status: {statusforwater}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

