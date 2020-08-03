const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("sideCollapse");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle('active');
})