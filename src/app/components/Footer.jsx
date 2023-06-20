import React from 'react'

export default function Footer() {
  return (
    // <div>
    //   <footer>
    //   {/* Footer content */}
    //   <p>Otofast Project &copy; {new Date().getFullYear()}</p>
    // </footer>
    // </div>
    <div>
      {/* Footer */}
      <footer className="bg-gray-200 py-4 px-4">
        <div className="container mx-auto text-center text-gray-600">
          <span>&copy; {new Date().getFullYear()} Otofast Project. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
