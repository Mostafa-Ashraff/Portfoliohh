import Navbar from './Navbar'
import Socails from './Socials';
import Btn from './Btn';
const Hero = () => {
    return ( 
        

        <section id="hero" className="hero">
            <div className="container">
                <div >
                    </div>
                <div >
                    <Navbar />
                    <div className="hero-text">
                        <h1 className="hollow"> Hello,</h1>
                        <h4 className="hero-hd">I’m Mostafa, a Front-end Web Dev.</h4>
                        <p className="hero-p">build a high-quality optimized website for you to reach the masses</p>
                        <Socails small={true}/>
                    </div>
                    <Btn text="See My Work" small={true}/>
                </div>
            </div>
        </section>    

        
    );
}

export default Hero;
/*<Btn text="See My Work"/>

*/