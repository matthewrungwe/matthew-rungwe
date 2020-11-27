// Components
import Footer from '../footer/footer';

// Styles
import './header.less';

// Images
import profilePic from '../../assests/images/profile/matthew.png';
import twitterIcon from '../../assests/images/icons/twitter.png';
import dribbbleIcon from '../../assests/images/icons/dribbble.png';
import githubIcon from '../../assests/images/icons/github-2.png';
import linkedinIcon from '../../assests/images/icons/linkedin.png';
import mailIcon from '../../assests/images/icons/mail.png';

const profile = {
    name: 'Matthew Rungwe',
    pic: {
        src: profilePic
    }
};

function Header() {
    return (
        <section className="header-wrap">
            <article className="short-profile">
                <div className="profile-pic">
                    <img className="pic" src={profile.pic.src} alt="Matthew's profile" />
                </div>            
                    <div className="profile-bio">
                    <p>
                        Hi, I'm <span>{profile.name}</span>, a Front-End Developer 
                        & Mentor based in Cape Town.
                    </p>

                    <p>
                        I Design and Develop mordern, repsonsive and 
                        interactive web applications.
                    </p>
                </div>
            </article>

            <article className="media-copyright">
                <div className="media">
                    <ul>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Twitter icon" /></a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                        </li>
                        <li>
                            <a href="https://dribbble.com" target="_blank" rel="noreferrer"><img src={dribbbleIcon} alt="Dribbble icon" /></a>
                        </li>
                        <li>
                            <a href="https://github.com/matthewrungwe" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub icon" /></a>
                        </li>  
                        <li>
                            <a href="mailto:matthewrungwe@gmail.com" target="_blank" rel="noreferrer"><img src={mailIcon} alt="Mail icon" /></a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <Footer />
                </div>
            </article>
        </section>
    );
}

export default Header;