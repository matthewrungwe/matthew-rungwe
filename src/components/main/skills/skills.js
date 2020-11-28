// Styles
import './skills.less';

// Images
import githubIcon from '../../../assests/images/icons/github-2.png';
import firebaseIcon from '../../../assests/images/icons/firebase.png';
import vscodeIcon from '../../../assests/images/icons/vscode.png';
import figmaIcon from '../../../assests/images/icons/figma.png';

function Skills() {
    const skillLevel = {
        angular: {
            width: `75%`
        },
        react: {
            width: `40%`
        },
        node: {
            width: `70%`
        },
        htmlcss: {
            width: `95%`
        },
        javascript: {
            width: '80%'
        },
        less: {
            width: `75%`
        },
        mongodb: {
            width: `60%`
        }
    }

    return (
        <div className="skills-wrap">
            <div className="heading">
                <h2>What I'm good at!</h2>
            </div>

            <div className="subheading">
                <h3>Technologies</h3>
            </div>

            <article className="skill">
                <h4><span>A</span>ngular</h4>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.angular}></div>
                </div>
            </article>

            <article className="skill">
                <h4><span>R</span>eact</h4>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.react}></div>
                </div>
            </article>

            <article className="skill">
                <h4><span>N</span>ode</h4>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.node}></div>
                </div>
            </article>

            <article className="skill">
                <h4><span>H</span>TML5/CSS3</h4>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.htmlcss}></div>
                </div>
            </article>

            <article className="skill">
                <h4><span>J</span>avaScript</h4>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.javascript}></div>
                </div>
            </article>

            <article className="skill">
                <h4><span>L</span>ess</h4>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.less}></div>
                </div>
            </article>

            <article className="skill">
                <h4><span>M</span>ongoDB</h4>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.mongodb}></div>
                </div>
            </article>

            <div className="subheading">
                <h3>Tools</h3>
            </div>

            <div className="tools">
                <div className="tool-set">
                    <div className="tool">
                        <div className="icon">
                            <img src={githubIcon} alt="" />
                        </div>
                    </div>
                    <div className="tool">
                        <div className="icon">
                            <img src={vscodeIcon} alt="" />
                        </div>
                    </div>
                </div>

                <div className="tool-set">
                    <div className="tool">
                        <div className="icon">
                            <img src={firebaseIcon} alt="" />
                        </div>
                    </div>
                    <div className="tool">
                        <div className="icon">
                            <img src={figmaIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;