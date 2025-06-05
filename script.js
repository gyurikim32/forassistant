function goToNextPage() {
  const name = document.getElementById("nameInput").value;
  if (name) {
    localStorage.setItem("username", name);
    alert("Welcome, " + name + "! (We’ll make the next page soon!)");
  } else {
    alert("Please enter your name!");
  }
}
