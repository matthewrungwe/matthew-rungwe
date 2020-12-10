// Styles
import './contact.less';

// Images
import mailIcon from '../../../assests/images/icons/mail.png';
import phoneIcon from '../../../assests/images/icons/phone.png';

function Contact() {
    return (
        <div className="contact-wrap">
            <div className="heading">
                <h2>Get in touch</h2>
                <p>How can I help? You can leave a message and I will get back to you.</p>
            </div>
            <form id="contact-form" action="" method="post" data-netlify="true" >
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
                        <button type="submit">Send Message</button>
                    </label>
                </div>
            </form>

            <div className="contact-details">
                <div className="detail number">
                    <img className="phone-icon" src={phoneIcon} alt="" />
                    <p>
                        <a href="tel:+27842563451">+(27) 84 256 3451</a>
                    </p>
                </div>
                <br />
                <div className="detail email">
                    <img className="mail-icon" src={mailIcon} alt="" />
                    <p>
                        <a href="mailto:matthewrungwe@gmail.com">matthewrungwe@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;