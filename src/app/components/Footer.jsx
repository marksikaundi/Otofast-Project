import React from 'react'

export default function Footer() {
  return (
    // <div>
    //   <footer>
    //   {/* Footer content */}
    //   <p>Otofast Project &copy; {new Date().getFullYear()}</p>
    // </footer>
    // </div>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Power Learn Project</h2>
            <p className="mt-2">Learn and grow with us!</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Courses</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <div className="text-sm flex justify-between">
          <p>&copy; {new Date().getFullYear()} Power Learn Project. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
