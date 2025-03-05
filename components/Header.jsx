import React from "react";
import { GiCirclingFish } from "react-icons/gi";
import Toggle_button from "./Toggle_button_Dark_and_light_mode";

export default function Header() {


    return (
        <div className="mt-8 flex flex-row items-center justify-between">

            <GiCirclingFish className="text-yellow-400 bg-blue-500 rounded-full border-blue-500 border-8 shadow-2xl ml-24" size={65} />

            <h1 className="text-3xl font-bold -ml-6">Atometic Fish Feeding</h1>

            <p className="text-xl font-semibold ml-96">Feed</p>

            <p className="text-xl font-semibold ">Monitor</p>

            <p className="text-xl font-semibold ">Contact</p>

            <Toggle_button />

        </div>
    )
}