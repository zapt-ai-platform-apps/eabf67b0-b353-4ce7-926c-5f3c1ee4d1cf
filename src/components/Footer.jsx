import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>© 2023 Freelancer Hub. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-400 transition">Terms</a>
                        <a href="#" className="hover:text-blue-400 transition">Privacy</a>
                        <a href="#" className="hover:text-blue-400 transition">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}