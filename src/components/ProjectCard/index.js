import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";

function ProjectCard({project}) {
  return (
    <div className='card'>
      <h1 id="title">{project.title}</h1>
      <img src={project.image} alt={project.title}/>
    </div>
  );
}

export default ProjectCard;