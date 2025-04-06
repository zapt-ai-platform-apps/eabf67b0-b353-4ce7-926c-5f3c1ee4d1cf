import React, { useState } from 'react';
import FreelancerCard from '../components/FreelancerCard';
import { freelancers } from '../data/freelancers';

export default function HomePage({ onSelectFreelancer }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSkill, setSelectedSkill] = useState('');
    
    const allSkills = [...new Set(freelancers.flatMap(f => f.skills))].sort();
    
    const filteredFreelancers = freelancers.filter(freelancer => {
        const matchesSearch = freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             freelancer.title.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesSkill = selectedSkill === '' || 
                            freelancer.skills.includes(selectedSkill);
        
        return matchesSearch && matchesSkill;
    });

    return (
        <div>
            <section className="mb-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Find Top Freelance Talent</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Connect with skilled professionals for your projects
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-grow">
                            <input
                                type="text"
                                placeholder="Search by name or title..."
                                className="w-full p-3 border rounded-lg box-border"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <select
                                className="w-full p-3 border rounded-lg box-border bg-white"
                                value={selectedSkill}
                                onChange={(e) => setSelectedSkill(e.target.value)}
                            >
                                <option value="">All Skills</option>
                                {allSkills.map(skill => (
                                    <option key={skill} value={skill}>{skill}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6">Available Freelancers</h2>
                {filteredFreelancers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredFreelancers.map(freelancer => (
                            <FreelancerCard 
                                key={freelancer.id} 
                                freelancer={freelancer}
                                onSelect={onSelectFreelancer}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-lg text-gray-600">No freelancers match your search criteria.</p>
                        <button 
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedSkill('');
                            }}
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}