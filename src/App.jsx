import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ZaptBadge from './components/ZaptBadge';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedFreelancer, setSelectedFreelancer] = useState(null);

    const navigateToProfile = (freelancer) => {
        setSelectedFreelancer(freelancer);
        setCurrentPage('profile');
    };

    const navigateToHome = () => {
        setCurrentPage('home');
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            <Header onNavigateHome={navigateToHome} />
            <main className="flex-grow container mx-auto px-4 py-8">
                {currentPage === 'home' ? (
                    <HomePage onSelectFreelancer={navigateToProfile} />
                ) : (
                    <ProfilePage 
                        freelancer={selectedFreelancer} 
                        onBack={navigateToHome} 
                    />
                )}
            </main>
            <Footer />
            <ZaptBadge />
        </div>
    );
}