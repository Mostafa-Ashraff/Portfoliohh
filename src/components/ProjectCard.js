import {Link} from 'react-router-dom'
const ProjectCard = ({id, img, title, description,github, live}) => {
    return (
        <div className="project-card">
            <img src={img} alt="displaying the project UI"/>
            <div className="card-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
                <a href={live}>Live Demo</a>
                <a href={github}>Source Code</a>
            </div>
            </div>
        </div>

    );    

}

export default ProjectCard;

/*            <Link to={`/projects/${id}`}>
                <div className="project-card">
                    <img src={img} alt="displaying the project UI"/>
                    <div className="card-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="project-links">
                        <a className="btn-primary" href="">Live Demo</a>
                        <a  href="">Source Code</a>
                    </div>
                    </div>
                </div>
            </Link>*/