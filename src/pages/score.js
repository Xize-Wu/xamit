import dynamic from 'next/dynamic'
import Header from '@/components/header/header'


export default function Temp_Test() {

    return (
        <main className='min-h-screen flex flex-col bg-beige text-gray-600'>
            <Header />
            <div className="flex-column w-5/6 mx-auto p-6">
                <div className='flex justify-between'>
                <h1 className="text-2xl font-semibold mb-4">Economy 1001</h1>
                <div className='flex justify-between'>
                <button className="bg-indigo-400 hover:bg-pink-500 text-white font-bold m-2 bottom-1 py-2 px-4 rounded-lg">Auto-Assign</button>
                <button className="bg-indigo-400 hover:bg-pink-500 text-white font-bold m-2 py-2 px-4 rounded-lg">Assign Selected</button>
                </div>
                </div>

                <table className="w-full border border-collapse border-beige">
                    <thead>
                        <tr className="border  border-beige bg-indigo-300 p-2">
                            <th className="w-1/12 bg-indigo-300 p-2">Student ID</th>
                            <th className=" border  border-beige p-2">Name</th>
                            <th className="border  border-beige  p-2">Attendance</th>
                            <th className="border  border-beige  p-2">Participation</th>
                            <th className="border  border-beige p-2">Extra Assignment</th>
                            <th className="border  border-beige p-2">Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border  border-beige bg-white hover:bg-pink-100">
                        <th className="border  border-beige p-2">1</th>
                        <th className=" border  border-beige p-2">John Smith</th>
                        <th className="border  border-beige p-2">Full</th>
                        <th className=" border  border-beige p-2">Average</th>
                        <th className=" border  border-beige p-2">Assigned</th>
                        <th className=" border  border-beige p-2">
                            <input type="checkbox"/>
                        </th>

                        </tr>
                        <tr class="border  border-beige bg-white hover:bg-pink-100">
                        <th className="border  border-beige p-2">2</th>
                        <th className="border  border-beige p-2">Jane Doe</th>
                        <th className="border  border-beige p-2">Missed 1 time</th>
                        <th className="border  border-beige p-2">Good</th>
                        <th className="border  border-beige p-2">Assigned</th>
                        <th className=" border  border-beige p-2">
                            <input type="checkbox"/>
                        </th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </main>

    )
}
