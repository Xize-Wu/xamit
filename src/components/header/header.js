import Link from 'next/link'

export default function Header() {
    return (<>
        <div className="bg-indigo-500 p-6 shadow-lg flex">
            <div className="container mx-auto">
                <Link href="/"><h1 className="text-white text-3xl font-bold">Xamit!</h1></Link>
            </div>
            <div>
            <span className="mx-auto font-semibold text-white px-3">Hello! place_holder@email.com</span>
            <button class="bg-pink-500 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-pink-600">Log out</button>

            </div>
        </div>
    </>)
}