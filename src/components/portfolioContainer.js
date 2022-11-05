import React, { useState } from 'react';
import portfolio from './pages/portfolio';
import resume from './pages/resume';
import contact from './pages/contact';
import about from './pages/about';
import home from './pages/home';
import navtabs from './pages/navtabs';
import header from './pages/header';
import footer from './pages/footer';

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
