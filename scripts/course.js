const courses = [
  {subject:'CSE',number:110,title:'Intro to Programming',credits:2,completed:true},
  {subject:'WDD',number:130,title:'Web Fundamentals',credits:2,completed:true},
  {subject:'CSE',number:111,title:'Programming with Functions',credits:2,completed:true},
  {subject:'CSE',number:210,title:'Programming with Classes',credits:2,completed:false},
  {subject:'WDD',number:131,title:'Dynamic Web Fundamentals',credits:2,completed:true},
  {subject:'WDD',number:231,title:'Web Frontend Development I',credits:2,completed:false}
];

const courseList = document.getElementById("course-list");
const creditsSpan = document.getElementById("credits");
const allBtn = document.getElementById("all");
const cseBtn = document.getElementById("cse");
const wddBtn = document.getElementById("wdd");

function displayCourses(list){
  courseList.innerHTML = "";
  list.forEach(course => {
    const div = document.createElement("div");
    div.className = course.completed ? "course completed" : "course incomplete";
    div.textContent = `${course.subject} ${course.number} - ${course.title}`;
    courseList.appendChild(div);
  });
  const total = list.reduce((sum,c) => sum + c.credits, 0);
  creditsSpan.textContent = total;
}

displayCourses(courses);

allBtn.addEventListener("click", () => displayCourses(courses));
cseBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE")));
wddBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD")));
