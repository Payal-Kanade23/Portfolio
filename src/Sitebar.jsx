import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="text-3xl md:hidden"
      >
        <FiMenu className="text-pink-600"/>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="text-3xl p-4"
        >
          <FiX />
        </button>

        {/* Links */}
        <ul className="flex flex-col gap-6 p-6 text-lg font-medium text-pink-600">
          <li>
            <a href="#" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;