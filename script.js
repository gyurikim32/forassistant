function goToNextPage() {
  const name = document.getElementById("nameInput").value;
  if (name) {
    localStorage.setItem("username", name);
    window.location.href = "character.html";
  } else {
    alert("Please enter your name!");
  }
}
