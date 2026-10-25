const courses=[
 {subject:'CSE',number:110,title:'Intro to Programming',credits:2,certificate:'Web and Computer Programming',description:'Basics of programming with Python',technology:['Python'],completed:true},
 {subject:'WDD',number:130,title:'Web Fundamentals',credits:2,certificate:'Web and Computer Programming',description:'Learn HTML and CSS',technology:['HTML','CSS'],completed:true},
 {subject:'CSE',number:111,title:'Programming with Functions',credits:2,certificate:'Web and Computer Programming',description:'Functions and reuse',technology:['Python'],completed:true},
 {subject:'CSE',number:210,title:'Programming with Classes',credits:2,certificate:'Web and Computer Programming',description:'OOP principles',technology:['C#'],completed:false},
 {subject:'WDD',number:131,title:'Dynamic Web Fundamentals',credits:2,certificate:'Web and Computer Programming',description:'Dynamic websites with JS',technology:['HTML','CSS','JS'],completed:true},
 {subject:'WDD',number:231,title:'Frontend Development I',credits:2,certificate:'Web and Computer Programming',description:'Responsive and accessibility',technology:['HTML','CSS','JS'],completed:false}
];
const list=document.getElementById('course-list');
const creditText=document.getElementById('credit-count');
const dialog=document.getElementById('course-details');
function render(filtered){
 list.innerHTML='';
 filtered.forEach(c=>{
  const d=document.createElement('div');
  d.textContent=`${c.subject} ${c.number}`;
  d.className=c.completed?'course-completed':'course-incomplete';
  d.addEventListener('click',()=>showModal(c));
  list.appendChild(d);
 });
 const total=filtered.reduce((a,b)=>a+b.credits,0);
 creditText.textContent=`Total credits: ${total}`;
}
function showModal(c){
 dialog.innerHTML=`<button>❌</button><h2>${c.subject} ${c.number}</h2><h3>${c.title}</h3><p><strong>Credits:</strong> ${c.credits}</p><p><strong>Certificate:</strong> ${c.certificate}</p><p>${c.description}</p><p><strong>Tech:</strong> ${c.technology.join(', ')}</p>`;
 dialog.showModal();
 dialog.querySelector('button').addEventListener('click',()=>dialog.close());
}
document.getElementById('all').addEventListener('click',e=>{document.querySelectorAll('.filter-buttons button').forEach(b=>b.classList.remove('active-filter'));e.target.classList.add('active-filter');render(courses)});
document.getElementById('cse').addEventListener('click',e=>{document.querySelectorAll('.filter-buttons button').forEach(b=>b.classList.remove('active-filter'));e.target.classList.add('active-filter');render(courses.filter(x=>x.subject==='CSE'))});
document.getElementById('wdd').addEventListener('click',e=>{document.querySelectorAll('.filter-buttons button').forEach(b=>b.classList.remove('active-filter'));e.target.classList.add('active-filter');render(courses.filter(x=>x.subject==='WDD'))});
render(courses);
