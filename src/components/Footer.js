import Socails from './Socials';
import { BsChevronUp } from 'react-icons/bs';
const Footer = () => {
    return ( 
        <>
            <footer className="footer">
            
                <div className="footer-info container">
                    <div className="info">
                        <Socails small={true}/>
                        <p>All Copyrights are reserved© 2022</p>
                    </div>
                    <a class="up" href="#hero"><BsChevronUp size="3rem" /></a>
                </div>    
            
            </footer>
        </>
    );
}

export default Footer;