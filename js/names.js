/**
 * NombreGen - Comprehensive Name Database
 * Hundreds of names per category for rich generation
 */

const NAMES_DB = {
    // ============================================
    // PERROS - Dog Names
    // ============================================
    perros: {
        male: [
            // Clásicos
            'Max', 'Rocky', 'Thor', 'Zeus', 'Bruno', 'Toby', 'Rex', 'Buddy', 'Lucky', 'Coco',
            'Leo', 'Simba', 'Duke', 'Jack', 'Charlie', 'Oscar', 'Lucas', 'Nico', 'Teddy', 'Milo',
            'Bingo', 'Rambo', 'Tyson', 'Spike', 'Rufus', 'Gus', 'Archie', 'Benji', 'Chester', 'Cooper',
            // Españoles
            'Canelo', 'Lobo', 'Pancho', 'Paco', 'Churro', 'Bigotes', 'Peluso', 'Manchas', 'Negro', 'Blanco',
            'Caramelo', 'Café', 'Oso', 'Tigre', 'León', 'Gringo', 'Chico', 'Gordo', 'Flaco', 'Pequeño',
            'Bandido', 'Capitán', 'Duque', 'Príncipe', 'Rey', 'Barón', 'Conde', 'Marqués', 'Caballero', 'Guerrero',
            // Mitología y ficción
            'Hércules', 'Apolo', 'Ares', 'Aquiles', 'Ulises', 'Odín', 'Loki', 'Fenrir', 'Ragnar', 'Kratos',
            'Gandalf', 'Frodo', 'Aragorn', 'Yoda', 'Chewie', 'Vader', 'Kylo', 'Han', 'Luke', 'Finn',
            'Groot', 'Rocket', 'Drax', 'Stark', 'Banner', 'Rogers', 'Bucky', 'Vision', 'Pietro', 'Loki',
            // Naturaleza
            'Storm', 'Thunder', 'Shadow', 'Blaze', 'Flash', 'Bolt', 'River', 'Forest', 'Stone', 'Rock',
            'Wolf', 'Bear', 'Hawk', 'Eagle', 'Falcon', 'Raven', 'Phoenix', 'Dragon', 'Tiger', 'Panther',
            // Comida y bebida
            'Whisky', 'Brandy', 'Tequila', 'Mezcal', 'Nacho', 'Taco', 'Burrito', 'Churro', 'Donut', 'Cookie',
            'Biscuit', 'Muffin', 'Brownie', 'Oreo', 'Snickers', 'Mars', 'Twix', 'Bounty', 'Kit', 'Crunchy',
            // Modernos únicos
            'Axel', 'Dante', 'Draco', 'Felix', 'Gizmo', 'Hugo', 'Ivan', 'Jazz', 'Kai', 'Knox',
            'Lance', 'Maverick', 'Neo', 'Odin', 'Pixel', 'Quest', 'Rogue', 'Sage', 'Tank', 'Viper',
            'Zack', 'Diesel', 'Turbo', 'Nitro', 'Blitz', 'Cash', 'Ace', 'King', 'Prince', 'Boss',
            // Razas específicas
            'Kaiser', 'Fritz', 'Hans', 'Otto', 'Wolfgang', 'Günther', 'Klaus', 'Dieter', 'Heinz', 'Ludwig',
            'Pablo', 'Diego', 'Carlos', 'Miguel', 'Antonio', 'Francisco', 'José', 'Manuel', 'Pedro', 'Juan',
            // Música y arte
            'Mozart', 'Bach', 'Beethoven', 'Elvis', 'Bowie', 'Lennon', 'Hendrix', 'Marley', 'Cobain', 'Freddie',
            'Picasso', 'Dalí', 'Goya', 'Velázquez', 'Miró', 'Monet', 'Renoir', 'Matisse', 'Warhol', 'Banksy',
            // Deportes
            'Messi', 'Ronaldo', 'Maradona', 'Pelé', 'Zidane', 'Beckham', 'Rooney', 'Neymar', 'Mbappé', 'Haaland',
            'Jordan', 'Kobe', 'LeBron', 'Curry', 'Shaq', 'Magic', 'Bird', 'Duncan', 'Nash', 'Nowitzki',
            // Adicionales
            'Balto', 'Beethoven', 'Bolt', 'Bronco', 'Caesar', 'Casper', 'Clifford', 'Conan', 'Django', 'Draco',
            'Einstein', 'Falco', 'Fido', 'Finn', 'Ghost', 'Goku', 'Hachi', 'Hunter', 'Indie', 'Jasper'
        ],
        female: [
            // Clásicas
            'Luna', 'Lola', 'Bella', 'Nala', 'Maya', 'Cleo', 'Laika', 'Kira', 'Sasha', 'Zoe',
            'Mia', 'Chloe', 'Daisy', 'Molly', 'Lucy', 'Sadie', 'Maggie', 'Sophie', 'Coco', 'Lily',
            'Abby', 'Bailey', 'Ginger', 'Gracie', 'Hannah', 'Holly', 'Ivy', 'Jade', 'Katie', 'Lexi',
            // Españolas
            'Canela', 'Dulce', 'Estrella', 'Reina', 'Princesa', 'Dama', 'Perla', 'Mora', 'Niebla', 'Brisa',
            'Aurora', 'Sol', 'Luz', 'Alba', 'Luna', 'Nieve', 'Flor', 'Rosa', 'Margarita', 'Violeta',
            'Chispa', 'Llama', 'Bruma', 'Tormenta', 'Lluvia', 'Rocío', 'Coral', 'Ámbar', 'Rubí', 'Jade',
            // Mitología
            'Athena', 'Artemis', 'Hera', 'Freya', 'Valkyria', 'Isis', 'Nyx', 'Selene', 'Gaia', 'Rhea',
            'Venus', 'Diana', 'Juno', 'Minerva', 'Flora', 'Fauna', 'Aurora', 'Pandora', 'Medusa', 'Circe',
            // Ficción
            'Arya', 'Khaleesi', 'Sansa', 'Leia', 'Rey', 'Padmé', 'Hermione', 'Luna', 'Ginny', 'Eleven',
            'Elsa', 'Anna', 'Moana', 'Merida', 'Rapunzel', 'Jasmine', 'Ariel', 'Belle', 'Mulan', 'Pocahontas',
            'Katniss', 'Tris', 'Gamora', 'Nebula', 'Wanda', 'Natasha', 'Pepper', 'Hope', 'Janet', 'Carol',
            // Naturaleza
            'Storm', 'Misty', 'Sunny', 'Willow', 'Autumn', 'Summer', 'Winter', 'Spring', 'Rain', 'Snow',
            'River', 'Brook', 'Meadow', 'Sierra', 'Savanna', 'Sahara', 'Ocean', 'Coral', 'Pearl', 'Crystal',
            // Comida dulce
            'Cookie', 'Muffin', 'Cupcake', 'Brownie', 'Candy', 'Honey', 'Sugar', 'Maple', 'Cinnamon', 'Ginger',
            'Peaches', 'Cherry', 'Berry', 'Olive', 'Pepper', 'Cocoa', 'Mocha', 'Latte', 'Caramel', 'Toffee',
            // Elegantes
            'Duchess', 'Countess', 'Lady', 'Queen', 'Empress', 'Princess', 'Baroness', 'Viscountess', 'Marchioness', 'Grace',
            'Victoria', 'Elizabeth', 'Catherine', 'Margaret', 'Charlotte', 'Diana', 'Camilla', 'Anne', 'Beatrice', 'Eugenie',
            // Modernas
            'Nova', 'Pixel', 'Echo', 'Indie', 'Rebel', 'Rogue', 'Scout', 'Phoenix', 'Blaze', 'Ember',
            'Elektra', 'Harley', 'Jinx', 'Karma', 'Mystique', 'Onyx', 'Raven', 'Shadow', 'Storm', 'Vixen',
            // Adicionales
            'Bonnie', 'Cassie', 'Dakota', 'Emma', 'Fiona', 'Georgia', 'Hazel', 'Iris', 'Josie', 'Kona',
            'Layla', 'Maddie', 'Nikki', 'Olivia', 'Penny', 'Quinn', 'Riley', 'Stella', 'Tessa', 'Uma'
        ],
        neutral: [
            'Blue', 'Scout', 'Indie', 'Riley', 'Casey', 'Morgan', 'Quinn', 'Sage', 'Skyler', 'Taylor',
            'Aspen', 'Bailey', 'Charlie', 'Dakota', 'Ellis', 'Finley', 'Harper', 'Jamie', 'Jordan', 'Kelly',
            'Lucky', 'Marley', 'Oakley', 'Peyton', 'Reese', 'River', 'Rory', 'Sam', 'Sydney', 'Winter',
            'Alaska', 'Arizona', 'Brooklyn', 'Denver', 'London', 'Paris', 'Phoenix', 'Rio', 'Sydney', 'Venice',
            'Biscuit', 'Brownie', 'Cookie', 'Ginger', 'Honey', 'Maple', 'Mocha', 'Nutmeg', 'Pepper', 'Truffle',
            'Cloud', 'Comet', 'Galaxy', 'Moon', 'Nebula', 'Nova', 'Orbit', 'Star', 'Sun', 'Eclipse'
        ],
        styles: {
            all: 'Todos los estilos',
            clasico: 'Clásicos',
            espanol: 'Españoles',
            mitologia: 'Mitología',
            naturaleza: 'Naturaleza',
            comida: 'Comida',
            moderno: 'Modernos'
        }
    },

    // ============================================
    // GATOS - Cat Names
    // ============================================
    gatos: {
        male: [
            // Clásicos felinos
            'Michi', 'Misu', 'Garfield', 'Felix', 'Tom', 'Simba', 'Mufasa', 'Scar', 'Bagheera', 'Rajah',
            'Oliver', 'Figaro', 'Toulouse', 'Berlioz', 'Thomas', 'Sylvester', 'Whiskers', 'Mittens', 'Boots', 'Socks',
            // Elegantes
            'Sebastian', 'Winston', 'Theodore', 'Archibald', 'Benedict', 'Constantine', 'Dominic', 'Edmund', 'Frederick', 'Geoffrey',
            'Montgomery', 'Pemberton', 'Reginald', 'Stanford', 'Thornton', 'Wellington', 'Xavier', 'Bartholomew', 'Cornelius', 'Fitzgerald',
            // Misteriosos
            'Shadow', 'Phantom', 'Midnight', 'Eclipse', 'Onyx', 'Obsidian', 'Raven', 'Noir', 'Smoke', 'Ash',
            'Specter', 'Ghost', 'Spirit', 'Wraith', 'Shade', 'Dusk', 'Twilight', 'Nebula', 'Void', 'Abyss',
            // Egipcios
            'Ra', 'Osiris', 'Anubis', 'Horus', 'Seth', 'Thoth', 'Bastet', 'Sobek', 'Khepri', 'Aten',
            'Cairo', 'Luxor', 'Memphis', 'Thebes', 'Sphinx', 'Pharaoh', 'Nile', 'Pyramid', 'Scarab', 'Ankh',
            // Japoneses
            'Mochi', 'Sushi', 'Wasabi', 'Sake', 'Ramen', 'Tofu', 'Nori', 'Miso', 'Taro', 'Yuki',
            'Hiro', 'Kenji', 'Akira', 'Takeshi', 'Haruki', 'Ryu', 'Kai', 'Sora', 'Zen', 'Kuro',
            // Literarios
            'Poe', 'Shakespeare', 'Hemingway', 'Fitzgerald', 'Dickens', 'Twain', 'Orwell', 'Kafka', 'Tolkien', 'Lovecraft',
            'Darcy', 'Heathcliff', 'Rochester', 'Dorian', 'Gatsby', 'Atticus', 'Sherlock', 'Watson', 'Moriarty', 'Holmes',
            // Reyes y nobles
            'King', 'Duke', 'Prince', 'Earl', 'Baron', 'Lord', 'Sir', 'Knight', 'Count', 'Marquis',
            'Caesar', 'Augustus', 'Marcus', 'Julius', 'Nero', 'Caligula', 'Tiberius', 'Claudius', 'Hadrian', 'Trajan',
            // Científicos
            'Newton', 'Einstein', 'Darwin', 'Tesla', 'Edison', 'Galileo', 'Copernicus', 'Curie', 'Hawking', 'Feynman',
            'Schrödinger', 'Heisenberg', 'Bohr', 'Planck', 'Maxwell', 'Faraday', 'Kelvin', 'Celsius', 'Pascal', 'Fermi',
            // Colores
            'Gris', 'Negro', 'Blanco', 'Naranja', 'Canela', 'Caramelo', 'Mármol', 'Tigre', 'Leopardo', 'Jaguar',
            // Adicionales únicos
            'Atlas', 'Cosmos', 'Merlin', 'Odin', 'Thor', 'Loki', 'Freyr', 'Baldur', 'Tyr', 'Heimdall',
            'Phoenix', 'Griffin', 'Dragon', 'Sphinx', 'Chimera', 'Hydra', 'Kraken', 'Titan', 'Cyclops', 'Cerberus'
        ],
        female: [
            // Clásicas felinas
            'Minina', 'Misha', 'Kitty', 'Cleo', 'Nala', 'Kiara', 'Sarabi', 'Sarafina', 'Vitani', 'Zira',
            'Marie', 'Duchess', 'Dinah', 'Cheshire', 'Figarina', 'Luna', 'Diana', 'Artemis', 'Selene', 'Hecate',
            // Elegantes
            'Anastasia', 'Arabella', 'Beatrice', 'Celestine', 'Cordelia', 'Daphne', 'Evangeline', 'Felicity', 'Genevieve', 'Henrietta',
            'Isadora', 'Josephine', 'Katerina', 'Lavinia', 'Millicent', 'Octavia', 'Persephone', 'Rosalind', 'Seraphina', 'Theodora',
            // Misteriosas
            'Shadow', 'Phantom', 'Midnight', 'Eclipse', 'Onyx', 'Obsidian', 'Raven', 'Noir', 'Smoke', 'Mystic',
            'Specter', 'Ghost', 'Spirit', 'Shade', 'Dusk', 'Twilight', 'Nebula', 'Void', 'Luna', 'Nyx',
            // Egipcias
            'Cleopatra', 'Nefertiti', 'Isis', 'Hathor', 'Sekhmet', 'Maat', 'Nut', 'Nephthys', 'Bastet', 'Tefnut',
            'Kiya', 'Merit', 'Ankhesenamun', 'Mutnedjmet', 'Sitamun', 'Iset', 'Henuttawy', 'Tiye', 'Nefertari', 'Ahmes',
            // Japonesas
            'Sakura', 'Yuki', 'Hana', 'Mei', 'Aiko', 'Yumi', 'Kiko', 'Mika', 'Suki', 'Yuki',
            'Akiko', 'Emiko', 'Hanako', 'Keiko', 'Mariko', 'Naoko', 'Reiko', 'Sachiko', 'Tomoko', 'Yoshiko',
            // Brujas y hechiceras
            'Morgana', 'Circe', 'Medea', 'Hecate', 'Lilith', 'Ursula', 'Maleficent', 'Elvira', 'Sabrina', 'Tabitha',
            'Wanda', 'Scarlet', 'Raven', 'Mystique', 'Emma', 'Jean', 'Ororo', 'Kitty', 'Rogue', 'Jubilee',
            // Diosas
            'Venus', 'Diana', 'Juno', 'Minerva', 'Flora', 'Vesta', 'Ceres', 'Proserpina', 'Aurora', 'Luna',
            'Athena', 'Hera', 'Aphrodite', 'Artemis', 'Demeter', 'Persephone', 'Hestia', 'Iris', 'Nike', 'Themis',
            // Piedras preciosas
            'Ruby', 'Sapphire', 'Emerald', 'Diamond', 'Pearl', 'Opal', 'Jade', 'Amber', 'Topaz', 'Amethyst',
            'Garnet', 'Onyx', 'Coral', 'Ivory', 'Crystal', 'Jasper', 'Turquoise', 'Aquamarine', 'Moonstone', 'Sunstone',
            // Flores
            'Rose', 'Lily', 'Violet', 'Daisy', 'Jasmine', 'Magnolia', 'Iris', 'Dahlia', 'Orchid', 'Peony',
            'Camellia', 'Azalea', 'Gardenia', 'Begonia', 'Zinnia', 'Marigold', 'Petunia', 'Poppy', 'Tulip', 'Lotus',
            // Adicionales
            'Bella', 'Stella', 'Mia', 'Zoe', 'Chloe', 'Sophie', 'Willow', 'Ivy', 'Olive', 'Hazel',
            'Aurora', 'Nova', 'Celeste', 'Estella', 'Valentina', 'Francesca', 'Isabella', 'Gabriella', 'Adriana', 'Mariana'
        ],
        neutral: [
            'Michi', 'Gatito', 'Pelusa', 'Bola', 'Nube', 'Algodón', 'Copo', 'Pompón', 'Peluche', 'Copito',
            'Blue', 'Indie', 'Scout', 'Lucky', 'Smoky', 'Stormy', 'Sunny', 'Dusty', 'Misty', 'Cloudy',
            'Whiskers', 'Mittens', 'Patches', 'Stripes', 'Spots', 'Socks', 'Boots', 'Paws', 'Fluffy', 'Fuzzy',
            'Cinnamon', 'Ginger', 'Pepper', 'Nutmeg', 'Cocoa', 'Mocha', 'Caramel', 'Toffee', 'Honey', 'Maple',
            'Pixel', 'Binary', 'Byte', 'Chip', 'Data', 'Glitch', 'Widget', 'Gadget', 'Techno', 'Cyber',
            'Zen', 'Karma', 'Nirvana', 'Bodhi', 'Dharma', 'Lotus', 'Sage', 'Spirit', 'Soul', 'Om'
        ],
        styles: {
            all: 'Todos los estilos',
            clasico: 'Clásicos',
            elegante: 'Elegantes',
            misterioso: 'Misteriosos',
            egipcio: 'Egipcios',
            japones: 'Japoneses',
            literario: 'Literarios'
        }
    },

    // ============================================
    // BEBÉS - Uncommon Baby Names
    // ============================================
    bebes: {
        male: [
            // Nombres españoles poco comunes
            'Adán', 'Agustín', 'Aldair', 'Aldo', 'Amadeo', 'Amaro', 'Ander', 'Aritz', 'Arnau', 'Arturo',
            'Asier', 'Aurelio', 'Baltasar', 'Basilio', 'Beltrán', 'Benicio', 'Blas', 'Bosco', 'Brais', 'Bruno',
            'Cándido', 'Carmelo', 'Casimiro', 'Cayetano', 'Ciro', 'Claudio', 'Cosme', 'Cristóbal', 'Damián', 'Darío',
            'Delfín', 'Dionisio', 'Edmundo', 'Efrén', 'Elías', 'Eliseo', 'Emiliano', 'Eneas', 'Erasto', 'Ernesto',
            'Esteban', 'Eugenio', 'Fabián', 'Facundo', 'Federico', 'Félix', 'Fermín', 'Fidel', 'Florencio', 'Froilán',
            'Gaspar', 'Genaro', 'Gerardo', 'Germán', 'Gonzalo', 'Gregorio', 'Guido', 'Guillermo', 'Gustavo', 'Héctor',
            'Herminio', 'Hilario', 'Homero', 'Horacio', 'Hugo', 'Ignacio', 'Ildefonso', 'Indalecio', 'Isidro', 'Ivo',
            'Jacinto', 'Jacobo', 'Jairo', 'Jerónimo', 'Joaquín', 'Julián', 'Laureano', 'Lázaro', 'Leandro', 'León',
            'Leonardo', 'Leopoldo', 'Lisandro', 'Lorenzo', 'Luciano', 'Marcelo', 'Mariano', 'Matías', 'Mauricio', 'Máximo',
            'Melchor', 'Néstor', 'Nicolás', 'Octavio', 'Orlando', 'Osvaldo', 'Patricio', 'Plácido', 'Ramiro', 'Raúl',
            // Internacionales poco comunes
            'Axel', 'Bastian', 'Caspian', 'Dante', 'Elian', 'Fabian', 'Gideon', 'Hendrix', 'Iker', 'Jasper',
            'Killian', 'Leif', 'Magnus', 'Nico', 'Orion', 'Phoenix', 'Quentin', 'Ronan', 'Silas', 'Thiago',
            'Ulises', 'Vance', 'Wolf', 'Xander', 'Yael', 'Zander', 'Atlas', 'Blaise', 'Callum', 'Dorian',
            'Ezra', 'Felix', 'Griffin', 'Hayes', 'Ivan', 'Jude', 'Knox', 'Landon', 'Milo', 'Nash',
            'Otis', 'Pierce', 'Quincy', 'Reid', 'Sterling', 'Tobias', 'Uri', 'Vincent', 'Wesley', 'Zeke',
            // Nombres con significado especial
            'Aurelio', 'Benedicto', 'Celestino', 'Desiderio', 'Emilio', 'Fausto', 'Gael', 'Hiram', 'Isandro', 'Justino',
            'Kaleb', 'Lael', 'Mael', 'Nahuel', 'Omar', 'Pascual', 'Rael', 'Saúl', 'Tadeo', 'Uriel',
            'Valentín', 'Xavier', 'Yeray', 'Zacarías', 'Adriel', 'Baltazar', 'Camilo', 'Dámaso', 'Eloy', 'Fabio',
            // Modernos únicos
            'Aiden', 'Brayden', 'Cayden', 'Declan', 'Evan', 'Finn', 'Grayson', 'Hunter', 'Isaiah', 'Jayden',
            'Kayden', 'Liam', 'Mason', 'Noah', 'Owen', 'Parker', 'Quinn', 'Ryder', 'Sawyer', 'Tristan'
        ],
        female: [
            // Nombres españoles poco comunes
            'Adela', 'Águeda', 'Ainara', 'Alaia', 'Alba', 'Aldana', 'Alicia', 'Almudena', 'Amaia', 'Amaranta',
            'Amelia', 'Amparo', 'Anahí', 'Angélica', 'Araceli', 'Ariadna', 'Astrid', 'Aurora', 'Azucena', 'Beatriz',
            'Belén', 'Berenice', 'Bernarda', 'Blanca', 'Brunilda', 'Calista', 'Camila', 'Carlota', 'Casandra', 'Catalina',
            'Cayetana', 'Celestina', 'Clara', 'Clarisa', 'Clementina', 'Constanza', 'Corina', 'Covadonga', 'Dafne', 'Dalila',
            'Débora', 'Delfina', 'Dulce', 'Edith', 'Eleonora', 'Elisa', 'Eloísa', 'Elvira', 'Emilia', 'Engracia',
            'Esmeralda', 'Esperanza', 'Estrella', 'Eugenia', 'Evangelina', 'Fabiana', 'Fabiola', 'Felicia', 'Felipa', 'Fernanda',
            'Flavia', 'Florencia', 'Fortunata', 'Francisca', 'Genoveva', 'Gertrudis', 'Gisela', 'Gloria', 'Gracia', 'Griselda',
            'Guadalupe', 'Guillermina', 'Haydée', 'Hortensia', 'Ifigenia', 'Iluminada', 'Inés', 'Irene', 'Iris', 'Isaura',
            'Isidora', 'Isolda', 'Jacinta', 'Jimena', 'Josefina', 'Jovita', 'Juana', 'Julieta', 'Laia', 'Laureana',
            'Leonor', 'Leticia', 'Lidia', 'Lorena', 'Lourdes', 'Luciana', 'Macarena', 'Magdalena', 'Maite', 'Manuela',
            // Internacionales poco comunes
            'Aria', 'Aurora', 'Bianca', 'Celeste', 'Dahlia', 'Elena', 'Fiona', 'Gemma', 'Harlow', 'Isla',
            'Juliana', 'Kira', 'Livia', 'Mila', 'Nadia', 'Olive', 'Petra', 'Quinn', 'Rosalie', 'Sienna',
            'Thalia', 'Uma', 'Vera', 'Willa', 'Xena', 'Yvette', 'Zara', 'Adeline', 'Brielle', 'Cecilia',
            'Daphne', 'Eliana', 'Freya', 'Gianna', 'Helena', 'Ivy', 'Jocelyn', 'Kaia', 'Lena', 'Maya',
            'Norah', 'Ophelia', 'Penelope', 'Rosalind', 'Serena', 'Tatiana', 'Ursula', 'Viviana', 'Winona', 'Ximena',
            // Nombres con significado especial
            'Alegría', 'Armonía', 'Caridad', 'Divina', 'Esperanza', 'Felicidad', 'Génesis', 'Herminia', 'Inocencia', 'Jovita',
            'Luz', 'Milagros', 'Nieves', 'Oliva', 'Paloma', 'Paz', 'Refugio', 'Rocío', 'Soledad', 'Trinidad',
            'Valentina', 'Victoria', 'Virtudes', 'Zenaida', 'Adoración', 'Benedicta', 'Consolación', 'Dolores', 'Encarnación', 'Fe',
            // Modernos únicos
            'Ainsley', 'Bristol', 'Collins', 'Dylan', 'Emery', 'Finley', 'Greer', 'Haven', 'Indie', 'Juniper',
            'Kinsley', 'Lennon', 'Monroe', 'Navy', 'Oakley', 'Paisley', 'Reign', 'Sloane', 'Teagan', 'Winter'
        ],
        neutral: [
            'Alex', 'Ariel', 'Cameron', 'Dana', 'Eden', 'Finley', 'Gray', 'Harper', 'Indigo', 'Jamie',
            'Kai', 'Lane', 'Morgan', 'Noel', 'Onyx', 'Phoenix', 'Quinn', 'Reese', 'Sage', 'Taylor',
            'Ari', 'Blake', 'Casey', 'Drew', 'Ellis', 'Frankie', 'Greer', 'Hadley', 'Ira', 'Jesse',
            'Kelly', 'Lee', 'Max', 'Nicky', 'Ollie', 'Pat', 'Ray', 'Sam', 'Terry', 'Val',
            'Andrei', 'Bailey', 'Charlie', 'Dakota', 'Emery', 'Flynn', 'Gene', 'Hayden', 'Iden', 'Jordan',
            'Kennedy', 'Logan', 'Micah', 'Nico', 'Ocean', 'Parker', 'Robin', 'Shannon', 'Tatum', 'Winter'
        ],
        styles: {
            all: 'Todos los estilos',
            espanol: 'Españoles',
            internacional: 'Internacionales',
            significado: 'Con significado',
            moderno: 'Modernos'
        }
    },

    // ============================================
    // FORTNITE - Gaming Nicks
    // ============================================
    fortnite: {
        all: [
            // Aggressive/Pro style
            'ShadowStrike', 'NightHunter', 'DeathWish', 'KillShot', 'HeadHunter', 'SkullCrusher', 'BoneBreaker', 'BloodBath', 'GrimReaper', 'SoulTaker',
            'VenomBite', 'ViperStrike', 'CobraKing', 'ScorpionSting', 'SpiderByte', 'WolfPack', 'LoneWolf', 'AlphaWolf', 'SavageWolf', 'DarkWolf',
            'ThunderStorm', 'LightningBolt', 'StormRider', 'TempestFury', 'CycloneForce', 'TornadoTwist', 'HurricaneHit', 'TsunamiWave', 'QuakeShaker', 'LavaBurst',
            // Cool/Mysterious
            'DarkKnight', 'ShadowNinja', 'GhostRider', 'PhantomAce', 'SilentKiller', 'InvisibleMan', 'StealthMode', 'NightStalker', 'MidnightHunter', 'DuskAssassin',
            'FrozenHeart', 'IceKing', 'BlizzardBeast', 'ArcticWolf', 'SnowStorm', 'WinterSoldier', 'FrostBite', 'ColdBlood', 'GlacierGod', 'PermafrostPro',
            'CrimsonBlaze', 'InfernoKing', 'FireStorm', 'BurningPhoenix', 'AshenDemon', 'EmberLord', 'SmokeScreen', 'FlameThrow', 'MoltenCore', 'VolcanoViper',
            // Tactical/Military
            'TacticalOps', 'SpecialForces', 'DeltaSquad', 'AlphaTeam', 'BravoUnit', 'CommandoKing', 'RangerElite', 'SniperGod', 'MarksmanPro', 'SharpShooter',
            'BulletProof', 'ArmorPierce', 'TankBuster', 'MissileLock', 'TargetAcquired', 'HotZone', 'WarZone', 'BattleField', 'FrontLine', 'LastStand',
            // Legends/Myths
            'TitanSlayer', 'GodKiller', 'DragonBorn', 'PhoenixRise', 'GriffinClaw', 'HydraHead', 'KrakenDeep', 'CerberusHound', 'MedusaGaze', 'MinotaurRage',
            'ZeusThunder', 'PoseidonWave', 'HadesShade', 'AresFury', 'AthenaWisdom', 'ApolloLight', 'ArtemisArrow', 'HermesSpeed', 'HephaestusFire', 'DionysusWine',
            // Spanish style
            'ElMatador', 'DiabloRojo', 'LoboSolitario', 'TigreNegro', 'EscorpiónMortal', 'ÁguilaDorada', 'TormentaOscura', 'FuegoDivino', 'RayoLetal', 'SombraAsesina',
            'CazadorNocturno', 'GuerreroImplacable', 'VengadorSilencioso', 'DestructorTotal', 'AniquiladorPro', 'DominadorSupremo', 'ConquistadorÉpico', 'InvasorLetal', 'DepredadorAlfa', 'EjecutorFinal',
            // Edgy/Cool symbols ready
            'xXShadowXx', 'iTzKiller', 'FaZe_Sniper', 'TSM_Pro', 'OpTic_Beast', 'NRG_Elite', 'G2_Legend', '100T_Ace', 'TL_Master', 'C9_King',
            'SK_Warrior', 'VP_Striker', 'NaVi_Hunter', 'Fnatic_God', 'Astralis_Pro', 'Liquid_Demon', 'EG_Phantom', 'Sentinels_Ace', 'Furia_Beast', 'LOUD_King',
            // Numbers/Leet
            'Pr0_Gam3r', 'L33t_K1ll3r', 'H4x0r_M4n', 'N00b_Sl4y3r', 'B0ss_M4n', 'K1ng_0f_K1ngs', 'D3ath_L0rd', 'D4rk_Kn1ght', 'Sh4d0w_Hunt3r', 'N1ght_St4lk3r',
            '420BlazeitPro', '69NiceKill', '1TapGod', '360NoScope', 'HeadshotKing', 'DoubleKill', 'TripleKill', 'QuadKill', 'PentaKill', 'AceClutch',
            // Additional variations
            'CryptoKiller', 'QuantumLeap', 'NeoMatrix', 'CyberPunk', 'TechnoViking', 'DigitalDemon', 'VirtualViper', 'MetaverseKing', 'BlockchainBeast', 'NFT_Slayer',
            'GlitchMaster', 'BugExploit', 'HackTheGame', 'CheatCode', 'GodMode', 'InfiniteAmmo', 'NoClip', 'WallHack', 'AimAssist', 'AutoAim',
            // Victory royale themed
            'VictoryRoyale', 'LastOneStanding', 'ChickenDinner', 'NumberOne', 'TopDog', 'KingOfTheHill', 'ChampionRise', 'LegendStatus', 'MythicRank', 'ImmortalPro'
        ],
        styles: {
            all: 'Todos los estilos',
            agresivo: 'Agresivos',
            misterioso: 'Misteriosos',
            tactico: 'Tácticos',
            espanol: 'En español',
            pro: 'Estilo Pro'
        }
    },

    // ============================================
    // ROBLOX - Gaming Nicks
    // ============================================
    roblox: {
        all: [
            // Classic Roblox style
            'CoolPlayer2024', 'AwesomeGamer99', 'EpicBuilder123', 'SuperHero456', 'MegaStar789', 'UltraPro2025', 'MaxLevel100', 'ProGamer9000', 'ElitePlayer777', 'LegendaryOne',
            'BlockMaster', 'BuilderKing', 'CreativeGenius', 'DesignPro', 'ArchitectX', 'CraftMaster', 'ConstructKing', 'TowerBuilder', 'CityMaker', 'WorldCreator',
            // Fun/Playful
            'SillyGoose', 'FunnyBunny', 'CrazyCat', 'WildDog', 'HappyPanda', 'JoyfulBear', 'GigglyGirl', 'LaughingBoy', 'SmileyFace', 'CheerfulChamp',
            'BubblyBee', 'SparkleStar', 'RainbowRider', 'UnicornMagic', 'DinoRawr', 'DragonBreath', 'MonsterMash', 'AlienInvasion', 'RobotRevolt', 'ZombieZapper',
            // Adventure themed
            'TreasureHunter', 'GoldSeeker', 'DiamondFinder', 'RubyRaider', 'EmeraldExplorer', 'SapphireSearch', 'CrystalCave', 'MysticMine', 'SecretDungeon', 'HiddenTemple',
            'QuestMaster', 'AdventureKing', 'ExplorerPro', 'PioneerSpirit', 'TrailBlazer', 'PathFinder', 'WaySeeker', 'JourneyMan', 'VoyagerX', 'TravelerZ',
            // Game specific style
            'ObbyKing', 'ObbyMaster', 'ObbyPro', 'ParkourLegend', 'JumpKing', 'SpeedRunner', 'TimeTrial', 'RacerPro', 'DriftKing', 'TurboCharge',
            'TycoonMaster', 'BusinessKing', 'MoneyMaker', 'CashFlow', 'ProfitPro', 'WealthBuilder', 'EmpireKing', 'MogulMaster', 'BillionaireX', 'MillionDollar',
            // Cool/Edgy (kid-friendly)
            'ShadowNinja', 'DarkKnight', 'NightHero', 'MoonWarrior', 'StarFighter', 'SunChampion', 'CosmicKing', 'GalaxyHero', 'UniverseMaster', 'SpaceExplorer',
            'IceWolf', 'FireDragon', 'ThunderBolt', 'LightningStrike', 'StormCloud', 'TornadoTwist', 'HurricaneForce', 'EarthquakeRumble', 'VolcanoBlast', 'TsunamiWave',
            // Popular culture inspired
            'NinjaMaster', 'SamuraiSpirit', 'KnightHonor', 'VikingRage', 'PirateKing', 'CowboyLegend', 'SpyAgent', 'DetectivePro', 'SupervillainX', 'AntiHero99',
            'MagicWizard', 'SpellCaster', 'PotionMaster', 'EnchantKing', 'MysticMage', 'SorcererSupreme', 'WarlockPower', 'WitchCraft', 'AlchemistGold', 'DruidNature',
            // Animal themed
            'WolfPack', 'LionKing', 'TigerClaw', 'BearStrength', 'EagleFlight', 'HawkEye', 'FalconSpeed', 'OwlWisdom', 'FoxCunning', 'SnakeStrike',
            'SharkBite', 'WhaleKing', 'DolphinJump', 'OctopusArm', 'CrabClaw', 'LobsterPinch', 'JellyfishSting', 'SeahorseMagic', 'StarfishGlow', 'CoralReef',
            // Spanish options
            'JugadorEpico', 'ConstrucMaster', 'AventureroX', 'CazadorPro', 'GuerreroMax', 'HeroeSupremo', 'LeyendaViva', 'CampeonTotal', 'MaestroGamer', 'ReyDelJuego',
            'LoboSolitario', 'DragonFuego', 'NinjaSombra', 'CaballeroOscuro', 'MagoSupremo', 'ArqueroElite', 'EspadachinPro', 'TanqueBlindado', 'FrancotiradorX', 'MedicoHealer',
            // OG style names
            'Guest1337', 'Builderman_Fan', 'OGPlayer2006', 'ClassicRoblox', 'RetroGamer', 'VintageVibes', 'OldSchoolCool', 'OriginalGangsta', 'DayOnePlayer', 'BetaTester'
        ],
        styles: {
            all: 'Todos los estilos',
            clasico: 'Clásicos Roblox',
            divertido: 'Divertidos',
            aventura: 'Aventura',
            cool: 'Cool',
            espanol: 'En español'
        }
    },

    // ============================================
    // FREE FIRE - Gaming Nicks
    // ============================================
    freefire: {
        all: [
            // Pro player style
            'ꜰꜰ᭄ᴮᴼˢˢ', 'ꜰꜰ᭄ᏦᎥᏞᏞᎬᏒ', 'ꜰꜰ᭄ᴾʳᵒ', 'ꜰꜰ᭄ᴳᵒᵈ', 'ꜰꜰ᭄ᴷⁱⁿᵍ', 'ꜰꜰ᭄ᴸᵉᵍᵉⁿᵈ', 'ꜰꜰ᭄ᴮᵉᵃˢᵗ', 'ꜰꜰ᭄ᴰᵉᵐᵒⁿ', 'ꜰꜰ᭄ᴬᶜᵉ', 'ꜰꜰ᭄ᴱˡⁱᵗᵉ',
            '亗ᴮᴼˢˢ亗', '亗ᏦᎥᏞᏞᎬᏒ亗', '亗ᴾʳᵒ亗', '亗ᴳᵒᵈ亗', '亗ᴷⁱⁿᵍ亗', '亗ᴸᵉᵍᵉⁿᵈ亗', '亗ᴮᵉᵃˢᵗ亗', '亗ᴰᵉᵐᵒⁿ亗', '亗ᴬᶜᵉ亗', '亗ᴱˡⁱᵗᵉ亗',
            // With special symbols
            '꧁༒ᏦᎥᏞᏞᎬᏒ༒꧂', '꧁☆ᏢᏒᎾ☆꧂', '꧁★ᏰᎬᏗᏕᎿ★꧂', '꧁♚ᏦᎥᏁᎶ♚꧂', '꧁⚡ᏞᎬᎶᎬᏁᎠ⚡꧂', '꧁✿ᏩᎾᎠ✿꧂', '꧁❀ᎠᎬᎷᎾᏁ❀꧂', '꧁☯ᎷᎪᏕᎿᎬᏒ☯꧂', '꧁✵ᎻᎬᏒᎾ✵꧂', '꧁卍ᎪᏟᎬ卍꧂',
            '︻デ═一ᏕᏁᎥᏢᎬᏒ', '︻デ═一ᏦᎥᏞᏞᎬᏒ', '︻デ═一ᏢᏒᎾ', '︻デ═一ᏰᎾᏕᏕ', '︻デ═一ᎶᎾᎠ', '═══ᏦᎥᏁᎶ═══', '═══ᏞᎬᎶᎬᏁᎠ═══', '═══ᏰᎬᏗᏕᎿ═══', '═══ᎠᎬᎷᎾᏁ═══', '═══ᎻᎬᏒᎾ═══',
            // Wings and decorative
            '░S░H░A░D░O░W░', '▄︻̷̿┻̿═━一ᏦᎥᏞᏞᎬᏒ', '◥꧁དKILLERད꧂◤', '╰‿╯ᏢᏒᎾᏢᏞᎪᎽᎬᏒ╰‿╯', '【ᏩᎾᎠ】', '『ᏰᎾᏕᏕ』', '〖ᏦᎥᏁᎶ〗', '《ᏞᎬᎶᎬᏁᎠ》', '「ᏰᎬᏗᏕᎿ」', '〔ᎠᎬᎷᎾᏁ〕',
            '乂ᴷⁱˡˡᵉʳ乂', '乂ᴮᵒˢˢ乂', '乂ᴾʳᵒ乂', '乂ᴳᵒᵈ乂', '乂ᴷⁱⁿᵍ乂', '乂ᴸᵉᵍᵉⁿᵈ乂', '乂ᴮᵉᵃˢᵗ乂', '乂ᴰᵉᵐᵒⁿ乂', '乂ᴬᶜᵉ乂', '乂ᴱˡⁱᵗᵉ乂',
            // Spanish with symbols
            '꧁☬ᴹᴬᵀᴬᴰᴼᴿ☬꧂', '꧁⚔ᴳᵁᴱᴿᴿᴱᴿᴼ⚔꧂', '꧁✝ᴰᴵᴬᴮᴸᴼ✝꧂', '꧁☠ᴸᴼᴮᴼ☠꧂', '꧁⚡ᵀᴼᴿᴹᴱᴺᵀᴬ⚡꧂', '꧁♛ᴿᴱᵞ♛꧂', '꧁✯ᴱˢᵀᴿᴱᴸᴸᴬ✯꧂', '꧁☪ᴸᵁᴺᴬ☪꧂', '꧁⚜ᴬᴳᵁᴵᴸᴬ⚜꧂', '꧁✵ᶠᵁᴱᴳᴼ✵꧂',
            '亗ᴹᴬᵀᴬᴰᴼᴿ亗', '亗ᴳᵁᴱᴿᴿᴱᴿᴼ亗', '亗ᴰᴵᴬᴮᴸᴼ亗', '亗ᴸᴼᴮᴼ亗', '亗ᵀᴼᴿᴹᴱᴺᵀᴬ亗', '亗ᴿᴱᵞ亗', '亗ᴱˢᵀᴿᴱᴸᴸᴬ亗', '亗ᴸᵁᴺᴬ亗', '亗ᴬᴳᵁᴵᴸᴬ亗', '亗ᶠᵁᴱᴳᴼ亗',
            // Aggressive style
            'HEADSHOT_KING', 'ONE_TAP_GOD', 'RUSH_KING', 'BOOYAH_MASTER', 'SQUAD_WIPER', 'TEAM_DESTROYER', 'LOBBY_CLEANER', 'RANK_PUSHER', 'GRANDMASTER_PRO', 'HEROIC_LEGEND',
            'DEATH_DEALER', 'SOUL_COLLECTOR', 'BONE_CRUSHER', 'SKULL_BREAKER', 'BLOOD_HUNTER', 'NIGHT_STALKER', 'SHADOW_KILLER', 'GHOST_REAPER', 'PHANTOM_SNIPER', 'SPECTER_ASSASSIN',
            // Cool names without heavy symbols
            'DarkAssassin', 'NightHunter', 'ShadowStrike', 'GhostSniper', 'PhantomKiller', 'SilentDeath', 'DeadlyAim', 'PerfectShot', 'QuickScope', 'NoMiss',
            'AlphaWolf', 'LoneWolf', 'WolfPack', 'SavageWolf', 'DarkWolf', 'NightWolf', 'ShadowWolf', 'GhostWolf', 'PhantomWolf', 'SilentWolf',
            // Brazilian/Portuguese influenced (popular in FF)
            'ReiDoFogo', 'MestreDoHeadshot', 'CrackDoRush', 'ProDoSquad', 'LendaDoFF', 'DeusDaBala', 'MonstroDoMapa', 'AssassinoFrio', 'CacadorDeAlmas', 'DestruidorTotal',
            'GuerreiroDaNoite', 'SombraMortal', 'FantasmaLetal', 'EspectroVingador', 'DemonioInterior', 'BestiaFeroz', 'LoboSanguinario', 'DragonVeneno', 'SerpienteAsesina', 'AguiaImplacable',
            // Guild style
            'GUILD_BOSS', 'LEADER_PRO', 'CAPTAIN_ACE', 'OFFICER_ELITE', 'MEMBER_LEGEND', 'RECRUIT_BEAST', 'FOUNDER_GOD', 'CO_LEADER_KING', 'ELDER_MASTER', 'GENERAL_FURY',
            // Simple cool
            'ColdBlood', 'IceKing', 'FireLord', 'ThunderGod', 'StormBringer', 'EarthShaker', 'WaterBender', 'AirNomad', 'VoidWalker', 'TimeKeeper'
        ],
        styles: {
            all: 'Todos los estilos',
            simbolos: 'Con símbolos',
            pro: 'Estilo Pro',
            espanol: 'En español',
            agresivo: 'Agresivos',
            simple: 'Simples cool'
        }
    },

    // ============================================
    // NICKS GENÉRICOS - Generic Gaming
    // ============================================
    nicks: {
        all: [
            // Universal cool
            'ShadowHunter', 'NightStalker', 'DarkKnight', 'GhostRider', 'PhantomAce', 'SilentStrike', 'DeadlyVenom', 'ColdAssassin', 'FrozenHeart', 'IceBlade',
            'FireStorm', 'BlazeKing', 'InfernoPro', 'BurningPhoenix', 'AshenDemon', 'MoltenCore', 'LavaFlow', 'VolcanoFury', 'EmberLord', 'SmokeScreen',
            'ThunderBolt', 'LightningStrike', 'StormBringer', 'TempestRage', 'CycloneSpin', 'TornadoForce', 'HurricaneWind', 'TsunamiWave', 'EarthQuake', 'AvalancheCrash',
            // Mythical creatures
            'DragonSlayer', 'PhoenixRising', 'GriffinClaw', 'HydraHead', 'CerberusHound', 'MinotaurCharge', 'PegasusFlight', 'UnicornMagic', 'BasiliskEye', 'ChimeraBreath',
            'WyvernWing', 'KrakenTentacle', 'LeviathanDeep', 'BehemothStrength', 'TitanPunch', 'GolemFist', 'GargoyleGuard', 'SphinxRiddle', 'ManticorePoison', 'RocTalon',
            // Military/Tactical
            'AlphaSquad', 'BravoTeam', 'CharlieUnit', 'DeltaForce', 'EchoStrike', 'FoxtrotOps', 'GolfSniper', 'HotelSix', 'IndiaCommand', 'JulietAssault',
            'CommandoKing', 'RangerPro', 'MarineAce', 'NavySeals', 'AirForce', 'ArmyStrong', 'SpecOps', 'BlackOps', 'CovertAgent', 'SecretService',
            // Space/Sci-fi
            'CosmicVoyager', 'StarTraveler', 'GalaxyHunter', 'NebulaKnight', 'AsteroidMiner', 'MeteorStrike', 'CometTail', 'BlackHole', 'Supernova', 'QuasarBeam',
            'CyberNinja', 'TechnoViking', 'DigitalDemon', 'VirtualViper', 'MatrixRunner', 'NeoWarrior', 'AndroidAssassin', 'CyborgSoldier', 'MechPilot', 'BioHazard',
            // Nature/Animals
            'AlphaWolf', 'LoneWolf', 'WolfPack', 'SavageBear', 'GrizzlyForce', 'PolarIce', 'TigerClaw', 'LionPride', 'PantherStealth', 'JaguarSpeed',
            'EagleFlight', 'HawkEye', 'FalconDive', 'RavenShadow', 'OwlNight', 'VultureCircle', 'SharkBite', 'WhaleKing', 'OrcaHunt', 'BarracudaRush',
            // Spanish themed
            'GuerreroOscuro', 'CazadorNocturno', 'AsesinoSilencioso', 'MatadorLetal', 'LoboSolitario', 'TigreNegro', 'ÁguilaDorada', 'SerpienteVenenosa', 'TormentaFeroz', 'FuegoEterno',
            'ReyDeLaSombra', 'SeñorDelCaos', 'EmperorOfDeath', 'DuqueDeGuerra', 'CondeOscuro', 'BaronSangriento', 'CaballeroNegro', 'PaladinOscuro', 'MagoSombrío', 'BrujoMaldito',
            // Esports inspired
            'FaZe_Pro', 'TSM_Elite', 'OpTic_Beast', 'NRG_King', 'G2_Master', '100T_Legend', 'TL_God', 'C9_Ace', 'SK_Fury', 'VP_Storm',
            'NaVi_Sniper', 'Fnatic_Rush', 'Astralis_Cold', 'Liquid_Fire', 'EG_Shadow', 'Sentinels_Aim', 'Furia_Heat', 'LOUD_Boom', 'ENCE_Ice', 'MOUZ_Lightning',
            // Mysterious/Dark
            'VoidWalker', 'ShadowMerchant', 'DarkProphet', 'NightWhisper', 'MidnightSage', 'DuskBringer', 'TwilightHunter', 'EclipseRider', 'MoonShadow', 'StarlessSky',
            'AbyssLord', 'DepthsWatcher', 'ChaosAgent', 'EntropyMaster', 'OblivionKnight', 'EternalDarkness', 'InfiniteVoid', 'EndlessNight', 'PerpetualShadow', 'TimelessDread',
            // Achievement style
            'FirstBlood', 'DoubleKill', 'TripleKill', 'QuadraKill', 'PentaKill', 'Unstoppable', 'GodLike', 'Legendary', 'Rampage', 'Dominating',
            'VictoryRoyale', 'ChickenDinner', 'NumberOne', 'TopFragger', 'MVPKing', 'ClutchMaster', 'AcePlayer', 'CarryLord', 'SoloCarry', 'TeamMVP',
            // Numbers/Leet style
            'xXPr0Xx', 'L33tHax0r', 'N00bSlay3r', 'H4rdC0r3', 'Ub3rG0d', 'M4st3rCh13f', 'D34thL0rd', 'K1ngP1n', 'B0ssM4n', 'G4m3rK1ng',
            '420BlazeIt', '360NoScope', '1TapMachine', 'WallBang', 'PreFire', 'FlickShot', 'QuickScope', 'HardScope', 'NoScope', 'TrickShot'
        ],
        styles: {
            all: 'Todos los estilos',
            cool: 'Cool universal',
            mitologico: 'Mitológicos',
            militar: 'Militares',
            scifi: 'Ciencia ficción',
            espanol: 'En español',
            esports: 'Estilo Esports'
        }
    }
};

// Category metadata for UI
const CATEGORY_META = {
    perros: {
        title: 'Nombres para Perros',
        description: 'Encuentra el nombre perfecto para tu mejor amigo de cuatro patas',
        icon: '🐕',
        hasSex: true,
        hasStyle: true
    },
    gatos: {
        title: 'Nombres para Gatos',
        description: 'Nombres elegantes y misteriosos para tu felino',
        icon: '🐱',
        hasSex: true,
        hasStyle: true
    },
    bebes: {
        title: 'Nombres para Bebés',
        description: 'Nombres únicos y poco comunes para tu bebé',
        icon: '👶',
        hasSex: true,
        hasStyle: true
    },
    fortnite: {
        title: 'Nicks para Fortnite',
        description: 'Nicks épicos para dominar en la isla',
        icon: '🎮',
        hasSex: false,
        hasStyle: true
    },
    roblox: {
        title: 'Nicks para Roblox',
        description: 'Nombres creativos para el universo Roblox',
        icon: '🧱',
        hasSex: false,
        hasStyle: true
    },
    freefire: {
        title: 'Nicks para Free Fire',
        description: 'Nicks con estilo para Free Fire con símbolos especiales',
        icon: '🔥',
        hasSex: false,
        hasStyle: true
    },
    nicks: {
        title: 'Nicks Genéricos',
        description: 'Nicks versátiles para cualquier plataforma de gaming',
        icon: '🎯',
        hasSex: false,
        hasStyle: true
    }
};

// Export for use in app.js
window.NAMES_DB = NAMES_DB;
window.CATEGORY_META = CATEGORY_META;
