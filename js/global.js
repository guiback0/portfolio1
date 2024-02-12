// Menu Mobile

function menuMobile () {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.navbar a');

  btn.addEventListener('click', () => {
    header.classList.toggle('show__nav');
  })

  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('show__nav')
    })
  })
}

menuMobile()

// Portfolio


function tabFilters() {
  const tabs = document.querySelectorAll('.portfolio__filters a');
  const projects = document.querySelectorAll('.portfolio .card')

  const resetActiveLinks = () => {
    tabs.forEach(elem => {
      elem.classList.remove('active');
    })
  }

  const showProjects = (elem) => {
    console.log(elem)
    projects.forEach(project => {


    let filter = project.getAttribute('data-category');

      if (elem === 'all') {
        project.parentNode.classList.remove('hide');
        project.parentNode.classList.add('error');
        return 
      }
          
      if (filter !== elem) {
        project.parentNode.classList.add('hide');
        project.parentNode.classList.add('error');
      
      } else {
        project.parentNode.classList.remove('hide');
        project.parentNode.classList.remove('error');
      }


    });
  }

  tabs.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let filter = elem.getAttribute('data-filter');
      showProjects(filter)
      resetActiveLinks();
      elem.classList.add('active');
    });
  })
}


tabFilters()


function showProjectDetails() {
  const links = document.querySelectorAll('.card__link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const hideModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  links.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
    });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      hideModals();
    });
  });

}
  
showProjectDetails();
  
const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');
  const skills = document.querySelectorAll('.skills .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();


function sendMail() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var mailtoLink = "mailto:adresse@email.com" +
    "?subject=Message%20de%20" + encodeURIComponent(firstname + " " + lastname) +
    "&body=" + encodeURIComponent("Email: " + email + "\n\nMessage:\n" + message);

  window.location.href = mailtoLink;
}