import Class from "./ClassCard"

export default function MyClasses() {
  return (
    <body>
      <div className="container mx-auto p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold mt-4  text-gray-600">My Classes</h1>
          <button class="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-indigo-600">Add New Class</button>
        </div>
        <div className="flex-row my-10">
          <div className="m-4">
            <Class/>
          </div>
          <div className="m-4">
            <Class/>
          </div>
          <div className="m-4">
            <Class/>
          </div>
          <div className="m-4">
            <Class/>
          </div>
        </div>
      </div>
    </body>
  )
}