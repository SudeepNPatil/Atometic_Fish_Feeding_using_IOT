import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";




export default function Toggle_button() {



    return (
        <div>
            <button className="font-semibold mr-24 bg-white shadow-red-50 rounded-3xl border w-16 h-8">
                <IoSunnyOutline size={20} className="inline-block" onClick={() => setDarkMode(!darkMode)} />
                <FaMoon size={15} className="inline-block ml-2" />
            </button>
        </div>
    )
}