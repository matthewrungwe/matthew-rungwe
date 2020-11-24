// Components
import Footer from '../footer/footer';

// Styles
import './header.less';

// Images
import profilePic from '../../assests/images/profile/matthew.JPG';

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
                <div className="download-profile-bio">
                    <div className="download">

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
                </div>
            </article>

            <article className="media-copyright">
                <div className="media">

                </div>
                <div className="copyright">
                    <Footer />
                </div>
            </article>
        </section>
    );
}

export default Header;