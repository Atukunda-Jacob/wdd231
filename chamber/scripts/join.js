document.getElementById("timestamp").value = new Date().toLocaleString();

// For thankyou page
const params = new URLSearchParams(window.location.search);
if (document.getElementById("results")) {
  let output = "";
  params.forEach((value, key) => {
    output += `<p><strong>${key}:</strong> ${value}</p>`;
  });
  document.getElementById("results").innerHTML = output;
}
