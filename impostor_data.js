const gameData = {
    // La lista de clubes (Array) Cierra con ']' y está seguida por una COMA
    'Club': [
        // --- Sudamérica: Argentina y Uruguay (Río de la Plata) ---
        "River Plate", "Boca Juniors", "Racing Club", "Independiente", "San Lorenzo", 
        "Juventud", "Huracán", "Estudiantes de La Plata", "Vélez Sarsfield", 
        "Rosario Central", "Newell's Old Boys", "Lanús", "Argentinos Juniors", 
        "Peñarol", "Nacional de Montevideo", "Defensor Sporting", "Cerro Porteño", 
        "Olimpia", "Libertad",
        
        // --- Sudamérica: Brasil ---
        "Flamengo", "Palmeiras", "Corinthians", "São Paulo FC", "Santos FC", 
        "Atlético Mineiro", "Grêmio", "Internacional", "Fluminense", "Cruzeiro",
        "Botafogo", "Athletico Paranaense", "Vasco da Gama", 
        
        // --- Sudamérica: Andes y Varios ---
        "Universidad Católica (Chile)", "Colo-Colo", "Universidad de Chile", 
        "Atlético Nacional (Colombia)", "Millonarios FC", "América de Cali",
        "Liga de Quito", "Barcelona SC (Ecuador)", "Emelec", "Alianza Lima", 
        "Sporting Cristal", "Universitario", "Club Bolívar", "The Strongest", 
        "Estudiantes de Mérida", 
        
        // --- Europa: España (LaLiga) ---
        "Barcelona", "Real Madrid", "Atlético de Madrid", "Sevilla FC", 
        "Valencia CF", "Athletic Club", "Real Sociedad", "Villarreal CF", 
        "Real Betis",
        
        // --- Europa: Inglaterra (Premier League) ---
        "Manchester United", "Liverpool FC", "Arsenal FC", "Chelsea FC", 
        "Manchester City", "Tottenham Hotspur", "Everton FC", "Newcastle United",
        "Aston Villa", "West Ham United",
        
        // --- Europa: Alemania (Bundesliga) ---
        "Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", 
        "RB Leipzig", "Borussia Mönchengladbach", "Schalke 04", "Hamburger SV",
        "Werder Bremen",
        
        // --- Europa: Italia (Serie A) ---
        "Juventus FC", "AC Milan", "Inter de Milán", "AS Roma", "SSC Napoli", 
        "Lazio", "Fiorentina", "Torino FC",
        
        // --- Europa: Francia (Ligue 1) ---
        "PSG", "Olympique de Lyon", "Olympique de Marsella", "AS Monaco", 
        "Lille OSC", "Girondins de Bordeaux",
        
        // --- Europa: Otros Ligas (Íconos) ---
        "Ajax (Países Bajos)", "PSV Eindhoven", "Feyenoord", "FC Porto (Portugal)", 
        "SL Benfica", "Sporting CP", "Celtic FC (Escocia)", "Rangers FC", 
        "Galatasaray (Turquía)", "Fenerbahçe", "Beşiktaş", "Shakhtar Donetsk",
        "FC Dynamo Kyiv", "Zenit San Petersburgo", "Olympiacos FC",
        
        // --- Norte y Centroamérica (CONCACAF) ---
        "Club América (México)", "Chivas de Guadalajara", "Cruz Azul", 
        "Tigres UANL", "CF Monterrey", "Pumas UNAM", "Deportivo Saprissa", 
        "Alajuelense", "LA Galaxy (USA)", "New York Red Bulls", "Inter Miami CF",
        "Toronto FC", "Seattle Sounders FC", 
        
        // --- Asia y África (Íconos Continentales) ---
        "Al Ahly SC (Egipto)", "Zamalek SC", "Esperance de Tunis", 
        "Al-Hilal Saudi FC", "Al-Nassr FC", "Urawa Red Diamonds", "Pohang Steelers", 
        "Esteghlal FC (Irán)",
        
        // --- Final de la Lista ---
        "Guangzhou FC", "Shanghai SIPG", "Kashima Antlers", "Auckland City FC"
    ], // <-- ¡AQUÍ FALTABA LA COMA!
    
    // La lista de jugadores (Array) Cierra con ']' y está seguida por una COMA
    'Jugador': [
        // --- Estrellas Globales y Goleadores (Actuales) ---
        "Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappé", "Erling Haaland", "Neymar Jr", 
        "Robert Lewandowski", "Karim Benzema", "Mohamed Salah", "Kevin De Bruyne", 
        "Harry Kane", "Vinicius Jr", "Antoine Griezmann", "Bernardo Silva", 
        "Joshua Kimmich", "Virgil van Dijk", "Thibaut Courtois", "Alisson Becker", 
        "Manuel Neuer", "Bruno Fernandes", "Casemiro", "Luka Modrić", "Toni Kroos",
        "Heung-min Son", "Victor Osimhen", "Rafael Leão", "Jamal Musiala",
        
        // --- Talentos Jóvenes y Promesas ---
        "Jude Bellingham", "Phil Foden", "Pedri", "Gavi", "Florian Wirtz", 
        "Bukayo Saka", "Rodrygo", "Eduardo Camavinga", "Warren Zaïre-Emery",
        "Alejandro Garnacho", "Youssoufa Moukoko", "Khvicha Kvaratskhelia", 
        "Endrick", "Gabriel Martinelli", "Diogo Costa", "Frenkie de Jong",
        
        // --- Jugadores de Sudamérica y la Liga Argentina/Uruguaya (Más allá de los iniciales) ---
        "Julián Álvarez", "Enzo Fernández", "Alexis Mac Allister", "Rodrigo De Paul",
        "Lautaro Martínez", "Ángel Di María", "Emiliano Martínez", "Paulo Dybala",
        "Luis Suárez", "Edinson Cavani", "Federico Valverde", "Ronald Araújo", 
        "Darío Benedetto", "Marcos Rojo", "Sebastián Villa", "Nicolás De La Cruz", 
        "Miguel Borja", "Franco Armani", "Sergio Romero", "Ignacio Fernández",
        "Ezequiel Barco", "Lucas Beltrán", "Facundo Colidio", "Valentín Barco",
        "Alan Varela", "José López", "Giorgian De Arrascaeta", "Germán Cano",
        
        // --- Europa: Premier League (Más) ---
        "Marcus Rashford", "Jack Grealish", "Martin Ødegaard", "Declan Rice", 
        "Gabriel Jesus", "Alexander Isak", "Riyad Mahrez", "Ruben Dias", 
        "Trent Alexander-Arnold", "Andy Robertson", "Van Dijk", "Cody Gakpo",
        
        // --- Europa: LaLiga (Más) ---
        "Ousmane Dembélé", "Félix", "İlkay Gündoğan", "Raphinha", "Marc-André ter Stegen",
        "Jan Oblak", "Iñaki Williams", "Nico Williams", "Takefusa Kubo", 
        "Antoine Griezmann", "Jules Koundé", "David Alaba",
        
        // --- Europa: Bundesliga (Más) ---
        "Leroy Sané", "Serge Gnabry", "Alphonso Davies", "Marco Reus", "Niklas Süle", 
        "Jude Bellingham", "Christopher Nkunku", "André Silva", "Patrik Schick",
        
        // --- Europa: Serie A (Más) ---
        "Lautaro Martínez", "Rafael Leão", "Victor Osimhen", "Khvicha Kvaratskhelia", 
        "Ciro Immobile", "Federico Chiesa", "Dusan Vlahovic", "Mike Maignan", 
        "Theo Hernández", "Nicolò Barella",
        
        // --- Otros Jugadores Notables (Ligas Varias/Asia) ---
        "Rúben Neves", "Kalidou Koulibaly", "Édouard Mendy", "Sergej Milinković-Savić", 
        "Roberto Firmino", "N'Golo Kanté", "Aymeric Laporte", "Jordan Henderson", 
        "Sadio Mané", "Róger Guedes", "Talisca",
        
        // --- Añadiendo Leyendas (para la categoría 'Jugador' si son muy recientes o aún juegan) ---
        "Sergio Ramos", "Gerard Piqué", "Giorgio Chiellini", "Zlatan Ibrahimović",
        
        // --- Más Jugadores para completar la lista ---
        "Julian Brandt", "Mikel Oyarzabal", "Alexander Sørloth", "Yeremy Pino", 
        "Dani Olmo", "Folarin Balogun", "Moisés Caicedo", "Alexis Sánchez",
        "James Rodríguez", "Hirving Lozano", "Weston McKennie", "Timothy Weah",
        "Christian Pulisic", "Takumi Minamino", "Wataru Endo", "Kaoru Mitoma",
        
        // --- Final de la lista ---
        "Lucas Paquetá", "Pedro Gonçales", "Gonçalo Ramos", "Evan Ferguson"
    ], // <-- ¡AQUÍ FALTABA LA COMA!
    
    // La lista de leyendas (Array) Cierra con ']'
    'Leyenda': [
        // --- Sudamérica: Argentina y Brasil ---
        "Diego Maradona", "Pelé", "Alfredo Di Stéfano", "Gabriel Batistuta", "Ricardo Bochini",
        "Ronaldinho", "Garrincha", "Zico", "Ronaldo Nazário", "Romário",
        "Sócrates", "Mario Kempes", "Norberto Alonso", "Angel Labruna",
        "Ricardo Pavoni", "Daniel Passarella", "Silvio Marzolini", "Néstor Gorosito",
        "Ricardo Giusti", "Claudio Caniggia",
        
        // --- Europa: Holanda y Alemania ---
        "Johan Cruyff", "Franz Beckenbauer", "Gerd Müller", "Marco Van Basten",
        "Ruud Gullit", "Frank Rijkaard", "Lothar Matthäus", "Karl-Heinz Rummenigge",
        "Uwe Seeler", "Paul Breitner", "Rinus Michels (DT/Leyenda)", "Sepp Maier",
        
        // --- Europa: Italia y Francia ---
        "Zinedine Zidane", "Paolo Maldini", "Franco Baresi", "Roberto Baggio",
        "Alessandro Del Piero", "Michel Platini", "Thierry Henry", "Gigi Riva",
        "Gianni Rivera", "Dino Zoff", "Fabio Cannavaro", "Andrea Pirlo",
        
        // --- Europa: Portugal, Inglaterra y España ---
        "Eusébio", "George Best", "Bobby Charlton", "Kenny Dalglish",
        "Stanley Matthews", "Duncan Edwards", "Ryan Giggs", "Eric Cantona",
        "Gheorghe Hagi", "Hugo Sánchez", "Francisco Gento", "Raúl González",
        
        // --- Leyendas de Épocas Doradas y Ganadores del Balón de Oro ---
        "Lev Yashin", "Ferenc Puskás", "Jozsef Bozsik", "Sándor Kocsis",
        "Hristo Stoichkov", "Rivellino", "Didí", "Gordon Banks", "Denis Law",
        "Raymond Kopa", "Omar Sívori", "Josef Masopust",
        
        // --- Iberoamérica: Uruguay, Chile, etc. ---
        "Enzo Francescoli", "Obdulio Varela", "Alcides Ghiggia", "Elías Figueroa",
        "Carlos Valderrama", "José Luis Chilavert", "Iván Zamorano", "Marcelo Salas",
        
        // --- Íconos de Clubes y Ligas Varias ---
        "Roger Milla", "Didier Drogba", "Samuel Eto'o", "Abedi Pelé",
        "Héctor Chumpitaz", "Teófilo Cubillas", "Javier Zanetti", "Tostão",
        
        // --- Leyendas muy recientes (ya retirados e icónicos) ---
        "Xavi Hernández", "Andrés Iniesta", "Philipp Lahm", "Arjen Robben",
        "Francesco Totti", "Steven Gerrard", "Frank Lampard", "Wayne Rooney",
        "Iker Casillas", "Gianluigi Buffon", "Andrea Pirlo", "David Villa"
    ]
};