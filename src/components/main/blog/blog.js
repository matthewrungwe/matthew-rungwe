// Styles
import './blog.less';

// Images
import featuredArticleImg from '../../../assests/images/blog/resource-inventory-annie-theby-min.jpg';
import recentArticleImg1 from '../../../assests/images/blog/stand-out-as-a-developer-luke-chesser-min.jpg';
import recentArticleImg2 from '../../../assests/images/blog/plan-your-learning-kelly-sikkema-min.jpg';

function Blog() {
    return (
        <div className="blog-wrap">
            <div className="heading">
                <h2>Blog</h2>
            </div>

            {/* Featured Article */}
            <div className="featured-article">
                <article className="article">
                    <div className="article-img">
                        <img src={featuredArticleImg} alt="" />
                    </div>
                    <div className="article-content">
                        <a href="https://dev.to/matthewrungwe/a-developer-s-resource-inventory-561e" target="_blank" rel="noreferrer" >
                            <h3>A Developer's Resource Inventory</h3>
                        </a>

                        <p>
                            Have you ever found yourself thinking about a 
                            resource you used last time? A Resource Inventory 
                            that can help you package all the resources.
                        </p>
                    </div>
                </article>
            </div>

            {/* Recent Articles */}
            <div className="recent-articles">
                <article className="article one">
                    <div className="article-img">
                        <img src={recentArticleImg1} alt="" />
                    </div>

                    <div className="article-content">
                        <a href="https://dev.to/matthewrungwe/how-to-be-a-stand-out-as-developer-53h3"  target="_blank" rel="noreferrer" >
                            <h3>How to Stand Out as a Developer?</h3>
                        </a>

                        <p>
                            Being a developer is a stepping stone to bringing 
                            the creative world hidden within you. Everyone 
                            has this this element of creativity. 
                        </p>
                    </div>
                </article>
                
                <article className="article two">
                    <div className="article-img">
                        <img src={recentArticleImg2} alt="" />
                    </div>

                    <div className="article-content">
                        <a href="https://dev.to/matthewrungwe/your-learning-plan-4dp8"  target="_blank" rel="noreferrer" >
                            <h3>Your Learning Plan</h3>
                        </a>
                    
                        <p>
                            We are always learning something new every single
                            day. When you are learning something complex, you
                            may need  a more structured approach.
                        </p>
                    </div>
                </article>
            </div>

            <div className="blog-link">
                <a href="https://dev.to/matthewrungwe" target="_blank" rel="noreferrer" >All Articles</a>
            </div>
        </div>
    );
}

export default Blog;