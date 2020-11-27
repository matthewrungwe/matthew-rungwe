// Styles
import './education.less';

function Education() {
    return (
        <div className="education-wrap">
            <div className="heading">
                <h2>Education</h2>
            </div>

            <article className="institution">
                <div className="institution-program-name">
                    <h3>Pluralsight & Andela Learning Comminity</h3>
                    <p>Google-Africa: Mobile Web Specialist</p>
                </div>

                <div className="program-duration">
                    <p>2019 - 2021</p>
                </div>

                <div className="horizontal-divider">
                    <div className="divider-wrap">
                        <div className="circle"></div>
                        <div className="line"></div>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="program-details">
                    <p>
                        Pluralsight is an online learning platform. 
                        The Mobile Web Specialist track was offered as 
                        a Google Africa Developer Scholarship in partnership 
                        with Pluralsight & the Andela Learning Community
                    </p>
                    <p>
                        Courses Completed: HTML5, CSS3, JavaScript, Bootstrap, 
                        Less, jQuery, Angular, Node, Express
                    </p>
                </div>
                
            </article>

            <article className="institution">
                <div className="institution-program-name">
                    <h3>Udacity & Andela Learning Comminity</h3>
                    <p>Google-Africa: Front-End Web Development</p>
                </div>

                <div className="program-duration">
                    <p>2018</p>
                </div>

                <div className="horizontal-divider">
                    <div className="divider-wrap">
                        <div className="circle"></div>
                        <div className="line"></div>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="program-details">
                    <p>
                        Udacity is an online learning platform. The Front-end 
                        Web Development track was offered as a Google Africa 
                        Developer Scholarship in partnership with Udacity & 
                        the Andela Learning Community.
                    </p>
                    <p>
                        Courses Completed: HTML, CSS, JavaScript, jQuery, 
                    </p>
                </div>
                
            </article>


        </div>
    );
}

export default Education;