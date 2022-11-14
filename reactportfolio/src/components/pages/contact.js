import React from 'react';
import '../../css/contact.css';

function Contact() {
    return (
        <div>
            <div className=" container col-md-6">
                <form className="contactform">
                    <div className="form-group">
                        <h1 className="contactMe">Contact Me:</h1>
                        {/* javascript to handle mouse over custom to alert user field is required */}
                        <input type="text" className="form-control" title="This field is required" id="name" placeholder="Name" required />
                        <input type="email" className="form-control" title="This field is required" id="email" placeholder="Email Address" required />
                        <textarea className="form-control" id="message" rows="3" title="This field is required" placeholder="Please Leave me a Message." required></textarea>
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;