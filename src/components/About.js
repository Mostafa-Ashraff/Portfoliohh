import stack from '../images/stack.png'
import pirate from '../images/pirate.png'
const About = () => {
    return ( 
        
            <section className="about" id="about">
                <h2 className="section-hd">About</h2>
                <div className="about-flex container">
                    <div className="pirate">
                        <img src={pirate} alt="pirate drawing " />
                    </div>
                    <div className="about-text">
                    <div className="intro">
                            <h3>Who Am I?</h3>
                            <p>I'm Mostafa,  a self-taught front-end web developer & UI designer, I started my coding journey after I made up my mind that civil engineering is not a suitable career for me, my goals and my personality and fell in love with it, I love the constant learning process in the ever-changing field of technology and the thrill I get after making something out of nothing, Oh & I love the sea life & pirate films.</p>
                        </div>
                        <div className="stack">
                            <h3>My Toolbelt</h3>
                            <img src={stack} alt="tech stack " />
                        </div>
                    </div>
                </div>
            </section>
        
    );
}

export default About;