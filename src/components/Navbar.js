import Cv from "./Cv";

const  Navbar= () => {
    return ( 
    
            <nav className="nav ">
                <div className="links">
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <Cv small={true}/>
            </nav>
        
    );
}

export default Navbar;
