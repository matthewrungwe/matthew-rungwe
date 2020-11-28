// Styles
import './skills.less';

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

            <article className="skill">
                <h3><span>A</span>ngular</h3>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.angular}></div>
                </div>
            </article>

            <article className="skill">
                <h3><span>R</span>eact</h3>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.react}></div>
                </div>
            </article>

            <article className="skill">
                <h3><span>N</span>ode</h3>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.node}></div>
                </div>
            </article>

            <article className="skill">
                <h3><span>H</span>TML5/CSS3</h3>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.htmlcss}></div>
                </div>
            </article>

            <article className="skill">
                <h3><span>J</span>avaScript</h3>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.javascript}></div>
                </div>
            </article>

            <article className="skill">
                <h3><span>L</span>ess</h3>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.less}></div>
                </div>
            </article>

            <article className="skill">
                <h3><span>M</span>ongoDB</h3>

                <div className="skill-bar">
                    <div className="skill-level" style={skillLevel.mongodb}></div>
                </div>
            </article>
        </div>
    );
}

export default Skills;