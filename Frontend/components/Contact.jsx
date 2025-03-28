import React from "react";
import { FaInstagram, FaFacebookMessenger, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import Header from "./Header";

export default function Contact() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-10">Get in Touch</h1>

                <div className="flex flex-col md:flex-row gap-16 bg-white p-10 shadow-lg rounded-2xl">
                    {/* Contact Form */}
                    <div className="w-96">
                        <h2 className="text-2xl font-semibold mb-5 text-gray-800">Reach out to us</h2>
                        <form action="submit" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="font-medium text-gray-700">Name:</label>
                                <input type="text" id="name" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200" placeholder="Enter your name" />
                            </div>

                            <div>
                                <label htmlFor="Email" className="font-medium text-gray-700">Email:</label>
                                <input type="email" id="Email" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200" placeholder="Enter your email" />
                            </div>

                            <div>
                                <label htmlFor="number" className="font-medium text-gray-700">Phone Number:</label>
                                <input type="number" id="number" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200" placeholder="Enter your phone number" />
                            </div>

                            <div>
                                <label htmlFor="Address" className="font-medium text-gray-700">Address:</label>
                                <textarea id="Address" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200" placeholder="Enter your address"></textarea>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Social Media Contact */}
                    <div className="w-80">
                        <h2 className="text-xl font-semibold mb-5 text-gray-800 text-center mt-7">Connect with us</h2>
                        <div className="space-y-4">
                            <button className="flex items-center justify-center w-full p-3 border rounded-lg hover:bg-gray-100 transition">
                                <GrGithub size={24} className="mr-3" /> GitHub
                            </button>

                            <button className="flex items-center justify-center w-full p-3 border rounded-lg hover:bg-blue-100 transition">
                                <FaLinkedin size={24} className="mr-3 text-blue-700" /> LinkedIn
                            </button>

                            <button className="flex items-center justify-center w-full p-3 border rounded-lg hover:bg-pink-100 transition">
                                <FaInstagram size={24} className="mr-3 text-pink-500" /> Instagram
                            </button>

                            <button className="flex items-center justify-center w-full p-3 border rounded-lg hover:bg-blue-200 transition">
                                <FaTwitter size={24} className="mr-3 text-blue-500" /> Twitter
                            </button>

                            <button className="flex items-center justify-center w-full p-3 border rounded-lg hover:bg-blue-300 transition">
                                <FaFacebookMessenger size={24} className="mr-3 text-blue-600" /> Facebook Messenger
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
