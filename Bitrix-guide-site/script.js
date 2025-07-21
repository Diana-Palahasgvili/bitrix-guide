// Подгрузка header
fetch("./template/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    const burger = document.getElementById("burger");
    if (burger) {
      burger.addEventListener("click", toggleMenu);
    }
  });

// Подгрузка sidebar
fetch("./template/sidebar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("sidebar").innerHTML = data;
  });

function toggleMenu() {
  const sidebar = document.querySelector(".sidebar"); // меняем на querySelector
  sidebar.classList.toggle("active");
  document.body.classList.toggle("menu-open");
}
