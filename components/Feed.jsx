import React from "react";

export default function feed() {
    return (
        <div className="flex flex-row border justify-center mt-10">

            <div className="w-2/3">
                <h1 className="text-xl font-bold text-center border">Atometic mode</h1>
            </div>

            <div className="w-2/6">
                <h1 className="text-xl font-bold text-center border">Manual mode</h1>

                <table>

                    <tr>
                        <th className="font-semibold mt-4">
                            items
                        </th>
                        <th className="font-semibold text-center mt-4">
                            Status
                        </th>
                    </tr>

                    <tr>
                        <td>
                            <p className="font-semibold mt-4">Click here to feed the Fish</p>

                            <button className="w-32 bg-blue-400 h-10 border mt-2 rounded-lg">Feed</button>
                        </td>

                        <td className="text-center">
                            <button className="w-32 bg-green-400 h-10 border mt-2 rounded-lg">Done</button>

                            <button className="w-32 bg-red-400 h-10 border mt-2 rounded-lg">Not yet</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="font-semibold text-center mt-4">Click here to change the water</p>

                            <button className="w-32 bg-blue-400 h-10 border mt-2 rounded-lg">Change water</button>
                        </td>

                        <td className="text-center">
                            <button className="w-32 bg-green-400 h-10 border mt-2 rounded-lg">Done</button>

                            <button className="w-32 bg-red-400 h-10 border mt-2 rounded-lg">Not yet</button>
                        </td>
                    </tr>


                </table>



            </div>

        </div>
    )
}

/* 
<p className="font-semibold mt-4">Click here to feed the Fish</p>

<button className="w-32 bg-green-400 h-10 border mt-2 rounded-lg">Feed</button>

<p className="font-semibold text-center mt-4">Feeding Status</p>

<button className="w-32 bg-green-400 h-10 border mt-2 rounded-lg">Pending</button>

<p className="font-semibold text-center mt-4">Click here to change the water</p>

<button className="w-32 bg-green-400 h-10 border mt-2 rounded-lg">Change water</button>

<p className="font-semibold text-center mt-4">Water change Status</p>

<button className="w-32 bg-green-400 h-10 border mt-2 rounded-lg">Pending</button> */