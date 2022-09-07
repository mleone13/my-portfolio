import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";
import ProjectCard from '../ProjectCard';
import pic5 from '../../assets/small/project-pics/5.jpg';
import pic6 from '../../assets/small/project-pics/6.jpg';
import pic7 from '../../assets/small/project-pics/7.jpg';
import pic8 from '../../assets/small/8.png';

function Portfolio() {
    const myProjects=[
        {
            id:1,
            title:'Run Buddy',
            description: '',
            deployedUrl: '',
            gitHubUrl: 'https://mleone13.github.io/run-buddy/',
            image:pic5,
        },

        {
            id:2,
            title:'Your Next Meal',
            description: '',
            deployedUrl: '',
            gitHubUrl: 'https://mleone13.github.io/your-next-meal/',
            image:pic7,
        },
        {
            id:3,
            title:'This Kings Mile',
            description: '',
            deployedUrl: '',
            gitHubUrl: 'https://the-kings-mile.herokuapp.com/',
            image:pic6,
        },
        {
            id:4,
            title:'Plenty of Pups',
            description: '',
            deployedUrl: '',
            gitHubUrl: 'https://github.com/mleone13/project-3',
            image:pic8,
        },
        // {
        //     id:5,
        //     title:'P 5',
        //     description: '',
        //     deployedUrl: '',
        //     gitHubUrl: '',
        //     image:'',
        // },
        // {
        //     id:6,
        //     title:'P 6',
        //     description: '',
        //     deployedUrl: '',
        //     gitHubUrl: '',
        //     image:'',
        // },
    ]
  return (
    <section className='my-5'>
      <h1 id="portfolio">My Work</h1>
      <div>
        {myProjects.map(project=>(
            <ProjectCard project={project}/>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;