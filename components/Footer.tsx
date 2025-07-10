import React from 'react';

const LogoIcon = () => (
    <svg className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <LogoIcon />
                            <span className="text-xl font-bold">Peta Impian</span>
                        </div>
                        <p className="text-gray-400">Empowering students with personalized, interactive learning.</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Courses</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Testimonials</a></li>
                            <li><a href="#" className="hover:text-white">Help</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">X</a>
                            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
                    <p>&copy; 2025 Peta Impian. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}