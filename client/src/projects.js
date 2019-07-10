const projects = [
  {
    id: '1',
    data: {
      name: 'E and E Automotive Services',
      description: 'A simple information website for a local business that needed a web presence. I incorporated the Google Maps Embeded API and the Yelp Reviews API to dynamically display the most current Yelp user reviews.',
      technologies: 'HTML, CSS, Javascript, Node.js, Express',
      images: [
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/eande-1.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/eande-2.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/eande-3.png'
      ],
      appLink: 'https://eandeautomotiveservices.herokuapp.com/',
      githubLink: 'https://github.com/jasonrowland86/eandeautomotiveservices',
    }
  },
  {
    id: '2',
    data: {
      name: 'Whole Sky Healing Arts',
      description: 'A personal business site.',
      technologies: 'HTML, CSS, Javascript, React, Node.js, Express',
      images: [
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/wholesky-app.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/wholesky-app-1.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/wholesky-app-2.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/wholesky-app-4.png'
      ],
      appLink: 'http://wholeskyhealingarts.com/',
      githubLink: 'https://github.com/jasonrowland86/WholeSky-React-Express',
    }
  },
  {
    id: '3',
    data: {
      name: 'UFC Fight Pick App',
      description: 'A web app that uses the Express MVC and the isomorphic-fetch API to let users search for and compare two fighters. A user can make and save their fight picks for an up coming event.',
      technologies: 'HTML, CSS, Javascript, Node.js, Express, PostgreSQL',
      images: [
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/fight-pick-app.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/fight-pick-app-1.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/fight-pick-app-2.png'
      ],
      appLink: 'https://fightpickapp.herokuapp.com/',
      githubLink: 'https://github.com/jasonrowland86/Project-2-App',
    }
  },
  {
    id: '4',
    data: {
      name: 'Aquarium App',
      description: 'A Ruby on Rails CRUD web app that uses CSS animations to make an aquarium of fish swim around.',
      technologies: 'HTML, CSS, Javascript, Ruby',
      images: [
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/aquarium-app-1.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/aquarium-app.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/aquarium-app-2.png'
      ],
      appLink: 'https://aquarium-app.herokuapp.com/',
      githubLink: 'https://github.com/jasonrowland86/Aquarium',
    }
  },
  {
    id: '5',
      data: {
      name: 'Okurio Project Managment',
      description: 'A collaborative project I worked on to build a project management web app. Built with React and Express, an admin can create and manage a project by assigning tasks to project memebers.',
      technologies: 'HTML, CSS, Javascript, React, Node.js, Express, PostgreSQL',
      images: [
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/okurio-app.png'
      ],
      appLink: '',
      githubLink: 'https://github.com/RajisteB/Occurio',
    }
  },
  {
    id: '6',
    data: {
      name: 'Simon',
      description: 'The classic game Simon. Made with Javascript.',
      technologies: 'HTML, CSS, Javascript',
      images: [
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/simon.png',
        'https://s3.us-east-2.amazonaws.com/jasonrowland.co/simon-2.png'
      ],
      appLink: 'http://jasonrowland-simongame.bitballoon.com/',
      githubLink: 'https://github.com/jasonrowland86/Simon-Game',
    }
  }
]
console.log('Projects loaded');

export default projects;
