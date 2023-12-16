let catBreedDict = [
    { name: "Abyssinian", file: "Abyssinian.jpeg", description: "An active, playful breed known for its striking, ticked coat." },
    { name: "American Bobtail", file: "AmericanBobtail.jpeg", description: "Features a short, bobbed tail and a playful, friendly temperament." },
    { name: "American Curl", file: "AmericanCurl.jpeg", description: "Noted for unique, curled-back ears and an affectionate nature." },
    { name: "American Shorthair", file: "AmericanShorthair.jpeg", description: "A versatile breed known for its robust health and calm demeanor." },
    { name: "American Wirehair", file: "AmericanWirehair.jpeg", description: "Characterized by its curly coat and friendly, playful nature." },
    { name: "Australian Mist", file: "AustralianMist.jpeg", description: "A breed from Australia, known for its spotted coat and gentle temperament." },
    { name: "Balinese", file: "Balinese.jpeg", description: "A long-haired, Siamese-like breed, known for its vocal nature and silky coat." },
    { name: "Birman", file: "Birman.jpeg", description: "Features a color-point coat and striking blue eyes, with a gentle, friendly nature." },
    { name: "Bombay", file: "Bombay.jpeg", description: "Known for its sleek, black coat and copper eyes, resembling a mini panther." },
    { name: "British Longhair", file: "BritishLonghair.jpeg", description: "A long-haired version of the British Shorthair, calm and easy-going." },
    { name: "British Shorthair", file: "BritishShorthair.jpeg", description: "Famous for its dense, plush coat and easy-going nature." },
    { name: "Burmese", file: "Burmese.jpeg", description: "A friendly, affectionate breed with a glossy, short coat." },
    { name: "Burmilla", file: "Burmilla.webp", description: "Known for its shimmering coat and playful, affectionate personality." },
    { name: "Chartreux", file: "Chartreux.jpeg", description: "A French breed known for its blue-gray coat and quiet, sweet nature." },
    { name: "Chausie", file: "Chausie.jpeg", description: "A hybrid breed resembling wild cats, known for its athleticism and intelligence." },
    { name: "Colorpoint Shorthair", file: "ColorpointShorthair.jpeg", description: "Resembles a Siamese but comes in various point colors and patterns." },
    { name: "Cornish Rex", file: "CornishRex.jpeg", description: "Notable for its curly coat and playful, acrobatic nature." },
    { name: "Devon Rex", file: "DevonRex.jpeg", description: "Features a soft, curly coat and large, expressive eyes; known for being mischievous." },
    { name: "Egyptian Mau", file: "EgyptianMau.jpeg", description: "A spotted breed known for its striking green eyes and ancient lineage." },
    { name: "Exotic Shorthair", file: "ExoticShorthair.jpeg", description: "Resembles a Persian but with a short, plush coat; affectionate and calm." },
    { name: "Havana Brown", file: "HavanaBrown.jpeg", description: "Known for its rich, chocolate brown coat and affectionate nature." },
    { name: "Himalayan", file: "Himalayan.jpeg", description: "A long-haired breed with color-point markings and blue eyes; similar to Persians." },
    { name: "Japanese Bobtail", file: "JapaneseBobtail.jpeg", description: "Features a distinctive 'pom-pom' tail and a playful, intelligent personality." },
    { name: "Javanese", file: "Javanese.jpeg", description: "A variant of the Siamese with a medium-length, silky coat and a vocal nature." },
    { name: "Khao Manee", file: "KhaoManee.jpeg", description: "A rare breed from Thailand, often with striking white fur and odd-colored eyes." },
    { name: "Korat", file: "Korat.jpeg", description: "A silver-blue coated breed from Thailand, known for its heart-shaped face and gentle nature." },
    { name: "LaPerm", file: "LaPerm.jpeg", description: "Distinct for its curly coat, coming in various colors and patterns; affectionate and playful." },
    { name: "Lykoi", file: "Lykoi.jpeg", description: "A unique breed with a wolf-like appearance, known for its partial hairlessness and friendly demeanor." },
    { name: "Maine Coon", file: "MaineCoon.webp", description: "One of the largest domesticated breeds, known for its long fur, tufted ears, and friendly nature." },
    { name: "Manx", file: "Manx.jpeg", description: "Famous for its taillessness or short tail, and a round, robust body." },
    { name: "Munchkin", file: "Munchkin.jpeg", description: "Known for its short legs, resulting from a genetic mutation; playful and outgoing." },
    { name: "Norwegian Forest", file: "NorwegianForest.jpeg", description: "A large, robust breed with a thick, water-resistant coat, adapted for cold climates." },
    { name: "Ocicat", file: "Ocicat.jpeg", description: "Resembles a wild 'ocelot' but has no wild DNA; spotted coat, strong and athletic." },
    { name: "Oriental Shorthair", file: "OrientalShorthair.jpeg", description: "A breed with a sleek body, large ears, and a wide variety of coat colors and patterns." },
    { name: "Persian", file: "Persian.jpeg", description: "Known for its long, luxurious coat and distinctive flat face; calm and dignified." },
    { name: "Ragamuffin", file: "Ragamuffin.webp", description: "Similar to the Ragdoll, with a plush, rabbit-like coat and a sweet, docile nature." },
    { name: "Ragdoll", file: "Ragdoll.jpeg", description: "Known for going limp when held, with a striking pointed coat and blue eyes." },
    { name: "Russian Blue", file: "RussianBlue.jpeg", description: "Features a short, dense, blue-gray coat and green eyes; known for its gentle and shy nature." },
    { name: "Scottish Fold", file: "ScottishFold.jpeg", description: "Notable for its unique folded ears; round face and a sweet, calm temperament." },
    { name: "Selkirk Rex", file: "SelkirkRex.jpeg", description: "Characterized by its curly coat and rounded features; affectionate and patient." },
    { name: "Siamese", file: "Siamese.jpeg", description: "Famous for its striking blue eyes, pointed coat, and vocal personality." },
    { name: "Siberian", file: "Siberian.webp", description: "A large, hardy breed with a long, thick coat, adapted to cold climates; affectionate and playful." },
    { name: "Singapura", file: "Singapura.jpeg", description: "One of the smallest breeds, known for its large eyes, sepia-toned coat, and active nature." },
    { name: "Snowshoe", file: "Snowshoe.webp", description: "A striking breed with a white and dark coat, often with blue eyes; friendly and sociable." },
    { name: "Sokoke", file: "Sokoke.jpeg", description: "A rare breed from Kenya, known for its slender build and tabby-like coat." },
    { name: "Somali", file: "Somali.jpeg", description: "A long-haired version of the Abyssinian, known for its bushy tail and playful nature." },
    { name: "Sphynx", file: "Sphynx.webp", description: "Famous for its lack of fur, known for its wrinkled skin and affectionate, energetic nature." },
    { name: "Tonkinese", file: "Tonkinese.jpeg", description: "A cross between Siamese and Burmese, known for its pointed coat and playful nature." },
    { name: "Toyger", file: "Toyger.jpeg", description: "Designed to resemble a tiger, with a striped coat; friendly and outgoing." },
    { name: "Turkish Angora", file: "TurkishAngora.jpeg", description: "Known for its silky, white coat and elegant, graceful demeanor." },
    { name: "Turkish Van", file: "TurkishVan.webp", description: "Famous for its love of swimming, with a distinctive coat pattern and robust build." }
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generate () {
    //clear
    const figure = document.querySelector("figure");
    while (figure.firstChild) {
        figure.removeChild(figure.firstChild);
    }
    document.querySelector("h2").textContent = ""
    document.querySelector("figcaption").textContent = "" 

    //new
    n = getRandomInt(0, catBreedDict.length)
    var img = document.createElement('img');
    img.src = "assets/media/" + catBreedDict[n].file
    img.alt = `image of a ${catBreedDict[n].name}`
    document.querySelector("figure").appendChild(img);

    document.querySelector("h2").textContent = "Who's that cat?!"

    document.querySelector("figure").addEventListener('click', function() {
        document.querySelector("h2").textContent = catBreedDict[n].name
        document.querySelector("figcaption").textContent = catBreedDict[n].description
    })
}

generate()




