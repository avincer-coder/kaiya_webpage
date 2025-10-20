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
  textElementTwo.textContent = "Welcome to MamaSupport, your trusted partner in navigating the beautiful yet challenging journey of parenthood. My mission is to support young parents. MamaSupport offers a secure, on-demand video chat platform that connects you with someone to answer your questions, concerns, struggles, and anything else. Whether you’re dealing with sleepless nights,";
}

}


function updateLogo() {
  const logo = document.getElementById("mamaLogo");

  if (window.innerWidth >= 768) {
    logo.src = "images/mama_support_logo736x736.png"; // imagen grande
  } else {
    logo.src = "images/mama_support_logo105x106.png"; // imagen pequeña
  }
}

function updateLogo() {
    const logo = document.getElementById("mamaLogo");

    if (window.innerWidth <= 768) {
      // versión grande (pantallas tipo laptop o desktop)
      logo.src = "images/mama_support_logo736x736.png";
    } else {
      // versión pequeña (móvil)
      logo.src = "images/mama_support_logo105x106.png";
    }
  }

  
  let resizeTimeout;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    // Evita que se recargue muchas veces mientras redimensionas
    resizeTimeout = setTimeout(() => {
      location.reload(); 
    }, 200);
  });
// Llamar al cargar la página
updateText();
// Escuchar cuando el usuario cambia el tamaño de la ventana
window.addEventListener("resize", updateText);

window.addEventListener("resize", updateLogo);

window.addEventListener("resize", up);
