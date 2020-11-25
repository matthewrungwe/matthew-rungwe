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
                        <p>Math WordHub</p>
                    </div>
                </div>
                <div className="project two">
                    <div className="overlay">
                        <p>Rock Paper</p>
                    </div>
                </div>
                <div className="project three">
                    <div className="overlay">
                        <p>Signup Page</p>
                    </div>
                </div>
                <div className="project four">
                    <div className="overlay">
                        <p>Todo List</p>
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