// Variables de Estado Global
let auctionPlayers = []; // Lista de jugadores participantes
let initialBudget = 0;
let playerType = '';
let totalPositionsToFill = 0;
let currentPositionIndex = 0;
let currentPlayerIndex = 0;
let playersToBuy = 0;
let skippedCount = 0;
let isAuctionStarted = false;

// Estado del Juego
// Este array ahora contiene OBJETOS {name, price, description}
let currentPositionData = []; 


// --- PASO 1: CONFIGURACIÓN INICIAL ---

window.startAuctionSetup = function() {
    const numPlayersInput = document.getElementById('num-players');
    const budgetInput = document.getElementById('initial-budget');
    const typeSelect = document.getElementById('player-type');
    const errorMessage = document.getElementById('setup-error-message');
    
    const numPlayers = parseInt(numPlayersInput.value);
    initialBudget = parseInt(budgetInput.value) * 1000000; // Guardado en Millones
    playerType = typeSelect.value;

    if (isNaN(numPlayers) || numPlayers < 2 || numPlayers > 10) {
        errorMessage.textContent = "El número de jugadores debe ser entre 2 y 10.";
        return;
    }
    if (isNaN(initialBudget) || initialBudget < 100000000 || initialBudget > 1000000000) {
        errorMessage.textContent = "El presupuesto debe ser entre 100 y 1000 millones.";
        return;
    }

    // Inicializar jugadores y presupuesto
    auctionPlayers = [];
    for (let i = 1; i <= numPlayers; i++) {
        auctionPlayers.push({
            id: i,
            name: `Concursante ${i}`,
            budget: initialBudget,
            team: {} // Posiciones compradas
        });
    }

    // Definir la cantidad de jugadores a comprar por posición
    playersToBuy = numPlayers + 1; // N + 1
    totalPositionsToFill = AUCTION_POSITIONS.length * numPlayers; // Total de huecos en plantillas

    isAuctionStarted = true;
    currentPositionIndex = 0;
    currentPlayerIndex = 0;
    skippedCount = 0;

    // Pasar a la interfaz
    document.getElementById('auction-setup').style.display = 'none';
    document.getElementById('auction-interface').style.display = 'block';
    
    setupNextPosition();
}

// --- PASO 2: GESTIÓN DE RONDAS Y POSICIONES ---

function setupNextPosition() {
    if (currentPositionIndex >= AUCTION_POSITIONS.length) {
        // La subasta ha terminado
        document.getElementById('auction-message').textContent = "¡Subasta Terminada! Muestra los resultados.";
        document.getElementById('auction-player-card').style.display = 'none';
        document.getElementById('auction-controls-buttons').style.display = 'none';
        document.getElementById('final-results-button').style.display = 'block'; 
        return;
    }
    
    const currentPos = AUCTION_POSITIONS[currentPositionIndex];
    
    // Obtenemos los objetos completos de jugadores
    currentPositionData = getRandomPlayers(currentPos.code, playersToBuy);
    currentPlayerIndex = 0;
    skippedCount = 0;
    
    renderPlayerBoard();
    
    document.getElementById('auction-controls-buttons').style.display = 'flex'; 
    document.getElementById('final-results-button').style.display = 'none'; 
    document.getElementById('auction-player-card').style.display = 'block';

    updateRoundInfo();
    loadNextPlayer();
}

// Obtiene OBJETOS de jugadores al azar de la base de datos
function getRandomPlayers(posCode, count) {
    const list = auctionData[playerType][posCode];
    if (!list) return [];
    
    // Mezcla el array de objetos de jugadores
    let shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function loadNextPlayer() {
    // Verificar si ya no quedan jugadores en esta posición (ni en el array de jugadores disponibles)
    if (currentPlayerIndex >= currentPositionData.length) {
        currentPositionIndex++;
        setupNextPosition();
        return;
    }
    
    const currentPos = AUCTION_POSITIONS[currentPositionIndex];
    
    // Accedemos a las propiedades del objeto del jugador
    const player = currentPositionData[currentPlayerIndex]; 
    
    document.getElementById('current-player-position').textContent = `${currentPos.code} (${currentPos.name})`;
    document.getElementById('current-player-type').textContent = playerType;
    document.getElementById('current-player-name').textContent = player.name; 
    
    // Usamos el precio estimado (price) de la database como precio de inicio
    document.getElementById('player-price-input').value = player.price; 
    document.getElementById('player-price-input').min = player.price; // El mínimo es ahora su valor estimado

    document.getElementById('auction-message').textContent = '';
    
    updateRoundInfo();
    updateSkipButton();
}

// --- PASO 3: LÓGICA DE INTERFAZ Y COMPRA ---

function renderPlayerBoard() {
    const board = document.getElementById('player-board');
    board.innerHTML = '';
    const buyerSelect = document.getElementById('buyer-select');
    buyerSelect.innerHTML = '<option value="">-- Elige Comprador --</option>';

    auctionPlayers.forEach(player => {
        // Formato para mostrar presupuesto en Millones
        const budgetDisplay = (player.budget / 1000000).toLocaleString('es-ES');
        
        const card = document.createElement('div');
        card.className = 'player-auction-card';
        const fichados = Object.keys(player.team).length; 
        
        card.innerHTML = `
            <h4>
                <input type="text" value="${player.name}" onchange="updatePlayerName(${player.id}, this.value)">
            </h4>
            <div class="budget">
                Presupuesto: <span id="budget-${player.id}">${budgetDisplay} M</span>
            </div>
            <p style="font-size: 0.9em; margin-top: 5px;">
                Fichados: ${fichados} / ${AUCTION_POSITIONS.length}
            </p>
        `;
        board.appendChild(card);
        
        // Agregar opción al select de comprador
        const option = document.createElement('option');
        option.value = player.id;
        option.textContent = player.name;
        buyerSelect.appendChild(option);
    });
}

// Función para actualizar el nombre (usada en onchange del input)
window.updatePlayerName = function(playerId, newName) {
    const player = auctionPlayers.find(p => p.id === playerId);
    if (player) {
        player.name = newName;
        renderPlayerBoard(); 
    }
}

// Actualiza el texto de la ronda
function updateRoundInfo() {
    const pos = AUCTION_POSITIONS[currentPositionIndex];
    document.getElementById('round-info').textContent = 
        `RONDA: ${pos.name} (${pos.code}) - Jugador ${currentPlayerIndex + 1} de ${currentPositionData.length}`;
}

// Lógica para el botón de Saltar
window.skipPlayer = function() {
    const message = document.getElementById('auction-message');
    
    if (skippedCount >= 1) {
        message.textContent = "Ya se saltó un jugador en esta posición. ¡Deben comprar el actual!";
        return;
    }
    
    skippedCount++;
    message.textContent = `Jugador saltado.`;
    
    // Al saltar, movemos el índice para ver el siguiente jugador
    currentPlayerIndex++;
    loadNextPlayer();
}

// Actualiza el texto del botón de Saltar
function updateSkipButton() {
    const skipButton = document.getElementById('skip-button');
    const posCode = AUCTION_POSITIONS[currentPositionIndex].code;
    const playersNeedPos = auctionPlayers.filter(p => !p.team[posCode]).length; // Jugadores que aún necesitan esta posición

    if (playersNeedPos > 0 && skippedCount === 0) {
        skipButton.disabled = false;
        skipButton.innerHTML = `&#x2715; Pasar (1 Restante)`;
        skipButton.style.backgroundColor = '#cc4444';
    } else {
        skipButton.disabled = true;
        skipButton.innerHTML = `❌ Pasar (0 Restante)`;
        skipButton.style.backgroundColor = '#555555';
    }
}


// --- PASO 4: COMPLETAR LA TRANSFERENCIA ---

window.completeTransfer = function() {
    const buyerId = parseInt(document.getElementById('buyer-select').value);
    const playerObject = currentPositionData[currentPlayerIndex]; 
    const minPrice = playerObject.price * 1000000;
    
    const transferPrice = parseInt(document.getElementById('player-price-input').value) * 1000000;
    const message = document.getElementById('auction-message');
    
    if (!buyerId) {
        message.textContent = "Por favor, selecciona un comprador.";
        return;
    }
    
    const buyer = auctionPlayers.find(p => p.id === buyerId);
    const currentPos = AUCTION_POSITIONS[currentPositionIndex];
    const playerName = playerObject.name;

    if (transferPrice < minPrice) { 
        message.textContent = `El precio debe ser al menos ${minPrice / 1000000} millones (Precio estimado del jugador).`;
        return;
    }

    if (buyer.budget < transferPrice) {
        message.textContent = `${buyer.name} no tiene suficiente presupuesto (${(buyer.budget / 1000000).toLocaleString('es-ES')}M).`;
        return;
    }

    if (buyer.team[currentPos.code]) {
        message.textContent = `${buyer.name} ya tiene un jugador en la posición ${currentPos.code}.`;
        return;
    }
    
    // Proceso de Compra
    buyer.budget -= transferPrice;
    buyer.team[currentPos.code] = {
        name: playerName,
        price: transferPrice
    };

    message.textContent = `¡Fichaje completado! ${buyer.name} compró a ${playerName} por ${transferPrice / 1000000}M.`;
    
    // Eliminar el jugador (objeto) de la lista de jugadores disponibles
    currentPositionData.splice(currentPlayerIndex, 1);
    
    // --- LÓGICA DE AVANCE AUTOMÁTICO (CORRECCIÓN) ---
    const posCode = currentPos.code;
    const playersStillNeedPos = auctionPlayers.filter(p => !p.team[posCode]).length; 

    if (playersStillNeedPos === 0) {
        // Si nadie más necesita esta posición, avanzamos a la siguiente.
        message.textContent += " — Todos han fichado esta posición. ¡Avanzando!";
        currentPositionIndex++;
        setupNextPosition();
    } else {
        // Si aún quedan jugadores sin fichar esta posición, cargamos el siguiente jugador de la lista
        // (ya que el actual fue eliminado del array 'currentPositionData')
        loadNextPlayer();
    }
}

// --- PASO 5: RESULTADOS ---

window.showFinalResults = function() {
    const resultsContent = document.getElementById('final-results-content');
    resultsContent.innerHTML = '';
    
    // Mostrar resumen de plantillas (lógica mantenida)
    AUCTION_POSITIONS.forEach(pos => {
        const table = document.createElement('table');
        table.className = 'results-table';
        table.innerHTML = `
            <thead>
                <tr><th colspan="3">${pos.name} (${pos.code})</th></tr>
                <tr><th>Concursante</th><th>Jugador</th><th>Precio (M)</th></tr>
            </thead>
            <tbody></tbody>
        `;
        
        const tbody = table.querySelector('tbody');
        auctionPlayers.forEach(player => {
            const playerPos = player.team[pos.code];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${playerPos ? playerPos.name : '---'}</td>
                <td>${playerPos ? (playerPos.price / 1000000).toLocaleString('es-ES') : '---'}</td>
            `;
            tbody.appendChild(row);
        });
        resultsContent.appendChild(table);
        resultsContent.appendChild(document.createElement('br'));
    });
    
    // Muestra el resumen de presupuestos restantes
    const budgetSummary = document.createElement('div');
    budgetSummary.innerHTML = '<h4>Presupuestos Restantes:</h4>';
    auctionPlayers.forEach(player => {
        const budgetDisplay = (player.budget / 1000000).toLocaleString('es-ES');
        budgetSummary.innerHTML += `<p><strong>${player.name}:</strong> ${budgetDisplay} Millones</p>`;
    });
    resultsContent.prepend(budgetSummary);

    document.getElementById('results-modal').classList.add('visible');
}

window.closeResultsModal = function() {
    document.getElementById('results-modal').classList.remove('visible');
}