document.addEventListener("DOMContentLoaded", function () {
    // Habilitar las pestañas de navegación
    const tabs = document.querySelectorAll('nav ul li');
    const tabContent = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabContent.forEach(content => content.classList.remove('active'));
            tabContent[index].classList.add('active');
        });
    });
     //heae4r estatico//
     document.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        const main = document.querySelector("main");
    
        if (window.scrollY > 0) {
            // Fija el header
            header.style.position = "fixed";
            header.style.top = "0";
            header.style.left = "0";
            header.style.width = "100%";
            header.style.zIndex = "999";
            header.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Fondo semitransparente
            header.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)"; // Sombra
    
            // Ajusta el contenido del main para evitar que quede cubierto
            main.style.marginTop = `${header.offsetHeight}px`;
        } else {
            // Restaura el header a su posición original
            header.style.position = "relative";
            header.style.backgroundColor = "transparent"; // Fondo transparente
            header.style.boxShadow = "none";
    
            // Restaura el main
            main.style.marginTop = "0";
        }
    });
    

    // Agregar acción al botón de contacto
    const contactoButton = document.querySelector('.contacto');
    contactoButton.addEventListener('click', () => {
        alert("Botón de contacto clickeado!");
    });

    // Agregar acción al botón de más información
    const masInfoButton = document.querySelector('.masInformacion');
    masInfoButton.addEventListener('click', () => {
        alert("Botón de más información clickeado!");
    });

    // Agregar acción al botón de WhatsApp
    const whatsappButton = document.querySelector('.whatsapp');
    whatsappButton.addEventListener('click', () => {
        window.location.href = "https://wa.me/1234567890"; // Reemplazar con tu número
    });
});document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeIcon = document.getElementById("close-icon");

    // Abrir el menú hamburguesa
    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    // Cerrar el menú hamburguesa
    closeIcon.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("header-video");
    const videoContainer = document.getElementById("header-video-container");

    // Si el video no puede reproducirse o no se carga
    videoElement.addEventListener("error", () => {
        reemplazarConSVG();
    });

    // Si el video tarda demasiado en cargar
    videoElement.addEventListener("stalled", () => {
        reemplazarConSVG();
    });

    // Si el video no inicia automáticamente en algunos dispositivos
    videoElement.addEventListener("canplaythrough", () => {
        if (videoElement.readyState < 3) {
            reemplazarConSVG();
        }
    });

    function reemplazarConSVG() {
        // Asegúrate de que el contenedor exista
        if (!videoContainer) return;

        // Reemplazar el video con un SVG
        videoContainer.innerHTML = `
            <img src="build/img/headersvg.svg" alt="Header Background" class="svg-fondo">
        `;

        // Animación para el SVG
        const svg = document.querySelector(".svg-fondo");
        let direction = 1; // Dirección del movimiento
        let position = 0;

        function animarSVG() {
            position += 0.5 * direction; // Velocidad de movimiento
            if (position > 10 || position < -10) {
                direction *= -1; // Cambiar dirección
            }
            svg.style.transform = `translateY(${position}px)`;
            requestAnimationFrame(animarSVG);
        }

        animarSVG(); // Iniciar animación
    }

    // Forzar comprobación en caso de que el video no cargue rápido
    setTimeout(() => {
        if (!videoElement.readyState || videoElement.networkState === 3) {
            reemplazarConSVG();
        }
    }, 5000); // Tiempo límite para cargar video
});
// Espera a que todo el HTML se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {

    // Selecciona todas las galerías que tengan la clase "galeria-amado-nervo"
    document.querySelectorAll('.galeria-amado-nervo').forEach(galeria => {

        // Dentro de cada galería, selecciona todos los elementos <picture>
        const fotos = galeria.querySelectorAll('picture');

        // Comprueba si la cantidad de imágenes es impar
        if (fotos.length % 2 !== 0) {
            
            // Si es impar, agrega la clase 'ultimo' a la última imagen
            // Esto permite que la última imagen ocupe toda la fila en el grid
            fotos[fotos.length - 1].classList.add('ultimo');
        }
    });
});

//aqui da  una duplicacion de texto en las marquesinas de index
document.addEventListener("DOMContentLoaded", function() {

    // PREGUNTAS
    const pq = document.querySelector(".marquesina-texto");
    if (pq) {
        pq.setAttribute("data-text", pq.textContent.trim());
    }

    // REMATE
    const rm = document.querySelector(".marquesina-remate span");
    if (rm) {
        rm.setAttribute("data-text", rm.textContent.trim());
    }

});
//FLIPPING INMOBILIARIO ESTA ES LA SECCION
// JS para animar al hacer scroll (IntersectionObserver)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".flip-hero");
  const cards = document.querySelectorAll(".esquema-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (hero) observer.observe(hero);
  cards.forEach(card => observer.observe(card));
});
// JS para animar al hacer scroll (IntersectionObserver)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".flip-hero");
  const cards = document.querySelectorAll(".esquema-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (hero) observer.observe(hero);
  cards.forEach(card => observer.observe(card));
});
 //MAIN DE FLIPPING INMBO
 /* ------------------------------ */
/* 2️⃣ INTERCAMBIO AUTOMÁTICO     */
/* ------------------------------ */

setTimeout(() => {
  document.querySelector(".bienestar-texto").style.order = "2";
  document.querySelector(".bienestar-img").style.order = "1";
}, 1800);


/* ------------------------------ */
/* 3️⃣ PASOS 1 → 5 secuenciales   */
/* ------------------------------ */
/* ---------------------------------------------- */
/* ---------------------------------------------- */
/* PASOS MANUALES CON ← → SIN CAMBIO AUTOMÁTICO   */
//* ---------------------------------------------- */
/* PASOS 1 → 5                                    */
/* ---------------------------------------------- */

const pasos = [
  { num: "1", titulo: "Buscamos propiedades", txt: "Buscamos propiedades en remate bancario adjudicadas." },
  { num: "2", titulo: "Analizamos el valor real", txt: "Analizamos su valor real y margen de recuperación." },
  { num: "3", titulo: "Invertimos con capital seguro", txt: "Invertimos con capital seguro y documentación legal." },
  { num: "4", titulo: "Optimizamos la propiedad", txt: "Optimizamos la propiedad (flipping o reventa)." },
  { num: "5", titulo: "Recuperas tu capital", txt: "Recuperas tu capital + utilidad generada." }
];

let index = 0;
let autoInterval;

/* Renderizar cada paso */
function mostrarPaso() {
  const cont = document.getElementById("paso");

  cont.innerHTML = `
    <div class="numero">${pasos[index].num}</div>
    <div class="titulo">${pasos[index].titulo}</div>
    <div class="texto">${pasos[index].txt}</div>
  `;
}

/* Auto avance */
function iniciarAuto() {
  autoInterval = setInterval(() => {
    index = (index + 1) % pasos.length;
    mostrarPaso();
  }, 2000);
}

/* Reiniciar el autoavance cuando el usuario toca flechas */
function reiniciarAuto() {
  clearInterval(autoInterval);
  iniciarAuto();
}

/* Flecha derecha */
document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % pasos.length;
  mostrarPaso();
  reiniciarAuto();
});

/* Flecha izquierda */
document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + pasos.length) % pasos.length;
  mostrarPaso();
  reiniciarAuto();
});

/* Mostrar el primer paso y arrancar autoavance */
mostrarPaso();
iniciarAuto();
