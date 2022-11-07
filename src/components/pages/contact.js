import React from 'react';
import Header from './header';
import Footer from './footer';
import Images from '../images'

export default function Home() {
    return (
        <div>
            <Header/>
            <div class="contacts">            
                <h2 id="contact">Contact Me</h2>
                <a class="email" href="email">
                    <img src="images/Gmail_icon.png" alt="Gmail" height="100"></img>
                </a>
                <a class="github" href="github">
                    <img src="images/GitHub-logo.png" alt="GitHub-Profile" height="100"></img>
                </a>
                <a class="linkd" href="linkdin">
                    <img src="images/linkdin.png" alt="LinkdIn-Profile" height="100"></img>
                </a>
            </div>
            <Footer/>
        </div>
    );
}