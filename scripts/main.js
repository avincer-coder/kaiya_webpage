function updateText() {
  const textElement = document.getElementById("responsiveText");
  const textElementTwo = document.getElementById("responsiveTextTwo")
  if (window.innerWidth <= 374) {
    textElement.textContent = "Welcome to MamaSupport, your trusted partner in navigating the beautiful yet challenging journey of parenthood. My mission is to support young parents.";
    textElementTwo.textContent = "MamaSupport offers a secure, on-demand video chat platform that connects you with someone to answer your questions, concerns, struggles, and anything else. Whether you’re dealing with sleepless nights, developmental milestones, or the unique needs of a neurodiverse child, my service provides real-time, personalized guidance from the comfort of your home.";
  } else if (window.innerWidth <= 425) {
    textElement.textContent = "Welcome to MamaSupport, your trusted partner in navigating the beautiful yet challenging journey of parenthood. My mission is to support young parents. MamaSupport offers a secure, on-demand video chat platform that connects you with someone to answer";
    textElementTwo.textContent = "your questions, concerns, struggles, and anything else. Whether you’re dealing with sleepless nights, developmental milestones, or the unique needs of a neurodiverse child, my service provides real-time, personalized guidance from the comfort of your home.";
  } else if (window.innerWidth <= 768){
    textElement.textContent = "Welcome to MamaSupport, your trusted partner in navigating the beautiful yet challenging journey of parenthood. My mission is to support young parents. MamaSupport offers a secure, on-demand video chat platform that connects you with someone to answer your questions, concerns, struggles, and anything else. Whether you’re dealing with sleepless nights,";
    textElementTwo.textContent = "developmental milestones, or the unique needs of a neurodiverse child, my service provides real-time, personalized guidance from the comfort of your home."
  } else {
  textElement.textContent = "Welcome to MamaSupport, your trusted partner in navigating the beautiful yet challenging journey of parenthood. My mission is to support young parents. MamaSupport offers a secure, on-demand video chat platform that connects you with someone to answer your questions, concerns, struggles, and anything else. Whether you’re dealing with sleepless nights,";
}

}

// Llamar al cargar la página
updateText();
// Escuchar cuando el usuario cambia el tamaño de la ventana
window.addEventListener("resize", updateText);