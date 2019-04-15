
const studentContainer = document.querySelector("#container");
//^^used to grab the container to input students in the functions below

const students = [
  {
    name: "Chris Miller",
    subject: "History",
    info: "Failed last exam",
    score: 59
  },
  {
    name: "Courtney Seward",
    subject: "History",
    info: "Has completed all homework",
    score: 91
  },
  {
    name: "Garrett Ward",
    subject: "History",
    info: "Wonderful at helping other students",
    score: 88
  },
  {
    name: "John Dulaney",
    subject: "History",
    info: "Has never missed a class or exam",
    score: 92
  },
  {
    name: "Greg Lawrence",
    subject: "History",
    info: "Sub-par performance all around",
    score: 64
  },
  {
    name: "Leah Duvic",
    subject: "History",
    info: "Wonderful student",
    score: 97
  },
  {
    name: "Jesse Page",
    subject: "History",
    info: "Smokes too much. Distracting.",
    score: 76
  },
  {
    name: "Kevin Haggerty",
    subject: "History",
    info: "Falls asleep in class",
    score: 79
  },
  {
    name: "Max Wolf",
    subject: "History",
    info: "Talks too much",
    score: 83
  },
  {
    name: "Lissa Goforth",
    subject: "History",
    info: "Asks pointless, unrelated questions",
    score: 78
  },
  {
    name: "Tyler Bowman",
    subject: "History",
    info: "When was the last time he attended class?",
    score: 48
  },
  {
    name: "Ray Medrano",
    subject: "History",
    info: "Needs to contribute to in-class discussions",
    score: 95
  }
]

//write functions to create h1 section and aside

// const h1 = (name) => {
//   // the function needs to create an element and then take an argument that plugs the data into the element - does not need to append
//   let data = document.createTextNode(name);
//   let newH = document.createElement("H1");
//   newH.appendChild(data);
//   console.log(newH);
//   document.parentNode.appendChild(newH);
// }

// const h1 = (name) => {
//   return `<h1>${name}</h1>`
// }
// const section = (subject) => {
//   return `<section>${subject}</section>`
// }
// const aside = (info) => {
//   return `<aside>${info}</aside>`
// }

const element = (type, content, style) => {
  let el = document.createElement(type);
  el.className = style;
  el.textContent = content;
  studentContainer.appendChild(el);
}

const createStudentComponents = (objArr) => {
  for (const student of objArr) {
    let studentComponent = "";
    student.status = "";
    if (student.score >= 60) {
      student.status = "passing";
    } else {
      student.status = "failing";
    }
    studentComponent = `<div class="student">
      ${element("H1", student.name, `xx-large ${student.status}`)}
      ${element("SECTION", student.subject, "bordered dashed section--padded")}
      ${element("ASIDE", student.info, "pushRight")}
      </div >`
  }
}

createStudentComponents(students);