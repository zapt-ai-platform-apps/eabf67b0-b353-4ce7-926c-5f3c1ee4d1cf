import React from 'react';

export default function FreelancerCard({ freelancer, onSelect }) {
    return (
        <div 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
            onClick={() => onSelect(freelancer)}
        >
            <div className="h-40 bg-blue-100 flex items-center justify-center">
                {freelancer.avatar ? (
                    <img 
                        src={freelancer.avatar} 
                        alt={`${freelancer.name}'s profile`} 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                        {freelancer.name.charAt(0)}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{freelancer.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{freelancer.title}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                    {freelancer.skills.slice(0, 3).map((skill, index) => (
                        <span 
                            key={index} 
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                    {freelancer.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                            +{freelancer.skills.length - 3}
                        </span>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-sm">{freelancer.rating}</span>
                    </div>
                    <span className="text-sm font-medium">${freelancer.hourlyRate}/hr</span>
                </div>
            </div>
        </div>
    );
}