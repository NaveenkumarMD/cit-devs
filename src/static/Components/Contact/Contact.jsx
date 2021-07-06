import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';

function Contact(){
    return (
        <section className="contact-us">
            <section className="contact-left">
                <h2>Get a Quote</h2>
                <p>Fill up the form and our Team will get back to you within 24hrs.</p>
                <section className="contact-details">
                    <div className="contact-card">
                        <MailOutlineIcon className="icon" />
                        <span> edukuemail@gmail.com</span>
                    </div>
                    <div className="contact-card">
                        <CallIcon className="icon" />
                        <span> 1234567890</span>
                    </div>

                </section>
            </section>

            <section className="contact-right">
                    
            </section>
        </section>
    );
}

export default Contact;