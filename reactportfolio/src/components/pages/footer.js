import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/footer.css';

function Footer() {
    return (
        <footer className='icons'>
            <div> 
                <a className="github" href="github">
                    <img src="images/GitHub-logo.png" alt="GitHub-Profile" height="35" />
                </a>
                <a className="linkd" href="linkdin">
                    <img src="images/linkdin.png" alt="LinkdIn-Profile" height="35" />
                </a>
            </div>  
        </footer> 
    )
}

export default Footer;