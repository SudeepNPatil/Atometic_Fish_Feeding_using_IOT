import React from "react";
import { GiCirclingFish } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function Footer() {
    return (
        <div className="flex flex-row justify-center gap-32 bg-gray-100 p-5">

            <div>
                <GiCirclingFish className="text-yellow-400 bg-blue-500 rounded-full border-blue-500 border-8 shadow-2xl ml-24 opacity-80" size={65} />

                <p className="ml-24 mt-5 w-48 text-xl font-semibold">Feed your Fish with us ❤😊</p>
            </div>

            <div>
                <h1 className="text-xl font-bold mb-5">Fish Feeding</h1>
                <ul>
                    <li>Feeding</li>
                    <li>Monitor</li>
                    <li>Contact</li>
                    <li>About us</li>
                </ul>
            </div>

            <div>

                <h1 className="text-xl font-bold mb-5">Stay Connected</h1>

                <p>Contact</p>

                <p>Feeding.fish@gmail.com</p>

                <p>Fish.Feeding.admin@gmail.com</p>

                <div className="flex flex-row mt-5 gap-3">

                    <a href="https://instagram.com"><FaInstagram size={25} /> </a>

                    <a href="https://facebook.com"><FaFacebookMessenger size={25} /> </a>

                    <a href="https://twitter.com"><FaTwitter size={25} /> </a>

                    <a href="https://linkedin.com"><FaLinkedin size={25} /> </a>


                </div>


            </div>

            <div className="flex flex-col">
                <h1 className="text-xl font-bold mb-5">Discover More About</h1>

                <a href=""> Feeding Items</a>

                <a href=""> Feeding methods</a>

                <a href=""> Maintain</a>

            </div>


        </div>
    )
}