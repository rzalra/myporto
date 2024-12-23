export function RenderContent(){


  // ----------------RENDERING HOME SECTION-------------------//
  const homeDetails = {
    greetTxt: `Hello visitor, I'm`,
    name: 'Rizal Nugrahanto',
    profilePhoto: 'foto7.jpeg',
    welcomeTxt: 'Welcome to my personal portfolio.',
    waLink: 'https://wa.link/wbuawd',
    tiktokLink: 'https://www.tiktok.com/@rzalraa?_t=8sS5OpJz967&_r=1',
    instagramLink: 'https://www.instagram.com/rzalra',
    ytLink: 'https://youtube.com/@vanzelcuy?si=mcrQzqdnqoip_nRB'
  }

  const homeHTML = `
    <div class="profile-detail">
      <p>${homeDetails.greetTxt}</p>
      <h1 class="my-name gradient-word">${homeDetails.name}</h1>
      <h2 class="display-skills gradient-word"></h2>
      <p>${homeDetails.welcomeTxt}</p>
      <div class="my-social-media-accounts">
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.waLink}">
          <img src="images and icons/icons/wa.png" alt="wa icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.tiktokLink}">
          <img src="images and icons/icons/tik-tok.png" alt="tiktok icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.ytLink}">
          <img src="images and icons/icons/youtube.png" alt="YT icon" />
        </a>
        <a class="social-media" target="_blank" href="${homeDetails.instagramLink}">
          <img src="images and icons/icons/instagram (1).png" alt="insta icon" />
        </a>
      </div>
    </div>

    <div class="profile-pic">
      <div id="first-layer">
        <img
          id="profile-img"
          src="images and icons/images/${homeDetails.profilePhoto}"
          alt="profile img" />
      </div>
    </div>
  `;
  
  const homeSection = document.querySelector('#home-section').innerHTML = homeHTML;
    




   // ----------------RENDERING ABOUT SECTION-------------------//
   const aboutDetails = {
    myPhoto: 'mukagw.jpeg',
    aboutMeFirstPrgrph: `Hello, my name is Rizal Nugrahanto or called by Rizal, a passionate and dedicated Informatics Engineering. I also enjoy exploring`,
    aboutMeSecondPrgrph: `With a strong foundation in problem-solving and a constant drive to learn, I am committed to delivering impactful project and contributing to the ever-evolving tech industry. Explore my portfolio to discover the skills, project, and experiences that define my journey in the world of technology .`
  }

   const aboutHTML = `
    <h2 class="section-name about">ABOUT ME <span class="line"></span></h2>
    <div class="container">
      <div>
        <img
          class="profile-pic"
          src="images and icons/images/${aboutDetails.myPhoto}"
          alt="profile img" />
      </div>
      <div class="about-self scroll-reveal">
        <p class="first-paragraph">
          <span>${aboutDetails.aboutMeFirstPrgrph}</span>
        </p>
        <br />
        <p class="second-paragraph">
          <span>${aboutDetails.aboutMeSecondPrgrph}</span>
        </p>
      </div>
    </div>
   `

  const aboutSection = document.querySelector('#about-section').innerHTML = aboutHTML;




    // ----------------RENDERING SKILLS SECTION-------------------//

    const skills = [
      { iconName: "html.png", skillName: "HTML" },
      { iconName: "CSS.png", skillName: "CSS" },
      { iconName: "java-script.png", skillName: "JavaScript" },
      { iconName: "phyton.png", skillName: "Phyton" },
      { iconName: "Git.png", skillName: "Git" },
      { iconName: "github (2).png", skillName: "GitHub" },
      { iconName: "MySQL.png", skillName: "MySQL" },
      { iconName: "Xampp.png", skillName: "Xampp" },
      { iconName: "visual-studio.png", skillName: "VScode" },
    ];

    const skillHTML = `
        <h2 class="section-name"><span class="line"></span> SKILLS</h2>
          
          <div class="skills-container d-flex">
          </div>
    `

  const skillSection = document.querySelector('#skills-section').innerHTML = skillHTML;
  
  let skillCard = ''
  skills.forEach(skill => {
   skillCard += `<div class="skill">
    <img src="images and icons/icons/${skill.iconName}" alt="" class="skill-icon">
    <p class="skill-name">${skill.skillName}</p>
  </div>`
  });
  const skillsContainer = document.querySelector('.skills-container').innerHTML = skillCard;




  // ----------------RENDERING CONTACT SECTION-------------------//
  const contactDetails = {
    heading: ' CONNECT WITH ME',
    subheading: 'Let’s Make Something Cool Together',
  }
  const contactHTML = `
    <h2 class="section-name">${contactDetails.heading}</h2>
    <p class="subheading">${contactDetails.subheading}</p>
    <form class="f-flex">
      <div class="input-container">
        <input class="input name" type="text" placeholder="Name" required />
        <input class="input email" type="email" placeholder="Email" required/>
      </div>

      <div class="txt-area-btn-container">
        <textarea name="Message-me" class="input" placeholder="Enter your Messsage"></textarea> 
        <button id="submit-btn">Submit</button>
      </div>
    
    </form>
  `;

  const contactSection = document.querySelector('#contact-section').innerHTML = contactHTML;
}
