import React from "react";
import { GiCirclingFish } from "react-icons/gi";
import Toggle_button from "./Toggle_button_Dark_and_light_mode";
import { Link } from "react-router-dom";

export default function Header() {


    return (
        <div className="flex flex-row items-center justify-between text-center pt-5 pb-4  bg-zinc-50 sticky">

            <GiCirclingFish className="text-yellow-400 bg-blue-500 cursor-pointer transition-transform transform hover:scale-105 active:scale-60 rounded-full border-blue-500 border-8 shadow-2xl ml-24" size={55} />

            <Link to="/Home" className="text-3xl font-bold -ml-6 cursor-pointer transition-transform transform hover:scale-x-105 active:scale-95">Automatic Fish Feeding</Link>

            <Link to="/Feed" className="text-xl font-semibold ml-96">Feed</Link>

            <Link to="/Monitor" className="text-xl font-semibold ">Monitor</Link>

            <Link to="/Contact" className="text-xl font-semibold ">Contact</Link>

            <Toggle_button />

        </div>
    )
}