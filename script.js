// --- Lógica del Modal de Bienvenida (Ya existente) ---
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            showWelcomeModal();
        }, 500); 
    }
}

function showWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    if (modal) {
        modal.classList.add('visible');
    }
}

window.closeModal = function() {
    const modal = document.getElementById('welcome-modal');
    if (modal) {
        modal.classList.remove('visible');
    }
}

// --- Lógica para el Modal de Información del Juego ---
window.showGameInfo = function(gameName) {
    const modal = document.getElementById('game-info-modal');
    const title = document.getElementById('info-modal-title');
    const content = document.getElementById('info-modal-content');
    const startButton = document.getElementById('start-game-btn');
    
    // Función para llenar el modal
    const fillModal = (t, html, target, displayButton = true) => {
        title.textContent = t;
        content.innerHTML = html;
        startButton.textContent = `¡Comenzar ${t.split(':')[0]}!`;
        startButton.style.display = displayButton ? 'block' : 'none';
        startButton.onclick = () => window.location.href = target;
    };
    
    if (gameName === 'Impostor') {
        fillModal("Impostor: Reglas del Juego", `
            <h4>¿De qué trata?</h4>
            <p>Elige una categoría. Cada participante toca la carta para revelar su rol (Inocente o Impostor).</p>
            <h4>Reglas Rápidas:</h4>
            <ul>
                <li>**Inocentes:** Ganan al eliminar a todos los impostores.</li>
                <li>**Impostores:** Ganan si igualan o superan en número a los inocentes restantes.</li>
            </ul>
        `, 'impostor.html');
    } 
    else if (gameName === 'Mentiroso') {
        fillModal("Mentiroso: Reglas del Juego", `
            <h4>¿De qué trata?</h4>
            <p>Elige una dificultad y el juego les dará una frase o tema. Los jugadores dicen cuántos ítems pueden nombrar. Si alguien reta con "¡Mentiroso!" y falla, el jugador gana un punto. Si acierta, el retador gana un punto.</p>
            <p>El jugador con más puntos al final, gana.</p>
        `, 'mentiroso.html');
    } 
    // Contenido específico para SUBASTA (¡NUEVO!)
    else if (gameName === 'Subasta') {
        fillModal("Subasta de Fichajes: Reglas", `
            <h4>Objetivo:</h4>
            <p>Construir la mejor plantilla posible (11 jugadores) usando el presupuesto inicial asignado.</p>
            
            <h4>Mecánica:</h4>
            <ul>
                <li>Cada jugador comienza con el mismo presupuesto (máx. 1000 millones).</li>
                <li>Se puja por jugadores en posiciones fijas (GK, CB, MC, etc.).</li>
                <li>Por cada posición, habrá **N+1 jugadores** (donde N es el número de participantes).</li>
                <li>Solo se permite **saltar 1 jugador por posición** si nadie puja. Una vez saltado, los demás deben ser comprados.</li>
                <li>El precio base de cada jugador es de **50 millones**.</li>
                <li>La aplicación llevará el control de presupuestos y rondas.</li>
            </ul>
        `, 'subasta.html');
    } 
    else {
        fillModal(`${gameName}: ¡Pronto!`, `<p>Las reglas y la lógica de ${gameName} se están cocinando. ¡Vuelve pronto!</p>`, '#', false);
    }

    modal.classList.add('visible');
}

window.closeGameInfoModal = function() {
    const modal = document.getElementById('game-info-modal');
    if (modal) {
        modal.classList.remove('visible');
    }
}

// Lógica de inicio: Ocultar el preloader después de un tiempo
window.onload = function() {
    setTimeout(hidePreloader, 3000); 
}

// Opcional: Cerrar los modales al hacer clic fuera de él
window.onclick = function(event) {
    const welcomeModal = document.getElementById('welcome-modal');
    const infoModal = document.getElementById('game-info-modal');
    
    if (event.target == welcomeModal) {
        closeModal();
    }
    if (event.target == infoModal) {
        closeGameInfoModal();
    }
}