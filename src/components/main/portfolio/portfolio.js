// Styles
import './portfolio.less';

function Portfolio() {
    return (
        <div className="portfolio-wrap">
            <div className="heading">
                <h2>Pieces I've done</h2>
            </div>

            <div className="projects">
                <div className="project one">
                    <div className="overlay">
                        <a href="https://wordhub.netlify.app" target="_blank" rel="noreferrer" >
                            <p>Math WordHub</p>
                        </a>
                    </div>
                </div>
                <div className="project two">
                    <div className="overlay">
                        <a href="https://matt-chorebot.netlify.app/" target="_blank" rel="noreferrer" >
                            <p>Chore Bot Game</p>
                        </a>
                    </div>
                </div>
                <div className="project three">
                    <div className="overlay">
                        <a href="https://matt-signup-page.netlify.app/" target="_blank" rel="noreferrer" >
                            <p>Signup Page</p>
                        </a>
                    </div>
                </div>
                <div className="project four">
                    <div className="overlay">
                        <a href="https://matt-productcode-generator.netlify.app/" target="_blank" rel="noreferrer" >
                            <p>Product Code Gen</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="portfolio-link">
                <a href="https://github.com/matthewrungwe" target="_blank" rel="noreferrer" >See more</a>
            </div>
        </div>
    );
}

export default Portfolio;