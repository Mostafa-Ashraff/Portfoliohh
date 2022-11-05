/*import { useParams, Link } from 'react-router-dom';
import data from '../projectsData.js'
import Navbar from './Navbar.js';
const ProjectDetails = () => {
    const {id} = useParams();
    console.log(id)
    let project = data.find((project)=> project.id == id)
    console.log(project)
    return ( 
        <>
        
            <div className="product-details ">          
                
                    <img src={project.img} alt="" />
                    <div className="container">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
                <a href="">Live Demo</a>
                <a href="">Source Code</a>
                <Link to="/">Home</Link>
            </div>

        </>
    );
}

export default ProjectDetails;*/