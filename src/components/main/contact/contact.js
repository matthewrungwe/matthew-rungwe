// Styles
import './contact.less';

function Contact() {
    return (
        <div className="contact-wrap">
            <div className="heading">
                <h2>Get in touch</h2>
                <p>How can I help? You can leave a message and I will get back to you.</p>
            </div>
            <form id="contact-form" action="POST" method="post" data-netlify="true" >
                <input type="hidden" name="form-name" value="Contact Form" />
                <div className="input-block-pair">
                    <div className="input-block">
                        <label>
                            <input type="text" name="name" placeholder="Name" required />
                        </label>
                    </div>

                    <div className="input-block">
                        <label>
                            <input type="email" name="email" placeholder="Email" required />
                        </label>
                    </div>
                </div>

                <div className="textarea-block">
                    <textarea placeholder="Message" name="message">

                    </textarea>
                </div>

                <div className="submit-block">
                    <label>
                        <input type="submit" value="Send Message" />
                    </label>
                </div>
            </form>

            <div className="contact-details">
                <div className="detail number">
                    <p>
                        <a href="tel:+27842563451">+(27) 84 256 3451</a>
                    </p>
                </div>
                <div className="detail email">
                    <p>
                        <a href="mailto:matthewrungwe@gmail.com">matthewrungwe@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;