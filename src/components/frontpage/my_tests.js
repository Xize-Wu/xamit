import Test from "./test_card"

export default function My_Tests (){
    return (
        <body>
        <div className="container mx-auto p-6">
          <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold mt-4  text-gray-600">My tests</h1>
          <button class="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-indigo-600">Add New Test</button>
          </div>
          <div className="flex">
            <div className="w-1/2 bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2 text-gray-600">Test Saved</h2>
              <Test/>
            </div>
      
            <div className="w-1/2 bg-white p-4 rounded-lg shadow-md ml-4 text-gray-600">
              <h2 className="text-lg font-semibold mb-2 text-gray-600">Test Published</h2>
              <Test/>
            </div>
          </div>
        </div>
      </body>
    )
}