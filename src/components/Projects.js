import data from '../projectsData.js'
import ProjectCard from './ProjectCard'
const Projects = () => {
    let cards = data.map(project=>{
        return <ProjectCard id={project.id} key={project.id} 
        img={project.img} title={project.title} description={project.description}
        live={project.live} github={project.github}
        />
    }) 
    return ( 
        <section className="projects" id="projects">
            <h2 className="section-hd">Projects</h2>
            <div className="project-cards container">
                {cards}
            </div>
        </section>

        

        
    
    );
}

export default Projects;
//<ProjectCard img={require('../images/ECOMMERCE.png')} title={data[0].title} description={data[0].description}/>