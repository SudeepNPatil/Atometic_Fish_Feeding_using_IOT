import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";

export default function WaterLevelMonitor() {
    const [waterLevel, setWaterLevel] = useState(0);
    const [fetching, setFetching] = useState(false);
    const intervalRef = useRef(null); // Store interval ID
    const maxLevel = 50; // Maximum water level in cm

    const fetchWaterLevel = async () => {
        try {
            const response = await fetch("http://localhost:5000/control", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ command: "WATER_LEVEL" })
            });

            if (!response.ok) {
                throw new Error("Failed to fetch water level");
            }

            const data = await response.json();

            if (data.message !== undefined) {
                setWaterLevel(Number(data.message)); // Ensure it's a number
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.error("Error fetching water level:", error);
            setWaterLevel(0); // Set to 0 on error
        }
    };

    const startFetching = () => {
        if (!fetching) {
            setFetching(true);
            fetchWaterLevel(); // Fetch immediately
            intervalRef.current = setInterval(fetchWaterLevel, 4000); // Fetch every 4 sec
        }
    };

    const stopFetching = () => {
        setFetching(false);
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current); // Cleanup interval on unmount
    }, []);

    // Determine color based on water level
    const getColor = () => {
        if (waterLevel > 45) return "bg-green-500"; // Low
        if (waterLevel > 20) return "bg-yellow-500"; // Medium
        if (waterLevel < 20) return "bg-red-500"; // Full
    };

    const getpercentage = () => {
        if (waterLevel > 48) return '100%';
        if (waterLevel > 45) return '95%';
        if (waterLevel > 40) return '80%';
        if (waterLevel > 35) return '70%';
        if (waterLevel > 30) return '60%';
        if (waterLevel > 25) return '50%';
        if (waterLevel > 18) return '40%';
        if (waterLevel < 18) return '25%';
        if (waterLevel < 10) return '10%';
        if (waterLevel < 5) return '5%';
    }

    return (
        <>
            <Header />
            <div className="flex justify-center h-auto bg-gray-100">
                <div className="bg-white mt-10 shadow-2xl rounded-3xl p-8 w-[400px] text-center">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-6">💧 Water Level</h1>

                    {/* Water Level Display */}
                    <div className="relative w-full h-48 border-4 border-gray-300 rounded-lg overflow-hidden shadow-lg">
                        <div
                            className={`absolute bottom-0 left-0 w-full transition-all duration-500 ${getColor()}`}
                            style={{ height: `${(waterLevel / maxLevel) * 100}%` }}
                        ></div>
                    </div>

                    {/* Water Level Text */}
                    <p className="mt-6 text-5xl font-bold text-blue-700">
                        {/* {waterLevel >=45 } <span className="text-3xl">cm</span> */}
                        {waterLevel ? getpercentage() : '0%'}
                    </p>
                    <p className="text-lg text-gray-500">out of 100% of water</p>

                    <button
                        className={`mt-4 px-4 py-2 rounded ${fetching ? "bg-red-500" : "bg-blue-500"
                            } text-white hover:opacity-80`}
                        onClick={fetching ? stopFetching : startFetching}
                    >
                        {fetching ? "Stop Monitor" : "Start Monitor"}
                    </button>

                    {/* Alert if Low */}
                    {waterLevel ?
                        waterLevel < 20 && (
                            <p className="text-red-600 font-bold mt-4 text-lg">⚠️ Warning: Water Level Low!</p>)
                        : <p className="font-bold mt-4 text-lg text-green-50">Water level Monitor</p>
                    }
                </div>
            </div>
        </>
    );
}
