import Link from 'next/link';
import React from 'react';

const LogoIcon = () => (
    <svg className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
    </svg>
);

export default function Header() {
    return (
        <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-3">
                    <LogoIcon />
                    <span className="text-2xl font-bold text-gray-800">Peta Impian</span>
                </Link>
                <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
                    <a href="#" className="hover:text-orange-500 transition-colors">Courses</a>
                    <a href="#" className="hover:text-orange-500 transition-colors">How it Works</a>
                    <a href="#" className="hover:text-orange-500 transition-colors">Scholarships</a>
                    <a href="#" className="hover:text-orange-500 transition-colors">For Educators</a>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="hidden md:block font-semibold text-gray-600 hover:text-orange-500 transition-colors">Login</button>
                    <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
}