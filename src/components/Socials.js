
import { BsGithub, BsLinkedin } from 'react-icons/bs';
const Socails = ({small}) => {
    return (  
        <>
            <div className="socials">
                <a href="https://github.com/Mostafa-Ashraff">
                    <BsGithub size={small? '3rem': '5rem'} />
                </a>
                <a href="https://www.linkedin.com/in/mostafa-ashraf-m12345678/">
                    <BsLinkedin size={small? '3rem': '5rem'} />
                </a>
            </div>
        </>
    );
}

export default Socails