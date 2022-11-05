import { FiChevronDown } from 'react-icons/fi';

const Btn = ({text, small}) => {

    return ( 
        <a href="#projects" className="btn-primary">{text} <FiChevronDown size={small? '2.5rem': '3rem'} /></a>
    );
}

export default Btn;