let selectedCategory = null;
let word = "";
let players = [];
let currentPlayerIndex = 0;
let numPlayers = 0;
let numImpostors = 0;

// PASO 1: SELECCIÓN DE CATEGORÍA
window.selectCategory = function(category) {
    selectedCategory = category;
    document.getElementById('selected-cat').textContent = category;
    document.getElementById('setup-inputs').style.display = 'block';
    document.getElementById('error-message').textContent = '';
}

// PASO 2: INICIO DE ASIGNACIÓN DE ROLES
window.startAssignment = function() {
    numPlayers = parseInt(document.getElementById('num-players').value);
    numImpostors = parseInt(document.getElementById('num-impostors').value);
    const errorMessage = document.getElementById('error-message');
    
    if (!selectedCategory) {
        errorMessage.textContent = "Por favor, selecciona una categoría.";
        return;
    }

    if (isNaN(numPlayers) || numPlayers < 4 || numPlayers > 20) {
        errorMessage.textContent = "El número de jugadores debe ser entre 4 y 20.";
        return;
    }
    
    if (isNaN(numImpostors) || numImpostors < 1 || numImpostors >= numPlayers) {
        errorMessage.textContent = "Debe haber al menos 1 impostor, y menos impostores que jugadores.";
        return;
    }

    // 1. Elegir palabra/club/jugador
    const categoryList = gameData[selectedCategory];
    if (categoryList.length === 0) {
        errorMessage.textContent = `La categoría ${selectedCategory} no tiene palabras cargadas.`;
        return;
    }
    word = categoryList[Math.floor(Math.random() * categoryList.length)];

    // 2. Asignar roles (creando y mezclando el array de roles)
    players = Array(numPlayers).fill('Inocente');
    for (let i = 0; i < numImpostors; i++) {
        players[i] = 'Impostor';
    }
    
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }

    // 3. Ocultar configuración y mostrar asignación
    document.getElementById('game-setup').style.display = 'none';
    document.getElementById('role-assignment').style.display = 'block';
    
    // Oculta los botones finales al inicio de la asignación
    document.getElementById('final-actions').style.display = 'none'; 
    
    // 4. Iniciar el flujo de cartas
    currentPlayerIndex = 0;
    document.getElementById('total-players').textContent = numPlayers;
    updatePlayerDisplay();
}

// Lógica para mostrar la carta del jugador actual
function updatePlayerDisplay() {
    document.getElementById('current-player').textContent = currentPlayerIndex + 1;
    document.getElementById('role-card').classList.remove('flipped');
    document.getElementById('next-player-btn').style.display = 'none';
    document.getElementById('start-game-message').style.display = 'none';
}

// Lógica al tocar la carta (Flip Card)
window.flipCard = function() {
    const card = document.getElementById('role-card');
    if (card.classList.contains('flipped')) {
        return; 
    }

    const role = players[currentPlayerIndex];
    const cardRole = document.getElementById('card-role');
    const cardDetail = document.getElementById('card-detail');
    const cardBack = card.querySelector('.card-back');

    if (role === 'Inocente') {
        cardRole.textContent = "INOCENTE";
        cardDetail.textContent = `${selectedCategory}: ${word}`;
        cardBack.style.backgroundColor = '#d4edda'; 
        cardDetail.style.color = '#155724'; 
    } else {
        cardRole.textContent = "IMPOSTOR";
        cardDetail.textContent = `Palabra a adivinar: ${selectedCategory}`;
        cardBack.style.backgroundColor = '#f8d7da'; 
        cardDetail.style.color = '#721c24'; 
    }

    card.classList.add('flipped');
    
    // Muestra el botón o mensaje después de un breve retraso
    setTimeout(() => {
        if (currentPlayerIndex < numPlayers - 1) {
            document.getElementById('next-player-btn').style.display = 'block';
        } else {
            // El último jugador ha visto su rol
            document.getElementById('start-game-message').textContent = '¡Todos conocen su rol! ¡A jugar!';
            document.getElementById('start-game-message').style.display = 'block';
            
            // Muestra los botones de acción final
            document.getElementById('final-actions').style.display = 'flex'; 
            document.getElementById('final-actions').style.justifyContent = 'space-around'; 
        }
    }, 800);
}

// Pasar al siguiente jugador
window.nextPlayer = function() {
    currentPlayerIndex++;
    if (currentPlayerIndex < numPlayers) {
        updatePlayerDisplay();
    } 
}

// NUEVA FUNCIÓN: Reinicia el juego volviendo a la pantalla de configuración
window.resetGame = function() {
    document.getElementById('role-assignment').style.display = 'none';
    document.getElementById('final-actions').style.display = 'none';
    document.getElementById('setup-inputs').style.display = 'none'; // Oculta los inputs hasta que se elija una categoría de nuevo
    document.getElementById('game-setup').style.display = 'block';
    
    // Reinicia las variables
    selectedCategory = null;
    word = "";
    players = [];
    currentPlayerIndex = 0;
    
    document.getElementById('selected-cat').textContent = '';
    
    // Opcional: Deseleccionar visualmente los botones de categoría si deseas
    // (Esto requeriría un pequeño CSS/JS adicional para gestión de clases en los botones de categoría)
}