const courses = [
  {code:"CSE 110", name:"Intro to Programming", credits:2, completed:true, type:"CSE"},
  {code:"WDD 130", name:"Web Fundamentals", credits:2, completed:true, type:"WDD"},
  {code:"CSE 111", name:"Programming with Functions", credits:2, completed:true, type:"CSE"},
  {code:"CSE 210", name:"Programming with Classes", credits:2, completed:false, type:"CSE"},
  {code:"WDD 131", name:"Dynamic Web Fundamentals", credits:2, completed:true, type:"WDD"},
  {code:"WDD 231", name:"Frontend Web Development I", credits:2, completed:false, type:"WDD"}
];

const courseDiv = document.getElementById("courses");
const creditsSpan = document.getElementById("credits");
const allBtn = document.getElementById("all");
const cseBtn = document.getElementById("cse");
const wddBtn = document.getElementById("wdd");

function displayCourses(filtered) {
  courseDiv.innerHTML = "";
  let total = 0;
  filtered.forEach(course => {
    const div = document.createElement("div");
    div.textContent = `${course.code} - ${course.name}`;
    div.className = course.completed ? "course-completed" : "course-not-completed";
    courseDiv.appendChild(div);
    total += course.credits;
  });
  creditsSpan.textContent = total;
}

displayCourses(courses);

allBtn.addEventListener("click", () => displayCourses(courses));
cseBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.type === "CSE")));
wddBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.type === "WDD")));
