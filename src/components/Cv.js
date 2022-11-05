import {BsArrowBarDown} from 'react-icons/bs'

const Cv = ({small}) => {
    return ( <> 
                <a href={require("../cv.pdf")} download="CV" className='cv'>
                    CV <BsArrowBarDown size={'1.3rem'}/>
                </a>
            </> 
    );
}

export default Cv;
