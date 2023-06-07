import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/footer.css';

function Footer() {
    return (
        <footer className='icons'>
            <div> 
                <a className="github" href="https://github.com/CoryCarroll">
                    <img src="./images/GitHub-logo.png" alt="GitHub-Profile" height="35" />
                </a>
                <a className="linkd" href="https://www.linkedin.com/in/cdcarroll/">
                    <img src="images/linkdin.png" alt="LinkedIn-Profile" height="35" />
                </a>
            </div>  
        </footer> 
    )
}

export default Footer;