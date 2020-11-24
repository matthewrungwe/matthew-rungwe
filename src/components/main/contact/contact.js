// Styles
import './contact.less';

function Contact() {
    return (
        <div className="contact-wrap">
            <div className="heading">
                <h2>Get in touch</h2>
            </div>
            <form id="contact-form">
                <div className="input-block-pair">
                    <div className="input-block">
                        <label>
                            <input type="text" name="name" placeholder="Name"/>
                        </label>
                    </div>

                    <div className="input-block">
                        <label>
                            <input type="email" name="email" placeholder="Email" required />
                        </label>
                    </div>
                </div>

                <div className="textarea-block">
                    <textarea placeholder="Message">

                    </textarea>
                </div>

                <div className="submit-block">
                    <label>
                        <input type="submit" value="Send Message" />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Contact;