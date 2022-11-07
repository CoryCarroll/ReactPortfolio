import React, { useState } from 'react';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import About from './pages/about';
import Home from './pages/home';
import NavTabs from './navtabs';
import Header from './pages/header';
import Footer from './pages/footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                <Header/>
            {renderPage()}
            </div>
            <Footer/>
        </div>
    );
}
