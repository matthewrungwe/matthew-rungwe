// Components
import About from './about/about';
import Education from './education/education';
import Skills from './skills/skills';
import Portfolio from './portfolio/portfolio';
import Blog from './blog/blog';
import Contact from './contact/contact';
import Footer from '../footer/footer';

// Styles
import './main.less';

function Main() {
    return (
        <div>
            <section>
                <About />
            </section>

            <section>
                <Education />
            </section>

            <section>
                <Skills />
            </section>

            <section>
                <Portfolio />
            </section>

            <section>
                <Blog />
            </section>

            <section>
                <Contact />
            </section>
    
            <Footer />
        </div>
    );
}

export default Main;