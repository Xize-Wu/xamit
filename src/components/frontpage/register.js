export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-6">Register</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="you@example.com" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="********" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" placeholder="********" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Register</button>
                </form>
            </div>
        </div>
    );
}
