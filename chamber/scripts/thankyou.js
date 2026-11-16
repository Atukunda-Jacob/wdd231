const params = new URLSearchParams(window.location.search);
const fields = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phone: 'Mobile Number',
  business: 'Business Name',
  timestamp: 'Submitted On'
};
let html = '<ul>';
for (const key in fields) {
  if (params.get(key)) {
    html += `<li><strong>${fields[key]}:</strong> ${params.get(key)}</li>`;
  }
}
html += '</ul>';
document.getElementById('results').innerHTML = html;
