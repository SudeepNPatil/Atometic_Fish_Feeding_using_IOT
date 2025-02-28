import React, { useState } from "react";
import { GiCirclingFish } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export default function Header() {

    const [theam, settheam] = useState(localStorage.getItem("theam") || "light")

    /*  const handletheam = () => {
        
     } */


    return (
        <div className="mt-8 flex flex-row items-center justify-between">

            <GiCirclingFish className="text-yellow-400 bg-blue-500 rounded-full border-blue-500 border-8 shadow-2xl ml-24" size={65} />

            <h1 className="text-3xl font-bold -ml-6">Atometic Fish Feeding</h1>

            <p className="text-xl font-semibold ml-96">Feed</p>

            <p className="text-xl font-semibold ">Monitor</p>

            <p className="text-xl font-semibold ">contact</p>

            <button className="font-semibold mr-24 bg-white shadow-red-50 rounded-3xl border w-16 h-8">
                <IoSunnyOutline size={20} className="inline-block" />
                <FaMoon size={15} className="inline-block ml-2" />
            </button>


        </div>
    )
}