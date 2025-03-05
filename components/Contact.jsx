import React from "react"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";


export default function Contact() {
    return (
        <div className="flex justify-center gap-32 mt-10 p-5">

            <div>
                <h1 className="text-2xl font-bold w-80">If you want use our service contact us</h1>
                <form action="submit" className="mt-5">
                    <label htmlFor="name" className="font-semibold">Name :</label>
                    <input type="text" id="name" className="block border rounded-lg w-80 h-10 mb-4" />

                    <label htmlFor="Email" className="font-semibold">Email :</label>
                    <input type="text" id="Email" className="block border rounded-lg w-80 h-10 mb-4" />

                    <label htmlFor="number" className="font-semibold">Ph Number :</label>
                    <input type="number" id="number" className="block border rounded-lg w-80 h-10 mb-4" />

                    <label htmlFor="Address" className="font-semibold">Address :</label>
                    <textarea type="text" id="Address" className="block border rounded-lg w-80 h-10 mb-4"></textarea>

                    <button className="border rounded-lg w-80 h-10 font-semibold text-center bg-blue-200">Submit</button>
                </form>
            </div>

            <div className="flex flex-col gap-6">

                <h1 className="text-2xl font-bold mb-14 text-center">you can contact on </h1>

                <button className="border border-black w-80 h-10 rounded-lg font-semibold text-center"> <GrGithub size={28} className="inline pr-2" />Github</button>

                <button className="border border-black w-80 h-10 rounded-lg font-semibold text-center"><FaLinkedin size={25} className="inline pr-2" />Linkedin</button>

                <button className="border border-black w-80 h-10 rounded-lg font-semibold text-center"><FaInstagram size={25} className="inline pr-2" />Instagram </button>

                <button className="border border-black w-80 h-10 rounded-lg font-semibold text-center"><FaTwitter size={25} className="inline pr-2" />Twetter</button>

                <button className="border border-black w-80 h-10 rounded-lg font-semibold text-center"><FaFacebookMessenger size={25} className="inline pr-2" />Facebook</button>

            </div>
        </div>
    )
}