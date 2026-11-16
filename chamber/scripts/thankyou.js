const params = new URLSearchParams(window.location.search);

function formatDate(value) {
  if (!value) return '';
  const d = new Date(value);
  return d.toLocaleString();
}

const fields = {
  firstName: 'First Name',
  lastName: 'Last Name',
  title: 'Organizational Title',
  email: 'Email',
  phone: 'Mobile Number',
  business: 'Business Name',
  membership: 'Membership Level',
  description: 'Business Description',
  timestamp: 'Submitted On'
};

let html = '<ul>';
for (const key in fields) {
  let value = params.get(key);
  if (value) {
    if (key === 'timestamp') value = formatDate(value);
    html += `<li><strong>${fields[key]}:</strong> ${value}</li>`;
  }
}
html += '</ul>';
document.getElementById('results').innerHTML = html;
