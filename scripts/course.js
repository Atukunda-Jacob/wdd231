const courses = [
    { subject: 'CSE', number: 110, title: 'Intro to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
    { subject: 'WDD', number: 231, title: 'Web Frontend Development I', credits: 2, completed: false }
];

const courseListDiv = document.getElementById('courseList');
const totalCreditsP = document.getElementById('totalCredits');

function displayCourses(filteredCourses) {
    courseListDiv.innerHTML = '';
    filteredCourses.forEach(course => {
        const div = document.createElement('div');
        div.classList.add('course-card');
        div.classList.add(course.completed ? 'completed' : 'not-completed');
        div.textContent = `${course.subject} ${course.number}`;
        courseListDiv.appendChild(div);
    });
    const total = filteredCourses.reduce((sum, c) => sum + c.credits, 0);
    totalCreditsP.textContent = `The total number of credits listed above is ${total}`;
}

displayCourses(courses);

document.getElementById('allBtn').addEventListener('click', () => displayCourses(courses));
document.getElementById('cseBtn').addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'CSE')));
document.getElementById('wddBtn').addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'WDD')));
