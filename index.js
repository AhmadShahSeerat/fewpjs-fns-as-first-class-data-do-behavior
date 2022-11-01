document.querySelector("button").addEventListener("click", handleClickk);
function handleClickk(e) {
  const timeStringg = document.getElementById('time').value
  displayMessage(greet(timeStringg)) // messages, greet 
}
function displayMessage(msg) {
  document.getElementById("greeting").textContent = msg; //update the content
}
function greet(time24) {
  const hour = parseInt(time24, 10);
  if ( hour < 12) return "Good Morning" // msg
  if ( hour > 17) return "Good Evening" // msg
  return "Good Afternoon" //msg
}