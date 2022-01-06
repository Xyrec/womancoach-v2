// Burger-menu kode //
// Sætter constants, så de er nemmere at kalde på senere
const burgerbtn = document.getElementById("navburger");
const burgermenu = document.getElementById("burgermenu");

// Declare "burgermenuOpen" til at være false
let burgermenuOpen = false;

// Hvis der trykkes på "burgerbtn" (constant vi satte tidligere)
burgerbtn.addEventListener("click", function (event) {
  event.preventDefault(); // Ignorer den event der normalt vil ske, og i stedet...

  if (!burgermenuOpen) {
    // Hvis burgermenu er lukket
    burgerbtn.classList.add("open"); // Tilføj en class "open" til elementet navburger
    burgermenuOpen = true; // Sæt burgermenuOpen til true (åben)
  } else {
    // Hvis burgermenu er åben
    burgerbtn.classList.remove("open"); // Fjern class "open"
    burgermenuOpen = false; // Sæt burgermenuOpen til false (lukket)
  }
  if (burgermenu.style.display === "block") {
    // Når der trykkes på knappen, tjek om menuen er åben
    burgermenu.style.display = "none"; // Lukker menuen hvis den er åben
  } else {
    // Hvis menuen er lukket
    burgermenu.style.display = "block"; // Åbner menuen hvis den er lukket
  }
});

// Kode til booking og kvitteringsside //
// Sætter constants op, så vi kan referere til specifikke ID'er hurtigere
const booking = document.getElementById("booking");
const bookingDate = document.getElementById("bookingDate");
const bookingTime = document.getElementById("bookingTime");
const bookingName = document.getElementById("bookingName");
const bookingEmail = document.getElementById("bookingEmail");
const bookingTele = document.getElementById("bookingTele");
const bookingComment = document.getElementById("bookingComment");
const kvittering = document.getElementById("kvittering");

// Hvis et element med ID booking eksisterer, så
if (booking) {
  booking.addEventListener("submit", function (event) {
    // Hvis form modtager "submit" signal
    event.preventDefault(); // Ignorer den event der normalt vil ske, og i stedet...

    // Sender brugeren videre til kvitteringssiden med indtastede informationer i URL
    window.location.href = `kvittering.html?dato=${bookingDate.value}&tid=${bookingTime.value}&navn=${bookingName.value}&email=${bookingEmail.value}&telefon=${bookingTele.value}&kommentar=${bookingComment.value}`;
  });
}

// Hvis et element med ID kvittering eksisterer, så
if (kvittering) {
  const urlData = new URLSearchParams(window.location.search); // Henter alle data fra URL

  // Indsætter alle indtastede informationer i de rette felter på kvitteringssiden
  bookingDate.insertAdjacentText("beforeend", urlData.get("dato"));
  bookingTime.insertAdjacentText("beforeend", urlData.get("tid"));
  bookingName.insertAdjacentText("beforeend", urlData.get("navn"));
  bookingEmail.insertAdjacentText("beforeend", urlData.get("email"));
  bookingTele.insertAdjacentText("beforeend", urlData.get("telefon"));
  bookingComment.insertAdjacentText("beforeend", urlData.get("kommentar"));

  // Deklarerer userData som at være et tomt array
  let userData = [];
  let entries = urlData.entries(); // .entries laver data fra URL om til et array

  let result = {}; // Et "Destructing Assignment" så vi kan manipulere data
  for (let entry of entries) { // For hver værdi i "entries"
    result[entry[0]] = entry[1]; // Gemmer hver entry værdi i "result"
  }

  userData = JSON.stringify(result); // Gemmer det nye array i userData i JSON-format
  console.log(userData); // Logger i console, så vi kan se output

  // VIGTIGT!!!
  // Normalt ville disse informationer blive gemt i en database som Stine kan tilgå,
  // men da vi ikke har haft undervisning om databaser endnu,
  // kan vi ikke fortroligt gemme brugernes informationer.
  // Vi kunne gemme data til en JSON-fil, men den kan tilgås af folk ude fra,
  // og det kræver at hjemmeside host understøtter at man kan skrive filer på den måde.
  // Den nuværende løsning gemmer kun informationerne midlertidigt i et JSON-type array.
}

// Kode til de 3-hover boxe på Hvem er jeg? og Kontakt siden //
// Sætter constants, så de er nemmere at kalde på senere
const knapHosMig = document.getElementById("hosmig");
const knapWalkandTalk = document.getElementById("walkandtalk");
const knapOnline = document.getElementById("online");
const knapAmbition = document.getElementById("ambition");
const knapStyrker = document.getElementById("styrker");
const knapMotivation = document.getElementById("motivation");
const boxClose = document.getElementById("boxClose");
const boxTitle = document.getElementById("boxTitle");
const boxText = document.getElementById("boxText");
const boxContainer = document.getElementById("boxContainer");

// Tjek om knapperne på Kontakt siden eksisterer
if (knapHosMig && knapWalkandTalk && knapOnline) {
  knapHosMig.addEventListener("click", function () {
    vindueTekst("hosmig"); // Kalder funktionen vindueTekst med hvilken box der er trykket på
  });
  knapWalkandTalk.addEventListener("click", function () {
    vindueTekst("walkandtalk"); // Kalder funktionen vindueTekst med hvilken box der er trykket på
  });
  knapOnline.addEventListener("click", function () {
    vindueTekst("online"); // Kalder funktionen vindueTekst med hvilken box der er trykket på
  });
}

// Tjek som knapperne på Hvem er jeg? siden eksisterer
if (knapAmbition && knapStyrker && knapMotivation) {
  knapAmbition.addEventListener("click", function () {
    vindueTekst("ambition"); // Kalder funktionen vindueTekst med hvilken box der er trykket på
  });
  knapStyrker.addEventListener("click", function () {
    vindueTekst("styrker"); // Kalder funktionen vindueTekst med hvilken box der er trykket på
  });
  knapMotivation.addEventListener("click", function () {
    vindueTekst("motivation"); // Kalder funktionen vindueTekst med hvilken box der er trykket på
  });
}

function vindueTekst(boxvalg) {
  // Deklarerer og "nulstiller" overskrift og tekst, så vi kan sætte tekst i dem senere
  let overskrift = "";
  let tekst = "";

  switch (
    boxvalg // Switch-case der tjekker hvilken tekst der er sendt i funktion parametret
  ) {
    // Hver case indsætter relevant tekst ind i "overskrift" og "tekst" fra før
    case "hosmig":
      overskrift = "HOS MIG";
      tekst =
        "Her besøger du mit samtalerum, som er beliggende på egen adresse. Her forsikrer jeg dig om det mest hyggelige terapirum, hvor der er masser af hjerterum, åbenhed og plads, trods størrelsen af det, til at det kan rumme alle dine følelser og fortællinger.";
      break; // Break, gør at man hopper ud af switch, når en tilsvarende "case" er fundet
    case "walkandtalk":
      overskrift = "WALK AND TALK";
      tekst =
        "Jeg tilbyder walk & talk. Her kan vi bl.a. gå en tur i naturen langs Holbæk fjord, eller gå en tur i skoven. Her lytter jeg til dig og din historie samtidig med, at jeg stiller dig spørgsmål. Naturens smukke åbne plads kan have sin indflydelse på dig, når du søger efter balance og frihed. Her kan du komme mere i kontakt med dig selv og dine kreative tanker, da der er højt til loftet i naturen. Du vil under walk & talk opleve, at du, når du er i bevægelse, slipper og løsner den fastspændthed, du følelsesmæssigt er i.";
      break;
    case "online":
      overskrift = "ONLINE";
      tekst =
        "En fleksibilitet hos mig er online samtaler. Det fungerer perfekt til dig, der ikke kan få logistikken til at hænge sammen, eller for dig, der har brug for at spare tid i en travl hverdag. Derfor er alle velkomne hos mig, og jeg får det til at fungere, lige meget om du bor i Holbæk eller omegn, eller om du bor længere væk. Opstår der sygdom, så fungerer onlinesamtaler, hvis du stadig, trods sygdom, har brug for at snakke med mig. Jeg er vant til onlineterapi og coaching, så hos mig er du i trygge hænder. Der er et sikkert onlinerum til rådighed, hvor vi kan mødes via et link, jeg sender til dig. Alt skal være komfortabelt for dig, og det sikrer jeg, at det er.";
      break;
    case "ambition":
      overskrift = "MIN AMBITION";
      tekst =
        "Min ambition er at hjælpe jer kvinder med at erobre sig selv tilbage og det liv, i drømmer. I skal hos mig opnå at kunne forkæle jer selv, og lærer at sætte jer selv først, uden at i tilsidesætter andre nær jer. I skal hos mig kunne opnå friheden til at være jer selv, og samtidig opleve at være i balance med jeres egne grænser og andres behov og forventninger til jer.";
      break;
    case "styrker":
      overskrift = "MINE STYRKER";
      tekst =
        "Jeg kan med min erfaring og viljestyrke komme helt derind, hvor sandheden findes. Der hvor dine drømme og udtalte ønsker og behov ligger. Jeg ved hvor nøglerne er til de døre, du har brug for at låse op, ligger. Sammen kan vi lirke dem op, helt stille og roligt i dit eget tempo. Jeg vil være ved din side hele vejen. Både nysgerrig, kærlig, ærlig og støttende. Udover det, vil jeg også puffe til dig, for det trænger du til. Dog er det kærlige puf, der får dig videre i den rigtige retning.";
      break;
    case "motivation":
      overskrift = "MIN MOTIVATION";
      tekst =
        "Min motivation ligger i, at jeg selv ved, hvor befriende, skønt og lækkert det er at finde vejen hjem til sig selv igen. Jeg har selv taget vejene hjem. Den vil jeg gerne vise dig. Grundet min egen erfaring, står jeg stærkere i livet, end jeg nogensinde har gjort før. Jeg ønsker at flere kvinder, som dig, skal stå stærk i dem selv, så de kan leve det liv, de drømmer om.";
      break;
    default:
      break;
  }

  // Indsætter title og tekst i den nye kasse
  boxText.innerText = tekst;
  boxTitle.innerText = overskrift;

  // Viser pop-up kassen
  boxContainer.style.display = "block";
}

// Hvis et element med ID boxClose eksisterer, så
if (boxClose) {
  // Hvis der trykkes på boxClose (luk knappen)
  boxClose.addEventListener("click", function (event) {
    event.preventDefault(); // Ignorer den event der normalt vil ske, og i stedet...

    // Skjuler (lukker) pop-up kassen
    boxContainer.style.display = "none";
  });
}

// Tjek om JavaScript loader (besked dukker ikke op hvis der er sket en fejl!)
console.log("Javascript loader korrekt");