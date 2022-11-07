import React from 'react';
import Header from './header';
import Footer from './footer';

function Contact() {
    return (
        <div>
            <Header/>
            <div className="col-md-6">
                <form className="contactform">
                    <div className="form-group">
                        <h1 className="Port-index">Contact Me:</h1>
                        {/* javascript to handle mouse over custom to alert user field is required */}
                        <input type="text" className="form-control" title="This field is required" id="name" placeholder="Name" required />
                        <input type="email" className="form-control" title="This field is required" id="email" placeholder="Email Address" required />
                        <textarea className="form-control" id="message" rows="3" title="This field is required" placeholder="Please Leave me a Message." required></textarea>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;