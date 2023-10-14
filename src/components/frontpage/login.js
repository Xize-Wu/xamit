export default function Login(props) {
    const toRegister=props.toRegister;

    return (
        <div className="flex items-center justify-center">
            <div className="bg-yellow-100 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-2">Login</h2>
                <h6 className="block text-base pb-2 text-gray-500">Don't have an account yet? <span onClick={toRegister} className="cursor-pointer font-medium text-cyan-600">Register here</span></h6>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="you@example.com" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="********" required />
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">Register</button>
                </form>
            </div>
        </div>
    );
}