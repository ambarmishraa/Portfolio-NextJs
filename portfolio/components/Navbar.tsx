"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Name */}
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Ambar Mishra
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>

            {/* Resume Button */}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
            <Link href="#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-black text-white text-center"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}