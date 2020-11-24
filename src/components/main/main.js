// Components
import About from './about/about';
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
                <Contact />
            </section>
    
            <Footer />
        </div>
    );
}

export default Main;