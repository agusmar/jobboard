const jobOffers = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

let filterTags = {
  role: [],
  languages: [],
  tools: [],
};

let filterList = []; //Array vacío.

const cardsContainer = document.getElementById("cards-container");
const filter = document.getElementById("filter");

fetch("data.json")
  .then(resp => resp.json())
  .then(data => {
    const x = data
  });

function jobTag(company, isNew) {
  return `
    <div class="job_tag">
      <ul>
        <li class="company">${company}</li>
        ${isNew ? "<li class='isNew'> NEW! </li>" : ""}
      </ul>
    </div>
  `;
}

function companyLogo(logo) {
  return `
    <div>
      <img src="${logo}" alt="logo"/>
    </div>
  `;
}

function job(position) {
  return `
  <h1 class="job">
    ${position}
  </h1>
  `;
}

function jobBottom(postedAt, contract, location) {
  return `
  <div class="job_bottom">
    <ul>
      <li>${postedAt}</li>
      <li>·</li>
      <li>${contract}</li>
      <li>·</li>
      <li>${location}</li>
    </ul>
  </div>
  `;
}


function tags(languages, tools, role) {
  const tag = (tagName, tagType) => `
    <li><button class='tag-btn' data-tagtype='${tagType}' data-tag='${tagName}' >${tagName}</i></button> </li>
  `;

  const tagLanguage = (tagName) => tag(tagName, "languages");
  const tagRole = (tagName) => tag(tagName, "role");
  const tagTools = (tagName) => tag(tagName, "tools");

  languageTags = languages.map(tagLanguage);
  toolsTags = tools.map(tagTools);
  roleTag = tagRole(role);
  
  return [roleTag].concat(languageTags, toolsTags).join("");
}


function cardTemplate(jobOffer) {
  return `
      <article class="card">
        <div class="card-job">
          ${companyLogo(jobOffer.logo)}
          <div class="card-job_details">
            ${jobTag(jobOffer.company, jobOffer.new)}
            ${job(jobOffer.position)}
            ${jobBottom(
              jobOffer.postedAt,
              jobOffer.contract,
              jobOffer.location
            )}
          </div>
        </div>
        <div class="tags">
          <ul>
            ${tags(jobOffer.languages, jobOffer.tools, jobOffer.role)}
          </ul>
        </div>
      </article>
  `;
}


function toggleFilter(name, type) {
  filterTypes = ["languages", "tools", "role"];
  const tags = filterTags[type];

  if (!filterTypes.includes(type)) {
    console.warn(`${type} type is not a valid filter`);
    filterList.splice(filterList.indexOf(name), 1); //Al recibir un valor undefined elimina el item del filterList
    return;
  } 
  
  if (tags.includes(name)) {
    tags.splice(tags.indexOf(name), 1);
    filterList.splice(filterList.indexOf(name),1); //Si ya existe lo elimina del array filterList
  } else {
    tags.push(name);
    filterList.push(name);  //Incluye el name en un array vacío llamado filterList
  }

  console.log(filterList)

  }

//Función que primero limpia lo que se está mostrando para así luego mostrar el contenido actualizado de la filterList.
 function filterButtonTemplate() {
  filter.innerHTML = '';
  filterList.forEach((item, index) => {
    filter.innerHTML += `<li><button class='tag-btn' data-name='${item}'>${filterList[index]}<i class="fas fa-times x"></i></button> </li>`;
  });

} 

function filterOffer(jobOffer) {

  const filterLanguages = filterTags.languages;
  const hasLanguages = filterLanguages.reduce(
    (previous, language) => previous && jobOffer.languages.includes(language),
    true
  );

  const filterRole = filterTags.role;
  const hasRole = filterRole.reduce(
    (previous, role) => previous && jobOffer.role == role,
    true
  );

  const filterTools = filterTags.tools;
  const hasTools = filterTools.reduce(
    (previous, tool) => previous && jobOffer.tools.includes(tool),
    true
  );

  return hasLanguages && hasRole && hasTools;
}

function render() {
  cardsContainer.innerHTML = jobOffers
    .filter(filterOffer)
    .map(cardTemplate)
    .join("");

  document.querySelectorAll(".tag-btn").forEach((item) => {
    item.addEventListener("click", (e) => {
      const tag = e.target.dataset.tag;
      const type = e.target.dataset.tagtype;

      toggleFilter(tag, type);
      filterButtonTemplate(); //llamada de la función que limpia y actualiza lo que se muestra en pantalla.
      render();
    });
  });
}

render();