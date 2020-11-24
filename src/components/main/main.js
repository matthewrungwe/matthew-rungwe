// Components
import Contact from './contact/contact';
import Footer from '../footer/footer';

// Styles
import './main.less';

function Main() {
    return (
        <div>
            <section>
                <Contact />
            </section>
    
            <Footer />
        </div>
    );
}

export default Main;