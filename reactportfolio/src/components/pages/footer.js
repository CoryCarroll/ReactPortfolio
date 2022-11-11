import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
    return (
        <footer>
            <div className='d-flex justify-content-center mt-5 mb-5'> 
                <a class="github" href="github">
                    <img src="images/GitHub-logo.png" alt="GitHub-Profile" height="35" />
                </a>
                <a class="linkd" href="linkdin">
                    <img src="images/linkdin.png" alt="LinkdIn-Profile" height="35" />
                </a>
            </div>  
        </footer> 
    )
}

export default Footer;