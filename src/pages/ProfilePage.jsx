import React from 'react';
import SkillTag from '../components/SkillTag';

export default function ProfilePage({ freelancer, onBack }) {
    if (!freelancer) {
        return (
            <div className="text-center py-10">
                <p className="text-lg">Freelancer not found</p>
                <button 
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
                    onClick={onBack}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div>
            <button 
                className="flex items-center text-blue-600 mb-6 cursor-pointer"
                onClick={onBack}
            >
                <svg 
                    className="w-5 h-5 mr-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                        clipRule="evenodd" 
                    />
                </svg>
                Back to Results
            </button>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/3 bg-blue-100 p-6 flex items-center justify-center">
                        {freelancer.avatar ? (
                            <img 
                                src={freelancer.avatar} 
                                alt={`${freelancer.name}'s profile`} 
                                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                        ) : (
                            <div className="w-48 h-48 rounded-full bg-blue-500 flex items-center justify-center text-white text-5xl font-bold border-4 border-white shadow-lg">
                                {freelancer.name.charAt(0)}
                            </div>
                        )}
                    </div>
                    <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold mb-1">{freelancer.name}</h1>
                                <p className="text-gray-600 mb-4">{freelancer.title}</p>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center mb-1">
                                    <span className="text-yellow-500 mr-1">★</span>
                                    <span>{freelancer.rating} ({freelancer.reviewCount} reviews)</span>
                                </div>
                                <p className="font-bold text-lg">${freelancer.hourlyRate}/hr</p>
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">About</h2>
                            <p className="text-gray-700">{freelancer.about}</p>
                        </div>
                        
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {freelancer.skills.map((skill, index) => (
                                    <SkillTag key={index} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="p-6 border-t">
                    <h2 className="text-lg font-semibold mb-4">Portfolio & Work History</h2>
                    {freelancer.portfolio.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {freelancer.portfolio.map((item, index) => (
                                <div key={index} className="border rounded-lg overflow-hidden">
                                    <div className="h-40 bg-gray-200">
                                        {item.image ? (
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                                                No image
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No portfolio items available.</p>
                    )}
                </div>
                
                <div className="p-6 border-t bg-blue-50">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Contact {freelancer.name}</h2>
                    </div>
                    <div className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea 
                                className="w-full p-3 border rounded-lg h-32 box-border" 
                                id="message" 
                                placeholder={`Tell ${freelancer.name} about your project...`}
                            ></textarea>
                        </div>
                        <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}