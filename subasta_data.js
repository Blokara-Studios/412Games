// Base de datos de Jugadores para la Subasta
// Contiene la información de los jugadores: Nombre, Precio Base Estimado (en millones) y Descripción.
const auctionData = {
    // ----------------------------------------------------
    // JUGADORES ACTUALES (Para la opción "Actuales")
    // ----------------------------------------------------
    'Actuales': {
        // Arqueros
        'GK': [
            { name: "Ederson", price: 65, description: "El arquero perfecto para el 'juego de pies' de Guardiola. Campeón de la Champions y referente del City." },
            { name: "Alisson Becker", price: 70, description: "La seguridad bajo palos del Liverpool. Destaca por su imponente físico y reflejos felinos." },
            { name: "Marc-André ter Stegen", price: 60, description: "Veterano seguro en el Barça. Es conocido por su gran capacidad de pase y distribución." },
            { name: "Thibaut Courtois", price: 75, description: "El muro del Real Madrid. Determinante en la Champions 2022 con paradas legendarias." },
            { name: "Jan Oblak", price: 55, description: "Histórico del Atlético de Madrid. Un 'stopper' de reflejos y colocación élite." },
            { name: "Gianluigi Donnarumma", price: 60, description: "Joven gigante italiano. Su gran envergadura lo hace un seguro en el juego aéreo. Campeón de la Euro 2020." },
            { name: "Mike Maignan", price: 65, description: "El guardián del Milan. Famoso por su liderazgo, agresividad en las salidas y gran reflejo." },
            { name: "Emiliano Martínez", price: 55, description: "El 'Dibu'. Carismático y campeón del mundo con Argentina. Un especialista en penales." },
            { name: "André Onana", price: 50, description: "Arquero camerunés de buen manejo de balón. Recientemente en el Manchester United." },
            { name: "Manuel Neuer", price: 50, description: "Leyenda del fútbol moderno. Inventor del rol de 'Sweeper-Keeper' o arquero líbero." },
            { name: "Diogo Costa", price: 55, description: "Joven promesa de Portugal y el Porto. Destaca por su agilidad y valentía." },
            { name: "Yassine Bounou", price: 50, description: "El héroe de Marruecos en el Mundial 2022. Fichado por el Al-Hilal tras su etapa en Sevilla." },
            { name: "Gregor Kobel", price: 50, description: "Sólido arquero del Borussia Dortmund y Suiza. Uno de los más altos y fiables de la Bundesliga." },
            { name: "Aaron Ramsdale", price: 50, description: "El energizante portero del Arsenal. Su estilo es moderno, combinando paradas con buen pase." },
            { name: "Nick Pope", price: 50, description: "El especialista del Newcastle y las paradas increíbles. Destaca por su gran alcance." }
        ],
        // Laterales Derecho
        'RB': [
            { name: "Achraf Hakimi", price: 75, description: "Extremo disfrazado de lateral. Su velocidad y capacidad ofensiva con el PSG son un peligro constante." },
            { name: "Trent Alexander-Arnold", price: 80, description: "El mejor pasador de la posición. Un 'playmaker' que organiza el ataque del Liverpool desde el lateral." },
            { name: "Kyle Walker", price: 55, description: "El más rápido de la élite. Su punta de velocidad es crucial para la defensa alta del Manchester City." },
            { name: "Reece James", price: 65, description: "Un portento físico del Chelsea. Combina potencia, buen centro y solidez defensiva." },
            { name: "João Cancelo", price: 60, description: "Lateral versátil. Puede jugar en ambos costados y como interior, clave para el juego de posesión." },
            { name: "Benjamin Pavard", price: 50, description: "Campeón del mundo con Francia. Se ha consolidado como una opción mixta entre lateral y central derecho." },
            { name: "Dani Carvajal", price: 50, description: "Veterano del Real Madrid. Lucha y garra incansable, un ganador nato con gran experiencia en Champions." },
            { name: "Kieran Trippier", price: 50, description: "El metrónomo del Newcastle. Sus centros y el golpeo de balón a balón parado son de clase mundial." },
            { name: "Jeremie Frimpong", price: 60, description: "Joven neerlandés del Leverkusen. Un 'carrilero' puro de gran proyección ofensiva y desequilibrio." },
            { name: "Pedro Porro", price: 50, description: "Lateral ofensivo del Tottenham. Gran despliegue físico y constante subida por la banda." },
            { name: "Nahuel Molina", price: 50, description: "Campeón del mundo con Argentina. Potencia y recorrido en el Atlético de Madrid, subiendo y bajando la banda sin parar." },
            { name: "Gonzalo Montiel", price: 50, description: "El hombre de los penales decisivos (Copa América y Mundial). Su garra y entrega son indiscutibles." },
            { name: "Denzel Dumfries", price: 50, description: "Carrilero neerlandés del Inter. Su gran físico y capacidad de remate lo hacen peligroso en el área." }
        ],
        // Defensas Centrales
        'CB_R': [
            { name: "Rúben Dias", price: 85, description: "El líder de la zaga del Manchester City. Imponente en el corte, gran visión de juego y dominante en el área." },
            { name: "Marquinhos", price: 65, description: "Capitán del PSG y Brasil. Rápido y con buena salida de balón, esencial para el juego defensivo y ofensivo." },
            { name: "Matthijs de Ligt", price: 60, description: "Potente central neerlandés del Bayern. Fuerte en el duelo y buen juego aéreo, aunque propenso a subir de la línea." },
            { name: "Ronald Araújo", price: 75, description: "El futuro del Barça y Uruguay. Su velocidad y físico lo hacen un defensor de élite, capaz de frenar a los mejores extremos." },
            { name: "Éder Militão", price: 70, description: "El central más rápido del Real Madrid. Su capacidad de anticipación y recuperación en velocidad son vitales." },
            { name: "Virgil van Dijk", price: 70, description: "El ancla del Liverpool. Liderazgo, juego aéreo imbatible y gran pase largo. Considerado por muchos como el mejor central de su generación." },
            { name: "William Saliba", price: 60, description: "Joven central francés del Arsenal. Elegante, rápido y con gran potencial. Es clave en la salida de balón 'Gunner'." },
            { name: "Jules Koundé", price: 60, description: "Versátil central/lateral del Barcelona y Francia. Destaca por su velocidad y habilidad para salir con el balón controlado." },
            { name: "Cristian Romero", price: 55, description: "El 'Cuti'. Campeón del mundo y guerrero del Tottenham. Agresividad e intensidad en cada disputa." },
            { name: "Kim Min-jae", price: 55, description: "El 'Monstruo' coreano. Reciente campeón en Nápoles y fichaje del Bayern. Destaca por su físico y contundencia." },
            { name: "Dayot Upamecano", price: 50, description: "Central francés de gran potencia física. Rápido y potente, aunque a veces con problemas de concentración." },
            { name: "Fikayo Tomori", price: 50, description: "Rápido y atlético central del Milan. Su velocidad es crucial para defender campo abierto." },
            { name: "Antonio Rüdiger", price: 50, description: "El 'Gladiador' del Real Madrid. Defensor con un estilo muy físico, rápido y con gran determinación." }
        ],
        'CB_L': [
            { name: "Josko Gvardiol", price: 80, description: "La joya croata del Manchester City. Zurdo, rápido, potente y con una increíble proyección ofensiva." },
            { name: "Alessandro Bastoni", price: 60, description: "Central izquierdo del Inter. Elegante en la salida de balón y muy bueno en el pase largo." },
            { name: "Raphaël Varane", price: 55, description: "Múltiple campeón. Su velocidad y colocación le permiten cubrir grandes espacios. Experiencia élite." },
            { name: "Aymeric Laporte", price: 50, description: "Central español zurdo. Gran calidad técnica para la salida de balón, ahora en el Al-Nassr." },
            { name: "Milan Škriniar", price: 50, description: "Central eslovaco. Contundente en el marcaje y con gran liderazgo en la línea defensiva." },
            { name: "David Alaba", price: 55, description: "Central zurdo y comodín del Real Madrid. Su experiencia y golpeo a balón parado lo hacen un defensor total." },
            { name: "Gabriel Magalhães", price: 50, description: "Central brasileño del Arsenal. Físico imponente y amenaza constante en los corners rivales." },
            { name: "Lisandro Martínez", price: 50, description: "El 'Carnicero'. Campeón del mundo. Pequeño pero feroz, con una mentalidad ganadora y excelente pase." },
            { name: "Pau Torres", price: 50, description: "Central español con gran salida de balón. Fichado por el Aston Villa, es un zurdo de gran calidad técnica." },
            { name: "Lucas Hernández", price: 50, description: "Central o lateral izquierdo francés. Destaca por su intensidad defensiva y garra en el marcaje." },
            { name: "Presnel Kimpembe", price: 50, description: "Producto de la cantera del PSG. Central zurdo de gran potencia y experiencia internacional." },
            { name: "Nico Schlotterbeck", price: 50, description: "Joven central alemán del Dortmund. Rápido y agresivo, con una buena capacidad para el pase en corto." },
            { name: "Kalidou Koulibaly", price: 50, description: "Físico portentoso. Una roca en el centro de la defensa. Ahora en el Al-Hilal." }
        ],
        // Laterales Izquierdos
        'LB': [
            { name: "Alphonso Davies", price: 80, description: "El 'roadrunner' de la posición. Velocidad supersónica y un motor incansable en el Bayern de Múnich." },
            { name: "Theo Hernández", price: 75, description: "El lateral más ofensivo de Italia. Su potencia y regate son clave en el ataque del Milan." },
            { name: "Andrew Robertson", price: 60, description: "El motor del Liverpool. Constante subida, garra y centros precisos a la carrera." },
            { name: "Luke Shaw", price: 55, description: "Sólido lateral inglés del Manchester United. Confiable en defensa y de buena proyección ofensiva." },
            { name: "Nuno Mendes", price: 55, description: "Joven promesa portuguesa del PSG. Destaca por su velocidad y habilidad para desbordar." },
            { name: "Alejandro Balde", price: 50, description: "La revelación del Barcelona. Joven, rápido y con una gran proyección ofensiva por la banda izquierda." },
            { name: "Federico Dimarco", price: 50, description: "El 'carrilero' zurdo del Inter. Famoso por su gran golpeo de balón y su capacidad para centrar y tirar a puerta." },
            { name: "Ferland Mendy", price: 50, description: "Puro físico en el Real Madrid. Un lateral de estilo defensivo, casi un central en la banda." },
            { name: "Ben Chilwell", price: 50, description: "Lateral inglés del Chelsea. Gran despliegue físico y buen centro, aunque con tendencia a las lesiones." },
            { name: "José Gayà", price: 50, description: "El capitán del Valencia. Un lateral de garra y corazón, con gran experiencia en La Liga." },
            { name: "Destiny Udogie", price: 50, description: "Joven lateral del Tottenham. Potencia física y velocidad, encaja perfecto en esquemas de carrileros." },
            { name: "Marcos Acuña", price: 50, description: "El 'Huevo'. Campeón del mundo. Lateral incansable, conocido por su carácter fuerte y grandes centros." },
            { name: "Pervis Estupiñán", price: 50, description: "El motor ecuatoriano del Brighton. Despliegue físico, centros y un gran recorrido ofensivo." }
        ],
        // Mediocampistas (Derecho/Box-to-Box/Mixto)
        'MC_R': [
            { name: "Kevin De Bruyne", price: 95, description: "El mejor pasador del mundo. Visionario, líder del City y una máquina de asistencias de gol." },
            { name: "Luka Modrić", price: 55, description: "El 'Maestro' croata. Balón de Oro 2018. Su longevidad y visión lo mantienen en la élite." },
            { name: "Federico Valverde", price: 85, description: "El 'Pajarito' del Real Madrid. Box-to-Box incansable con un golpeo de balón espectacular." },
            { name: "Nicolò Barella", price: 70, description: "Corazón y alma del Inter. Box-to-Box incansable, con una intensidad y regate de élite." },
            { name: "Jamal Musiala", price: 80, description: "La joya alemana del Bayern. Regate eléctrico y visión de juego, con un futuro prometedor." },
            { name: "Pedri", price: 75, description: "La brújula del Barcelona. Estilo 'Made in La Masía', toque, visión y una madurez impropia de su edad." },
            { name: "Bruno Fernandes", price: 70, description: "El motor del Manchester United. Goles, asistencias y un carácter de líder en la mediapunta." },
            { name: "Martin Ødegaard", price: 65, description: "El capitán del Arsenal. Elegancia, visión y un toque de zurda que abre cualquier defensa." },
            { name: "Alexis Mac Allister", price: 60, description: "Campeón del mundo. Mediocentro completo que puede jugar de pivote u ofensivo. Ahora en el Liverpool." },
            { name: "Declan Rice", price: 60, description: "El nuevo pilar del Arsenal. Mediocentro defensivo que también tiene capacidad para conducir y llegar al área." },
            { name: "Jude Bellingham", price: 90, description: "El 'Golden Boy' del Real Madrid. Un centrocampista total con gol, regate y un liderazgo impresionante." },
            { name: "Gavi", price: 65, description: "Pura garra y corazón en el Barcelona. Un mediocampista de gran intensidad y toque." },
            { name: "Enzo Fernández", price: 60, description: "La revelación del Mundial 2022. Mediocentro organizador del Chelsea, con visión y gran pase largo." }
        ],
        // Mediocampistas (Pivote/Central Defensivo)
        'MC_C': [
            { name: "Rodri", price: 90, description: "El mejor pivote defensivo del mundo. El ancla del City, con un pase preciso y lectura del juego total. Héroe de la Champions 2023." },
            { name: "Casemiro", price: 60, description: "El destructor de la élite. Ganador de 5 Champions, su labor defensiva y liderazgo son invaluables." },
            { name: "Joshua Kimmich", price: 75, description: "El líder del Bayern. Puede jugar de lateral o pivote. Un jugador con temperamento y visión de élite." },
            { name: "Frenkie de Jong", price: 70, description: "El mediocentro neerlandés del Barça. Elegancia y conducción, con una gran capacidad para romper líneas." },
            { name: "Aurélien Tchouaméni", price: 65, description: "El futuro pivote del Real Madrid. Físico imponente y capacidad de recuperación, clave en la medular." },
            { name: "Toni Kroos", price: 50, description: "El 'Francotirador' del Madrid. Maestro del pase en corto y largo, maneja los tiempos del partido con precisión." },
            { name: "Sergio Busquets", price: 50, description: "Leyenda. El mejor pivote de la última década. Posicionamiento élite y visión de juego. Ahora en el Inter Miami." },
            { name: "Sandro Tonali", price: 55, description: "Joven pivote italiano. Estilo parecido a Pirlo, pero con más recorrido. Recientemente en el Newcastle." },
            { name: "Manuel Ugarte", price: 50, description: "Pivote uruguayo del PSG. Un perro de presa en el medio, con una gran capacidad para el robo de balón." },
            { name: "Sofyan Amrabat", price: 50, description: "El 'pulmón' de Marruecos en el Mundial. Físico y garra incansables, mediocentro puramente defensivo." },
            { name: "Marcelo Brozović", price: 50, description: "Pivote croata. Su resistencia física es legendaria, capaz de correr todo el campo sin parar." },
            { name: "João Palhinha", price: 50, description: "El muro portugués del Fulham. Uno de los mejores recuperadores de balones en la Premier League." },
            { name: "Thomas Partey", price: 50, description: "Físico y potencia en el Arsenal. Un pivote que combina defensa y buena conducción." }
        ],
        // Mediocampistas (Izquierdo/Ofensivo)
        'MC_L': [
            { name: "Bernardo Silva", price: 80, description: "El más inteligente del City. Versatilidad, regate en corto y una visión de juego sublime." },
            { name: "İlkay Gündoğan", price: 55, description: "El todocampista alemán. Goles decisivos y gran lectura del juego, ahora líder en el Barcelona." },
            { name: "Mason Mount", price: 50, description: "El mediapunta inglés del Manchester United. Presión alta y capacidad de llegada al área." },
            { name: "Florian Wirtz", price: 65, description: "La gran promesa alemana del Leverkusen. Un talento puro con gran regate y capacidad para el pase final." },
            { name: "Sergej Milinković-Savić", price: 50, description: "El gigante serbio. Mediocampista físico y técnico, con gran juego aéreo. Ahora en el Al-Hilal." },
            { name: "Adrien Rabiot", price: 50, description: "Mediocentro francés. Gran físico, zancada potente y capacidad para llegar al área rival." },
            { name: "Fabián Ruiz", price: 50, description: "Mediocentro español zurdo del PSG. Elegancia en la conducción y buen pase en corto." },
            { name: "Ryan Gravenberch", price: 50, description: "Joven mediocentro neerlandés del Liverpool. Potencia física y gran zancada." },
            { name: "Khephren Thuram", price: 50, description: "Potente mediocentro francés del Niza. Gran físico y proyección." },
            { name: "Matteo Guendouzi", price: 50, description: "Mediocampista francés de gran carácter y despliegue físico." },
            { name: "Emile Smith Rowe", price: 50, description: "Joven mediapunta del Arsenal. Habilidad con la pelota y gran visión de pase." },
            { name: "Harvey Elliott", price: 50, description: "La joya de la cantera del Liverpool. Un mediapunta de gran talento y visión." },
            { name: "Piotr Zieliński", price: 50, description: "Mediocentro polaco del Nápoles. Uno de los más técnicos y con gran golpeo de balón." }
        ],
        // Extremos Izquierdos
        'LW': [
            { name: "Kylian Mbappé", price: 100, description: "El jugador más rápido y letal del planeta. Campeón del mundo y la gran estrella del fútbol actual." },
            { name: "Vinícius Júnior", price: 95, description: "El extremo más desequilibrante. Explosividad, regate y ganador de la Champions con el Real Madrid." },
            { name: "Rafael Leão", price: 85, description: "El talento portugués del Milan. Velocidad, potencia y regate, con gran capacidad de finalización." },
            { name: "Khvicha Kvaratskhelia", price: 80, description: "La revelación georgiana del Nápoles. Regate increíble y desborde imparable, clave en el Scudetto." },
            { name: "Jack Grealish", price: 65, description: "El descaro del City. Regate en corto y visión de juego, con gran capacidad para generar superioridad." },
            { name: "Marcus Rashford", price: 60, description: "La velocidad y potencia del Manchester United. Goleador y extremo letal en el espacio." },
            { name: "Leandro Trossard", price: 50, description: "El belga del Arsenal. Versátil y con buen pie, puede jugar en varias posiciones de ataque." },
            { name: "Son Heung-min", price: 55, description: "El capitán de Corea del Sur y Tottenham. Velocidad, ambidiestro y gran capacidad de definición." },
            { name: "Mikel Oyarzabal", price: 50, description: "El capitán de la Real Sociedad. Zurdo, con gol y un gran sentido táctico en el ataque." },
            { name: "Gabriel Martinelli", price: 50, description: "Joven brasileño del Arsenal. Velocidad, desborde y un gran futuro por delante." },
            { name: "Jeremy Doku", price: 50, description: "El regateador puro. Extremo belga del City, con una capacidad de desborde y 1vs1 espectacular." },
            { name: "Luis Díaz", price: 50, description: "El colombiano del Liverpool. Regateador veloz y con una garra incansable." },
            { name: "Phil Foden", price: 70, description: "La joya de la cantera del City. Zurdo, versátil y con un talento descomunal." }
        ],
        // Extremos Derechos
        'RW': [
            { name: "Lionel Messi", price: 90, description: "El mejor de la historia. Campeón del mundo. Genio del regate, la visión y el gol. Leyenda viviente." },
            { name: "Mohamed Salah", price: 85, description: "El 'Faraón' del Liverpool. Velocidad, potencia y un regate con la zurda letal en el área." },
            { name: "Bukayo Saka", price: 80, description: "La estrella del Arsenal. Zurdo, con desborde y gol. El futuro del fútbol inglés." },
            { name: "Rodrygo", price: 70, description: "El 'Rayo' del Real Madrid. Goles decisivos en Champions y una gran capacidad de regate en corto." },
            { name: "Riyad Mahrez", price: 55, description: "El genio zurdo. Regate de seda y un golpeo de balón espectacular. Ahora en el Al-Ahli." },
            { name: "Kingsley Coman", price: 55, description: "El talismán del Bayern. Rápido, desequilibrante y ganador de ligas en cada club donde ha jugado." },
            { name: "Ousmane Dembélé", price: 50, description: "El extremo más veloz de Francia. Regate endiablado y ambidiestro, aunque propenso a las lesiones." },
            { name: "Antony", price: 50, description: "Extremo brasileño del Manchester United. Zurdo, regateador y con un gran 'latigazo' a puerta." },
            { name: "Raphinha", price: 50, description: "Extremo brasileño del Barcelona. Regate, velocidad y un gran centro al área." },
            { name: "Leroy Sané", price: 50, description: "Velocidad pura y potencia en el Bayern. Gran capacidad para el desborde en el 1 contra 1." },
            { name: "Dejan Kulusevski", price: 50, description: "Extremo sueco del Tottenham. Potencia física, velocidad y buen golpeo de balón." },
            { name: "Ángel Di María", price: 50, description: "El 'Fideo'. Campeón de todo. Zurdo elegante, con gran visión de juego y velocidad. Un experto en finales." },
            { name: "Ferran Torres", price: 50, description: "Extremo español del Barcelona. Mucha movilidad en el ataque y capacidad de definición." }
        ],
        // Delanteros Centrales
        'ST': [
            { name: "Erling Haaland", price: 100, description: "El 'Killer' noruego. Máquina de hacer goles. Bota de Oro y clave en el triplete del Manchester City." },
            { name: "Robert Lewandowski", price: 70, description: "El depredador polaco. Goles garantizados, un '9' clásico con gran instinto y remate." },
            { name: "Karim Benzema", price: 65, description: "Balón de Oro 2022. '9' total que genera juego y asiste. Leyenda del Real Madrid, ahora en Al-Ittihad." },
            { name: "Victor Osimhen", price: 85, description: "El delantero nigeriano del Nápoles. Fuerza, velocidad y un gran salto. Clave en el Scudetto." },
            { name: "Harry Kane", price: 80, description: "El '9' más completo del mundo. Goleador y 'playmaker', con visión para el pase y un gran remate." },
            { name: "Lautaro Martínez", price: 65, description: "El 'Toro'. Campeón del mundo. Delantero físico, con gran capacidad de desmarque y sacrificio en el Inter." },
            { name: "Julian Álvarez", price: 75, description: "La 'Araña'. Campeón del mundo y Champions. Polifuncional, rápido y con gran olfato goleador. El futuro del ataque argentino." },
            { name: "Romelu Lukaku", price: 55, description: "Potencia pura. Delantero belga que destaca por su fuerza y capacidad para aguantar el balón de espaldas." },
            { name: "Dušan Vlahović", price: 50, description: "El joven '9' serbio de la Juventus. Potencia física y un gran golpeo de zurda." },
            { name: "Ciro Immobile", price: 50, description: "El goleador de la Lazio. Un '9' puro de área, con gran instinto para el gol y movimiento sin balón." },
            { name: "Gabriel Jesus", price: 50, description: "Delantero brasileño del Arsenal. Mucha movilidad, presión alta y capacidad para jugar fuera del área." },
            { name: "Darwin Núñez", price: 50, description: "El 'Búfalo' uruguayo del Liverpool. Explosividad, velocidad y un físico imponente." },
            { name: "Alexandre Lacazette", price: 50, description: "El veterano goleador del Lyon. Un '9' de gran movilidad y buen remate." }
        ]
    },
    // ----------------------------------------------------
    // LEYENDAS (Para la opción "Leyendas")
    // ----------------------------------------------------
    'Leyendas': {
        // Arqueros
        'GK': [
            { name: "Lev Yashin", price: 90, description: "La 'Araña Negra'. Único arquero en ganar el Balón de Oro (1963). Revolucionó la posición." },
            { name: "Dino Zoff", price: 75, description: "Campeón del Mundo con Italia en 1982 a los 40 años. Símbolo de longevidad y seguridad." },
            { name: "Gianluigi Buffon", price: 80, description: "Uno de los mejores de la historia. Campeón del Mundo 2006. Ícono de la Juventus." },
            { name: "Iker Casillas", price: 75, description: "El 'Santo'. Leyenda del Real Madrid y España. Héroe en las finales de Champions y el Mundial 2010." },
            { name: "Peter Schmeichel", price: 70, description: "El danés del Manchester United. Dominante en el área, famoso por su 'salto de estrella'." },
            { name: "Oliver Kahn", price: 70, description: "El 'Titán'. Portero agresivo y con una mentalidad ganadora feroz. Balón de Oro del Mundial 2002." },
            { name: "Sepp Maier", price: 65, description: "Leyenda del Bayern y Alemania. Parte del equipo campeón de la Copa del Mundo 1974." },
            { name: "Gordon Banks", price: 65, description: "Famoso por 'la Parada del Siglo' a Pelé en el Mundial de 1970." },
            { name: "Rinat Dasayev", price: 60, description: "El mejor arquero soviético. Gran agilidad y reflejos." },
            { name: "Edwin van der Sar", price: 60, description: "Elegancia y manejo del balón. El arquero neerlandés fue clave en Ajax, Juventus y Manchester United." },
            { name: "Hugo Gatti", price: 55, description: "El 'Loco'. Arquero innovador que jugaba fuera del área, ídolo de Boca Juniors." },
            { name: "Ubaldo Fillol", price: 55, description: "El 'Pato'. Campeón del Mundo 1978. Uno de los arqueros más completos de Argentina." }
        ],
        // Laterales Derecho
        'RB': [
            { name: "Cafu", price: 85, description: "El 'Pendolino'. Capitán del Brasil campeón del mundo 2002. El lateral derecho más ofensivo de la historia." },
            { name: "Javier Zanetti", price: 80, description: "El 'Pupi'. Polifuncional y eterno capitán del Inter. Símbolo de longevidad y profesionalismo." },
            { name: "Lilian Thuram", price: 75, description: "El 'Comandante'. Campeón del Mundo 1998. Potencia física y solidez defensiva como lateral o central." },
            { name: "Carlos Alberto", price: 75, description: "Capitán del Brasil de 1970. Autor de uno de los mejores goles de la historia en la final del Mundial." },
            { name: "Djalma Santos", price: 70, description: "Lateral brasileño histórico. Tres veces campeón del mundo (solo jugó en 2). Elegante en defensa." },
            { name: "Garrincha", price: 70, description: "El 'Ángel de las Piernas Torcidas'. Extremo puro y bicampeón mundial. Regate inigualable." },
            { name: "Philipp Lahm", price: 75, description: "El 'Mágico Enano'. Inteligencia táctica pura. Podía jugar en ambos laterales y de pivote." },
            { name: "Dani Alves", price: 65, description: "El lateral más laureado de la historia. Ofensivo, rápido y gran pasador." },
            { name: "Berti Vogts", price: 60, description: "El 'Terrier'. Lateral alemán de gran dureza en la marca, campeón de la Euro y el Mundial." },
            { name: "Giuseppe Bergomi", price: 60, description: "Leyenda del Inter y campeón del mundo con Italia en 1982." },
            { name: "Giacinto Facchetti", price: 60, description: "Lateral italiano pionero, muy ofensivo para su época. Leyenda del Inter." },
            { name: "Mauro Tassotti", price: 55, description: "Parte de la legendaria defensa del Milan de Sacchi y Capello." }
        ],
        // Defensas Centrales
        'CB_R': [
            { name: "Franz Beckenbauer", price: 100, description: "El 'Kaiser'. Inventor del líbero ofensivo. Balón de Oro y campeón del mundo y Europa." },
            { name: "Paolo Maldini", price: 95, description: "Elegancia pura. Podía jugar de central o lateral izquierdo. Líder y leyenda del Milan." },
            { name: "Bobby Moore", price: 85, description: "Capitán del único equipo inglés campeón del mundo (1966). Símbolo de 'Fair Play'." },
            { name: "Franco Baresi", price: 90, description: "El 'Kaiser' italiano. Líbero del Milan de Sacchi. Famoso por su liderazgo y anticipación." },
            { name: "Elías Figueroa", price: 80, description: "El mejor chileno de la historia. Elegancia, liderazgo y una carrera exitosa en Brasil (Cruzeiro) y Uruguay (Peñarol)." },
            { name: "Daniel Passarella", price: 75, description: "El 'Káiser' argentino. Goleador y capitán del campeón del mundo 1978. Famoso por su fuerte temperamento." },
            { name: "Ronald Koeman", price: 70, description: "El central goleador. Su potente golpeo de tiro libre dio la primera Champions al Barcelona." },
            { name: "Gaetano Scirea", price: 70, description: "Elegancia y limpieza en la zaga. Campeón del mundo 1982. Leyenda de la Juventus." },
            { name: "Néstor Sensini", price: 60, description: "Central argentino polifuncional. Gran físico y experiencia en la Serie A." },
            { name: "Frank Rijkaard", price: 75, description: "Versátil. Podía jugar de líbero o pivote. Pieza clave en el 'Dream Team' de Cruyff y el Milan." },
            { name: "Aldair", price: 60, description: "Central brasileño de gran físico y técnica. Campeón del Mundo 1994." },
            { name: "Luís Pereira", price: 55, description: "Central brasileño. Fuerza y elegancia en la marca." }
        ],
        'CB_L': [
            { name: "Matthias Sammer", price: 75, description: "Balón de Oro 1996. Central o líbero alemán. Gran liderazgo y determinación." },
            { name: "Fabio Cannavaro", price: 80, description: "Balón de Oro 2006. Central bajo pero dominante. Capitán del campeón del mundo Italia." },
            { name: "Carles Puyol", price: 70, description: "El 'Tiburón'. Pura garra y corazón en la defensa. Leyenda del Barcelona y campeón del mundo." },
            { name: "Alessandro Nesta", price: 70, description: "El central más elegante de su época. Técnica y anticipación puras. Campeón del Mundo 2006." },
            { name: "Alan Hansen", price: 65, description: "Central escocés, clave en el dominio del Liverpool en los años 80." },
            { name: "Fernando Hierro", price: 60, description: "Líder del Real Madrid. Goleador, podía jugar de central o pivote. Famoso por su golpeo y liderazgo." },
            { name: "Billy Wright", price: 55, description: "El primer futbolista en jugar 100 partidos con la Selección Inglesa. Líder del Wolverhampton." },
            { name: "Marcel Desailly", price: 60, description: "El 'Roca'. Central o mediocentro defensivo francés. Campeón del Mundo 1998." },
            { name: "Sergio Ramos", price: 65, description: "Central con más goles de la historia. Liderazgo, gol en momentos clave y fuerte personalidad." },
            { name: "Walter Samuel", price: 55, description: "El 'Muro'. Central argentino. Fuerte en el marcaje y contundente en el corte." },
            { name: "Ricardo Carvalho", price: 55, description: "Central portugués. Inteligencia táctica y colocación." },
            { name: "Claudio Gentile", price: 50, description: "Lateral/Central italiano de gran dureza defensiva. Campeón del Mundo 1982." }
        ],
        // Laterales Izquierdos
        'LB': [
            { name: "Roberto Carlos", price: 85, description: "Potencia pura. El lateral más ofensivo del Real Madrid, famoso por su tiro libre 'imposible'." },
            { name: "Nilton Santos", price: 80, description: "El pionero de los laterales ofensivos. Bicampeón del mundo con Brasil." },
            { name: "Paolo Maldini (LB)", price: 90, description: "Su posición natural antes de ser central. Elegancia y solidez en la banda." },
            { name: "Andreas Brehme", price: 75, description: "Lateral alemán ambidiestro. Héroe del Mundial 1990 anotando el penal decisivo con la derecha." },
            { name: "Junior", price: 70, description: "Lateral brasileño del 'jogo bonito' de los 80. Gran técnica y visión de juego." },
            { name: "Bixente Lizarazu", price: 65, description: "Lateral izquierdo francés. Potente, rápido y campeón del mundo 1998." },
            { name: "Antonio Cabrini", price: 60, description: "El 'Bell'Antonio'. Lateral izquierdo italiano con gran proyección ofensiva. Campeón del Mundo 1982." },
            { name: "Silvio Marzolini", price: 55, description: "Lateral argentino de Boca. Considerado uno de los mejores de su época en América." },
            { name: "Ashley Cole", price: 55, description: "El mejor lateral izquierdo inglés de su generación. Velocidad y solidez defensiva." },
            { name: "Marcelo", price: 50, description: "Heredero de Roberto Carlos. El lateral más ofensivo y con más regate del Real Madrid." },
            { name: "Paul Breitner", price: 50, description: "Podía jugar de lateral o mediocentro. Fuerte personalidad y gran golpeo. Campeón del Mundo 1974." },
            { name: "Júnior", price: 50, description: "Lateral brasileño. Gran técnica y visión de juego." }
        ],
        // Mediocampistas (Derecho/Box-to-Box/Mixto)
        'MC_R': [
            { name: "Alfredo Di Stéfano", price: 95, description: "La 'Saeta Rubia'. Dominaba toda la cancha. Leyenda absoluta del Real Madrid." },
            { name: "Johan Cruyff", price: 95, description: "El 'Flaco'. Creador del 'Fútbol Total'. Tres veces Balón de Oro. Ícono del Ajax y Barcelona." },
            { name: "Zinedine Zidane", price: 95, description: "El 'Mago'. Elegancia y control de balón. Campeón del Mundo 1998 y Balón de Oro." },
            { name: "Lothar Matthäus", price: 90, description: "Balón de Oro 1990. Box-to-Box con gol, potencia y liderazgo. Récord de Mundiales jugados." },
            { name: "Michel Platini", price: 85, description: "El genio francés. Tres veces Balón de Oro consecutivo. Goles y visión de mediapunta." },
            { name: "Sócrates", price: 80, description: "El 'Doctor'. Símbolo de elegancia y líder de la 'Democracia Corintiana'. Un mediocentro atípico." },
            { name: "Zico", price: 80, description: "El 'Pelé Blanco'. Diez puro con un golpeo de balón y visión inigualables. Ídolo del Flamengo." },
            { name: "Ruud Gullit", price: 75, description: "El 'Tulipán Negro'. Potencia, técnica y polivalencia. Clave en el Milan de Sacchi y Balón de Oro." },
            { name: "Bryan Robson", price: 65, description: "El 'Capitán Marvel'. Leyenda del Manchester United. Box-to-Box con gran despliegue." },
            { name: "Liam Brady", price: 60, description: "Mediocampista irlandés. Elegancia y zurda exquisita. Ídolo en el Arsenal y la Serie A." },
            { name: "Clarence Seedorf", price: 60, description: "El único en ganar la Champions con tres clubes diferentes (Ajax, Real Madrid, Milan)." },
            { name: "Paul Scholes", price: 55, description: "El 'Colorado'. Visión, pase y un golpeo de larga distancia de élite. Leyenda del Manchester United." }
        ],
        // Mediocampistas (Pivote/Central Defensivo)
        'MC_C': [
            { name: "Falcao", price: 85, description: "El 'Rey de Roma'. Pivote brasileño con gran técnica y visión de juego. Clave en la Roma de los 80." },
            { name: "Didí", price: 75, description: "Inventor de la 'folha seca'. Mediocentro brasileño, bicampeón mundial. Elegancia y gran pase." },
            { name: "Andrea Pirlo", price: 80, description: "El 'Maestro'. Pivote organizador con un pase largo y golpeo a balón parado inigualables." },
            { name: "Xavi Hernández", price: 75, description: "El metrónomo del Barça y España. Leyenda del 'tiki-taka'. Visión de 360 grados." },
            { name: "Fernando Redondo", price: 70, description: "Elegancia pura en el pivote. Conducción, visión y tacón legendario en el Real Madrid." },
            { name: "Obdulio Varela", price: 70, description: "El 'Jefe' del Maracanazo. Líder y capitán de Uruguay en el Mundial 1950. Símbolo de coraje." },
            { name: "Frank Rijkaard (MC)", price: 70, description: "Pivote defensivo poderoso. Gran físico y calidad técnica, parte del 'Trío de Oro' del Milan." },
            { name: "Josep Guardiola", price: 65, description: "El pivote organizador del 'Dream Team'. Inteligencia táctica y visión." },
            { name: "Claude Makélélé", price: 60, description: "El creador del 'Rol Makélélé'. Un muro defensivo, robador de balones y clave en la contención." },
            { name: "Nobby Stiles", price: 55, description: "Mediocentro inglés campeón del mundo 1966. Garra y corazón." },
            { name: "Dunga", price: 55, description: "Capitán del Brasil campeón del mundo 1994. Mediocentro de corte defensivo y fuerte personalidad." },
            { name: "Patrick Vieira", price: 60, description: "Mediocentro francés. Físico imponente, zancada y capacidad para llegar al área. Líder de los 'Invencibles'." }
        ],
        // Mediocampistas (Izquierdo/Ofensivo)
        'MC_L': [
            { name: "Diego Maradona", price: 100, description: "El 'D10S'. El mejor regateador de la historia. Campeón del Mundo 1986. Ícono en Nápoles." },
            { name: "Gheorghe Hagi", price: 75, description: "El 'Maradona de los Cárpatos'. Zurda exquisita y mediapunta rumano de gran talento." },
            { name: "Enzo Francescoli", price: 70, description: "El 'Príncipe'. Elegancia uruguaya. Ídolo de River Plate. Zurda de gran calidad." },
            { name: "Ricardo Bochini", price: 70, description: "El 'Bocha'. Diez puro y leyenda de Independiente. Ídolo de Maradona y gran pasador." },
            { name: "George Best", price: 70, description: "El 'Quinto Beatle'. Regate electrizante y velocidad. Balón de Oro." },
            { name: "Roberto Baggio", price: 75, description: "El 'Divino Codino'. Mediapunta italiano de gran técnica y fantasía. Balón de Oro 1993." },
            { name: "Michael Laudrup", price: 65, description: "El 'Maestro Danés'. Elegancia, visión y pase filtrado élite. Parte del 'Dream Team'." },
            { name: "Denis Law", price: 60, description: "El 'Rey'. Delantero/Mediapunta escocés. Leyenda del Manchester United y Balón de Oro." },
            { name: "Juan Román Riquelme", price: 60, description: "El último '10' clásico. Visión de juego y pausa. Ídolo de Boca Juniors." },
            { name: "Andrés Iniesta", price: 65, description: "El 'Cerebro'. Toque, regate y gol decisivo en el Mundial 2010. Leyenda del Barcelona." },
            { name: "Wesley Sneijder", price: 55, description: "El líder de Países Bajos en el Mundial 2010. Mediapunta con gran golpeo y visión." },
            { name: "Deco", price: 55, description: "Mediapunta portugués. Gran visión de juego y pases precisos." }
        ],
        // Extremos Izquierdos
        'LW': [
            { name: "Cristiano Ronaldo", price: 95, description: "Uno de los mejores goleadores de la historia. El 'Bicho'. Leyenda en Manchester, Madrid y Juventus." },
            { name: "Ronaldinho", price: 90, description: "La magia y la sonrisa. Campeón del mundo y Balón de Oro. Revolucionó el fútbol con su regate y fantasía." },
            { name: "Ryan Giggs", price: 75, description: "El zurdo galés. Velocidad y centros perfectos. Leyenda del Manchester United." },
            { name: "Pavel Nedved", price: 75, description: "La 'Furia Checa'. Balón de Oro 2003. Box-to-Box con un gran golpeo y despliegue físico." },
            { name: "Gigi Riva", price: 70, description: "El 'Trueno' de Cerdeña. Delantero italiano con una zurda demoledora. Campeón de la Euro 1968." },
            { name: "Thierry Henry", price: 80, description: "El 'Rey Henry'. Extremo/delantero francés. Elegancia, velocidad y gol. Leyenda del Arsenal." },
            { name: "Dragan Džajić", price: 65, description: "Extremo yugoslavo. Considerado uno de los mejores extremos izquierdos de la historia." },
            { name: "Rob Rensenbrink", price: 60, description: "Extremo neerlandés del 'Fútbol Total'. Elegancia en el regate y gran capacidad goleadora." },
            { name: "Kevin Keegan", price: 60, description: "Dos veces Balón de Oro. Extremo inglés con gran garra y olfato de gol." },
            { name: "Rivelino", price: 60, description: "Zurda prodigiosa. Parte del Brasil campeón del mundo 1970. Famoso por su tiro libre." },
            { name: "Hristo Stoichkov", price: 55, description: "El carácter. Extremo zurdo búlgaro. Balón de Oro y pieza clave del 'Dream Team'." },
            { name: "Piet Keizer", price: 55, description: "Extremo neerlandés. Parte del Ajax tricampeón de Europa con Cruyff." }
        ],
        // Extremos Derechos
        'RW': [
            { name: "Pelé", price: 100, description: "El 'Rey'. Tres veces campeón del mundo. La figura más importante de la historia del fútbol." },
            { name: "Garrincha", price: 90, description: "El 'Ángel de las Piernas Torcidas'. Extremo puro, bicampeón mundial. Regate inigualable." },
            { name: "Stanley Matthews", price: 85, description: "El primer Balón de Oro (1956). El 'Mago del Regate'. Jugó hasta los 50 años." },
            { name: "Jairzinho", price: 80, description: "El único en anotar en todos los partidos del Mundial 1970. Potencia y velocidad." },
            { name: "Luis Figo", price: 75, description: "El extremo portugués. Balón de Oro 2000. Regate por la banda y gran capacidad de centro." },
            { name: "David Beckham", price: 70, description: "El golpeo de balón más famoso. Centros y tiros libres de precisión quirúrgica." },
            { name: "Jürgen Klinsmann", price: 65, description: "El 'Panzer'. Delantero/extremo alemán. Campeón del mundo 1990." },
            { name: "Mario Kempes", price: 60, description: "El 'Matador'. Goleador del Mundial 1978. Delantero que jugaba como extremo." },
            { name: "Zoltan Czibor", price: 55, description: "Extremo zurdo de 'Los Magiares' de Hungría. Gran velocidad y golpeo." },
            { name: "Juan Schiaffino", price: 55, description: "El genio uruguayo. Clave en el Maracanazo de 1950. Zurda de gran calidad." },
            { name: "Teófilo Cubillas", price: 50, description: "El 'Nene'. Mediapunta peruano. Gran goleador en los Mundiales." },
            { name: "Arjen Robben", price: 60, description: "El regate de la 'Gambeta de la Muerte'. Extremo zurdo imparable en el Bayern." }
        ],
        // Delanteros Centrales
        'ST': [
            { name: "Ronaldo Nazário", price: 100, description: "El 'Fenómeno'. El mejor '9' puro de la historia. Dos veces campeón del mundo y Balón de Oro." },
            { name: "Marco Van Basten", price: 90, description: "Elegancia y gol. Tres veces Balón de Oro. Famoso por su chilena en la Euro 1988." },
            { name: "Gerd Müller", price: 85, description: "El 'Bombardero'. Máquina de hacer goles. Un depredador de área inigualable." },
            { name: "Gabriel Batistuta", price: 80, description: "El 'Batigol'. Potencia, furia y uno de los mejores remates de la historia. Leyenda en la Fiorentina." },
            { name: "Romário", price: 75, description: "El 'Baixinho'. Gol puro y desequilibrio en corto. Campeón del mundo 1994." },
            { name: "Eusébio", price: 75, description: "La 'Pantera Negra'. Goleador portugués de élite. Balón de Oro 1965." },
            { name: "Hugo Sánchez", price: 70, description: "El 'Pentapichichi'. Goles de chilena y acrobacia. Leyenda del Real Madrid." },
            { name: "Sandor Kocsis", price: 65, description: "El 'Cabeza de Oro'. Goleador del 'Equipo de Oro' húngaro de los 50. Gran remate de cabeza." },
            { name: "Just Fontaine", price: 60, description: "Récord de más goles en un solo Mundial (13 en 1958)." },
            { name: "Davor Šuker", price: 55, description: "Goleador croata. Bota de Oro del Mundial 1998." },
            { name: "Alan Shearer", price: 55, description: "Máximo goleador histórico de la Premier League. Un '9' clásico y potente." },
            { name: "Uwe Seeler", price: 50, description: "Leyenda alemana. Uno de los pocos en marcar en cuatro Copas del Mundo." }
        ]
    }
};

// Orden y nombre de las posiciones
const AUCTION_POSITIONS = [
    { code: 'GK', name: 'Arquero' },
    { code: 'RB', name: 'Lateral Derecho' },
    { code: 'CB_R', name: 'Central Derecho' },
    { code: 'CB_L', name: 'Central Izquierdo' },
    { code: 'LB', name: 'Lateral Izquierdo' },
    { code: 'MC_R', name: 'Mediocentro Derecho (Box)' },
    { code: 'MC_C', name: 'Mediocentro Pivote (Pivote)' },
    { code: 'MC_L', name: 'Mediocentro Izquierdo (Ofensivo)' },
    { code: 'LW', name: 'Extremo Izquierdo' },
    { code: 'RW', name: 'Extremo Derecho' },
    { code: 'ST', name: 'Delantero Centro' }
];

// Precio base de fichaje (Millones)
const BASE_PRICE = 50;

// Exportar datos (si fuera un módulo)
// export { auctionData, AUCTION_POSITIONS, BASE_PRICE };