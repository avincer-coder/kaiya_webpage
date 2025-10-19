function updateText() {
  const textElement = document.getElementById("responsiveText");

  if (window.innerWidth <= 321) {
    textElement.textContent = "Welcome to MamaSupport, your trusted partner in navigating the beautiful yet challenging journey of parenthood. My mission is to support young parents.";
  } else if (window.innerWidth <= 376) {
    textElement.textContent = "Welcome to MamaSupport, your trusted partner in navigating the beautiful yet challenging journey of parenthood. My mission is to support young parents. MamaSupport offers a secure, on-demand video chat platform that connects you with someone to answer";
  } else if (window.innerWidth <= 426){
    textElement.textContent = "Welcome to MamaSupport, your trusted partner in navigating the beautiful yet challenging journey of parenthood. My mission is to support young parents. MamaSupport offers a secure, on-demand video chat platform that connects you with someone to answer your questions, concerns, struggles, and anything else. Whether you’re dealing with sleepless nights,";
  } else {
  textElement.textContent = "Texto largo para pantallas grandes o laptops.";
}

}

// Llamar al cargar la página
updateText();
// Escuchar cuando el usuario cambia el tamaño de la ventana
window.addEventListener("resize", updateText);