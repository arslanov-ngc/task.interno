document.addEventListener("DOMContentLoaded", () => {
  // brand
  slider();
  function slider() {
    let brandsParent = document.querySelector(".brands"),
      lastBrand = brandsParent.lastElementChild,
      firstBrand = brandsParent.firstElementChild;

    setInterval(function () {
      changer();
    }, 2000);

    function changer() {
      brandsParent = document.querySelector(".brands");
      lastBrand = brandsParent.lastElementChild;
      firstBrand = brandsParent.firstElementChild;

      brandsParent.insertBefore(lastBrand, firstBrand);
    }
  }
  // project
  const projectsParent = document.querySelector(".projects");
  const projects = [
    {
      img: "img/project/project-1.svg",
      title: "Winery Dry Creek Building",
      type: "Art Modern",
      link: "#",
    },
    {
      img: "img/project/project-2.svg",
      title: "Creative Workplace Design",
      type: "Minimalist",
      link: "#",
    },
    {
      img: "img/project/project-3.svg",
      title: "Bedroom Interior Pot Work",
      type: "Modern",
      link: "#",
    },
    {
      img: "img/project/project-4.svg",
      title: "Light Ambience Sepia Design",
      type: "Scandivanian",
      link: "#",
    },
  ];

  class createProject {
    constructor(img, title, type, link) {
      this.img = img;
      this.title = title;
      this.type = type;
      this.link = link;
    }
    render() {
      const card = document.createElement("div");
      card.classList.add("projects__card");

      card.innerHTML = `
          <div class="card__img">
            <img src=${this.img} alt="project">
          </div>
          <div class="card__content">
            <div>
              <h3 class="title title--small">${this.title}</h3>
              <p class="text">${this.type}</p>
            </div>
          <a href=${this.link} class="button button--circle">
            <span class="button__img">
              <svg viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.771 14.6859L7.71386 8.00017L1.771 1.31445" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      `;
      projectsParent.append(card);
    }
  }
  projects.forEach(({ img, title, type, link }) => {
    new createProject(img, title, type, link).render();
  });

  // project
  const blogsParent = document.querySelector(".blogs");
  const blogs = [
    {
      img: "img/blog/blog-1.svg",
      type: "Kitchen Design",
      title: "Residential Interior Designer In New York, USA",
      date: "November 21, 2021",
      link: "#",
    },
    {
      img: "img/blog/blog-2.svg",
      type: "Living Room",
      title: "How To Choose The Best Wall Art & Decor House?",
      date: "November 22, 2021",
      link: "#",
    },
    {
      img: "img/blog/blog-3.svg",
      type: "Minimalist Interior",
      title: "Tips To Increase The Interior Value Of Your Housek",
      date: "November 23, 2021",
      link: "#",
    },
    {
      img: "img/blog/blog-4.svg",
      type: "Kitchen Design",
      title: "Best Solution For Any Office & Business Interior",
      date: "November 24, 2021",
      link: "#",
    },
    {
      img: "img/blog/blog-5.svg",
      type: "Living Room",
      title: "Get Solution For Building Construction Work",
      date: "November 25, 2021",
      link: "#",
    },
    {
      img: "img/blog/blog-6.svg",
      type: "Minimalist Interior",
      title: "Attain The Best Finish For The Kitchen Cabinets",
      date: "November 26, 2021",
      link: "#",
    },
  ];

  class createBlog {
    constructor(img, type, title, date, link) {
      this.img = img;
      this.type = type;
      this.title = title;
      this.date = date;
      this.link = link;
    }
    render() {
      const card = document.createElement("div");
      card.classList.add("blogs__card");

      card.innerHTML = `
      <div class="card__img">
        <img src=${this.img} alt="blog">
        <div class="img__title">${this.type}</div>
      </div>
      <div class="card__content">
        <h3 class="title title--small">${this.title}</h3>
        <div class="content__info">
          <p class="text">${this.date}</p>
          <a href=${this.link} class="button button--circle">
            <span class="button__img">
              <svg viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.771 14.6859L7.71386 8.00017L1.771 1.31445" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      `;
      blogsParent.append(card);
    }
  }
  blogs.forEach(({ img, type, title, date, link }) => {
    new createBlog(img, type, title, date, link).render();
  });

  // hamburger menu
  const navbar = document.querySelector(".navbar__nav .nav__links"),
    menu = document.querySelector(".hamburger__menu"),
    close = document.querySelector(".hamburger__close");

  menu.addEventListener("click", () => {
    navbar.classList.replace("deactive", "active");
    menu.style.display = "none";
    close.style.display = "block";
    close.classList.add(fade);
  });
  close.addEventListener("click", () => {
    navbar.classList.replace("active", "deactive");
    close.style.display = "none";
    menu.style.display = "block";
    menu.classList.add(fade);
  });
});
