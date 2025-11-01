let currentDifficulty = null;
let players = []; 
let isGameStarted = false;

// --- PASO 1: CONFIGURACIÓN ---

window.selectDifficulty = function(difficulty) {
    currentDifficulty = difficulty;
    document.getElementById('selected-difficulty').textContent = difficulty;
}

window.startGameSetup = function() {
    const numPlayersInput = document.getElementById('num-players');
    const numPlayers = parseInt(numPlayersInput.value);
    const errorMessage = document.getElementById('setup-error-message');

    if (!currentDifficulty) {
        errorMessage.textContent = "Por favor, selecciona una dificultad.";
        return;
    }
    if (isNaN(numPlayers) || numPlayers < 2 || numPlayers > 10) {
        errorMessage.textContent = "El número de jugadores debe ser entre 2 y 10.";
        return;
    }

    // Inicializar jugadores
    players = [];
    for (let i = 1; i <= numPlayers; i++) {
        players.push({
            id: i,
            name: `Jugador ${i}`,
            score: 0
        });
    }

    isGameStarted = true;
    document.getElementById('game-setup').style.display = 'none';
    document.getElementById('game-interface').style.display = 'block';

    renderPlayerCards();
    loadNewPhrase();
}


// --- PASO 2: RENDERIZADO DEL MARCADOR (LÁPIZ) ---

function renderPlayerCards() {
    const listContainer = document.getElementById('player-score-list');
    listContainer.innerHTML = ''; 
    
    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <h4>
                <input 
                    type="text" 
                    id="name-${player.id}" 
                    value="${player.name}" 
                    readonly
                    onchange="updatePlayerName(${player.id}, this.value)"
                />
                <span 
                    class="edit-icon" 
                    id="edit-icon-${player.id}"
                    onclick="toggleEdit(${player.id})"
                >&#x270E;</span>
            </h4>
            <div class="score" id="score-${player.id}">${player.score}</div>
            <div class="action-buttons">
                <button onclick="addPoint(${player.id})">Sumar Punto</button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// Guarda el nombre del jugador en el array 'players'
window.updatePlayerName = function(playerId, newName) {
    const player = players.find(p => p.id === playerId);
    if (player) {
        player.name = newName;
    }
}

// Alterna entre modo edición y modo lectura
window.toggleEdit = function(playerId) {
    const nameInput = document.getElementById(`name-${playerId}`);
    const editIcon = document.getElementById(`edit-icon-${playerId}`);
    
    if (nameInput.readOnly) {
        // Entrar en modo edición
        nameInput.readOnly = false;
        editIcon.innerHTML = '&#x2713;'; // Cambiar a checkmark
        editIcon.style.color = 'lightgreen';
        nameInput.focus();
    } else {
        // Salir del modo edición y guardar (el guardado ya se hizo con onchange)
        nameInput.readOnly = true;
        editIcon.innerHTML = '&#x270E;'; // Volver al lápiz
        editIcon.style.color = 'var(--primary-color)';
    }
}

window.addPoint = function(playerId) {
    const player = players.find(p => p.id === playerId);
    if (player) {
        player.score += 1;
        document.getElementById(`score-${playerId}`).textContent = player.score;
        // Animación (mantenida)
        const card = document.querySelector(`#score-${playerId}`).closest('.player-card');
        card.style.transform = 'scale(1.1)';
        card.style.backgroundColor = '#301f1f'; 
        setTimeout(() => {
            card.style.transform = 'scale(1)';
            card.style.backgroundColor = 'var(--bg-card)';
        }, 300);
    }
}


// --- PASO 3: LÓGICA DE FRASES ---

window.loadNewPhrase = function() {
    if (!currentDifficulty) {
        document.getElementById('phrase-display').textContent = "¡Error! Selecciona la dificultad primero.";
        return;
    }
    
    const phraseList = mentirosoPhrases[currentDifficulty];
    if (!phraseList || phraseList.length === 0) {
        document.getElementById('phrase-display').textContent = "¡Error! No hay frases para esta dificultad.";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * phraseList.length);
    const newPhrase = phraseList[randomIndex];
    
    document.getElementById('phrase-display').textContent = `Tema: "${newPhrase}"`;
}


// --- PASO 4: RESULTADOS Y RESET (ARREGLO DE LA LÓGICA Y EL MODAL) ---

window.showResults = function() {
    // 1. Clonar el array y ordenar por score (descendente: MÁS puntos GANA)
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    // El que tiene MÁS puntos GANA.
    const winnerMessage = document.createElement('p');
    winnerMessage.innerHTML = `<h3 style="color: var(--primary-color); text-align: center;">¡El ganador es ${sortedPlayers[0].name} con ${sortedPlayers[0].score} puntos!</h3>`;
    resultsList.appendChild(winnerMessage); 

    // 2. Mostrar Top 3
    for (let i = 0; i < Math.min(3, sortedPlayers.length); i++) {
        const player = sortedPlayers[i];
        const listItem = document.createElement('li');
        
        let medal = '';
        if (i === 0) medal = '🥇';
        else if (i === 1) medal = '🥈';
        else if (i === 2) medal = '🥉';
        
        listItem.innerHTML = `
            <p style="color: ${i === 0 ? 'gold' : i === 1 ? 'silver' : '#cd7f32'}; margin: 10px 0; font-size: 1.2em;">
                ${medal} <strong>${player.name}</strong>: ${player.score} Puntos
            </p>
        `;
        resultsList.appendChild(listItem);
    }
    
    // ARREGLO PRINCIPAL: Añadir la clase 'visible' para mostrar el modal
    document.getElementById('results-modal').classList.add('visible');
}

window.closeResultsModal = function() {
    // ARREGLO PRINCIPAL: Remover la clase 'visible' para ocultar el modal
    document.getElementById('results-modal').classList.remove('visible');
}

window.resetFullGame = function() {
    if (confirm("¿Estás seguro de que quieres reiniciar el juego por completo? Se perderá el marcador y la configuración.")) {
        // Limpiar todo
        currentDifficulty = null;
        players = [];
        isGameStarted = false;
        
        // Volver a la configuración
        document.getElementById('game-interface').style.display = 'none';
        document.getElementById('game-setup').style.display = 'block';
        document.getElementById('selected-difficulty').textContent = '---';
        document.getElementById('num-players').value = 4;
        document.getElementById('phrase-display').textContent = "-- Haz clic en \"Siguiente Frase\" para comenzar --";
        document.getElementById('player-score-list').innerHTML = '';
        document.getElementById('setup-error-message').textContent = '';
    }
}