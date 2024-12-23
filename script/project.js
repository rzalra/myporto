export function projectsSectionFunctionality(){
  const projects = [
    {
        image: 'Project.gif',
        title: 'My Daily Journal',
        description: 'Website ini dikembangkan menggunakan HTML,CSS,Java Script dan MySQL',
        role: 'Web Developer',
        clientSatisfaction: '95%'
    },
    {
        image: 'project.gif',
        title: 'Netflix Clone',
        description: 'Dalam project ini, saya mengembangkan clone app Netflix, fokus pada replikasi antarmuka pengguna dan pengalaman visual yang menyerupai aplikasi asli',
        role: 'Front-End Developer',
        clientSatisfaction: '90%'
    },
    {
        image: 'project.gif',
        title: 'List of Usable API',
        description: 'Dalam project ini, saya mengembangkan Node.js dan Express untuk menyediakan API yang mendukung aplikasi streaming seperti Netflix Clone',
        role: 'Back-End Developer',
        clientSatisfaction: '88%'
    }
  ];

  let projectHTML = '';

  projects.forEach(project => {
    projectHTML+= `
      <div class="project-card">
          <div class="container title-and-description">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description semi-transparent-word">
              ${project.description}
            </p>
            <button class="call-to-action-btn">Visit Site</button>
          </div>
          <div class="fade-bgColor"></div>
          <div class="container image-and-result">   
            <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
            <div class="project-result d-flex">
              <div>
                <p class="role semi-transparent-word">Role</p>
                <p class="result">${project.role}</p>
              </div>  
              <div>
                <p class="satisfaction semi-transparent-word">
                  Client satisfaction
                </p>
                <p class="result">${project.clientSatisfaction}</p>
              </div>
            </div>
          </div>
        </div>
    `
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML


}
