import dynamic from 'next/dynamic'
import Header from '@/components/header/header'
const NoSSR = dynamic(() => import("@/components/frontpage/Info"), { ssr: false })


export default function Temp_Test() {

    return (
        <main className='min-h-screen flex flex-col bg-beige'>
            <Header />
            <div className="w-5/6 mx-auto p-6">
                <h1 className="text-2xl font-semibold mb-4">Economy 1001</h1>
                <table className="w-full border-collapse border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-white bg-indigo-300 p-2">Student ID</th>
                            <th className="border border-gray-300 p-2">Name</th>
                            <th className="border border-gray-300 p-2">Attendance</th>
                            <th className="border border-gray-300 p-2">Participation</th>
                            <th className="border border-gray-300 p-2">Extra Assignment</th>
                            <th className="border border-gray-300 p-2">Extra Assigment Grade</th>
                            <th className="border border-gray-300 p-2">Assignment 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white hover:bg-gray-100">
                            <td className="border border-gray-300 p-2">Data 1-1</td>
                            <td className="border border-gray-300 p-2">Data 1-1</td>
                            <td className="border border-gray-300 p-2">Data 1-1</td>
                            <td className="border border-gray-300 p-2">Data 1-1</td>
                            <td className="border border-gray-300 p-2">Data 1-1</td>
                            <td className="border border-gray-300 p-2">Data 1-1</td>

                        </tr>
                        <tr class="bg-white hover:bg-gray-100">
                        <td className="border border-gray-300 p-2">Data 1-1</td>
                        <td className="border border-gray-300 p-2">Data 1-1</td>
                        <td className="border border-gray-300 p-2">Data 1-1</td>
                        <td className="border border-gray-300 p-2">Data 1-1</td>
                        <td className="border border-gray-300 p-2">Data 1-1</td>
                        <td className="border border-gray-300 p-2">Data 1-1</td>
                        </tr>
                    </tbody>
                </table>
                <button></button>
            </div>

        </main>

    )
}
