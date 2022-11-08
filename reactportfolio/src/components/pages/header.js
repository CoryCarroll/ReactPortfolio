import React from 'react';
// import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css'
function Header() {
    return (
        <header className='banner'>
            <div className='container-fluid'>
                <div className=''>
                    <img className='img-fluid mh-25 w-100' src='images/background.jpg' alt='background'/>
                </div>
            </div>
        </header>    
    )
}

export default Header;