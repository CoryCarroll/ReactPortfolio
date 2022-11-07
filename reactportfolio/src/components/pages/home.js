import React from 'react';
import Header from './header';
// import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div>
            <Header/>
            <h1>Hello, I'm Cory Carroll</h1>
            <p>
                I am a Full Stack Web Developer. 
            </p>
            {/* <Footer/> */}
        </div>
    )
}

export default Home;