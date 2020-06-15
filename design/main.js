const jobOffer = {
  "id": 1,
  "company": "Photosnap",
  "logo": "./images/photosnap.svg",
  "new": true,
  "position": "Senior Frontend Developer",
  "role": "Frontend",
  "postedAt": "1d ago",
  "contract": "Full Time",
  "location": "USA Only",
  "languages": ["HTML", "CSS", "JavaScript"],
  "tools": []
};

const cardsContainer = document.getElementById("cards-container");
function jobTag(company, isNew) {
  return `
    <div class="job_tag">
    <ul>
      <li class='company'>${company}</li>
      ${isNew ? "<li class='new-old'>NEW!</li>" : "" } 
    </ul>
  </div>
  `
};

function cardTemplate(jobOffer) {
  return `
  <article class="card">
    <div class="card-job">
    ${jobTag(jobOffer.company, jobOffer.new)}
    </div>
  </article>
  `
};

cardsContainer.innerHTML = cardTemplate(jobOffer);

fetch("./data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  });
