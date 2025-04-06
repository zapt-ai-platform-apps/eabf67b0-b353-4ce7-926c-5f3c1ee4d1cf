import React from 'react';

export default function Header({ onNavigateHome }) {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div 
                    className="flex items-center space-x-2 cursor-pointer" 
                    onClick={onNavigateHome}
                >
                    <svg 
                        className="w-8 h-8 text-blue-600" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" 
                            clipRule="evenodd" 
                        />
                        <path 
                            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" 
                        />
                    </svg>
                    <h1 className="text-xl font-bold">Freelancer Hub</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <button 
                                className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
                                onClick={onNavigateHome}
                            >
                                Find Freelancers
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}