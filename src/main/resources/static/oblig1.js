// Definerer en tom liste som skal inneholde informasjon om filmer
    const film=[];
// Funksjon for å slette all informasjon og tilbakestille skjemaet
    function slettBilett(){
        // Fjerner all informasjon om filmer og oppdaterer skjemaet
    film.length = 0;
    document.getElementById("film").innerHTML = "";
    document.getElementById("antall-error").innerHTML = "";
    document.getElementById("fornavn-error").innerHTML = "";
    document.getElementById("etternavn-error").innerHTML = "";
    document.getElementById("epost-error").innerHTML = "";
    document.getElementById("telefonnr-error").innerHTML = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("betaling").value="Velg film her";
}
// Funksjon for å kjøpe billett
    function KjopBilett(){
        // Henter verdien fra valgt film, antall billetter, fornavn, etternavn, telefonnummer og e-post
    const select = document.getElementById("betaling").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    //lager let valid for å sjekke om at input feltene skriver ut feilmelding
        //når det iikke er skrevet noe
    let valid = true;

        // Sjekker om antall billetter er fylt ut
    if (!antall) {
    document.getElementById("antall-error").innerHTML = "Må skrive noe inn i antall";
    valid = false;
} else if(antall<0){
    document.getElementById("antall-error").innerHTML="Skriv inn antall større enn null";
    valid = false;
}else {
    document.getElementById("antall-error").innerHTML = "";
}
        // Sjekker om fornavn er fylt ut
    if (!fornavn) {
    document.getElementById("fornavn-error").innerHTML = "Må skrive noe inn i fornavnet";
    valid = false;
} else {
    document.getElementById("fornavn-error").innerHTML = "";
}

        // Sjekker om etternavn er fylt ut
    if (!etternavn) {
    document.getElementById("etternavn-error").innerHTML = "Må skrive noe inn i etternavnet";
    valid = false;
} else {
    document.getElementById("etternavn-error").innerHTML = "";
}
// Sjekker om telefonnummer er fylt ut
    if (!telefonnr) {
    document.getElementById("telefonnr-error").innerHTML = "Må skrive noe inn i telefonnr";
    valid = false;
} else {
    document.getElementById("telefonnr-error").innerHTML = "";
}
        // Sjekker om e-post er fylt ut
    if (!epost) {
    document.getElementById("epost-error").innerHTML = "Må skrive noe inn i epost";
    valid = false;
} else {
    document.getElementById("epost-error").innerHTML = "";
}
    if (!valid) {
    return;
}
// oppretter et JavaScript-objekt med informasjon om en billettkjøper, der informasjonen er hentet fra skjemaet på nettsiden. Deretter legger den
// til dette objektet i en global array kalt film
    const person={
    select:select,
    antall:antall,
    fornavn:fornavn,
    etternavn:etternavn,
    telefonnr:telefonnr,
    epost:epost
};
    film.push(person)

//Lager en tabell som rkiver ut informasjoenen brukeren skirver inn
    let ut ="<table><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
    "<th>Telefonnr</th>" +
    "<th>Epost</th>" +
    "</tr>";
//oppretter en tabell med informasjon om alle billettene som er kjøpt, ved å iterere gjennom hvert element i film-listen og legge til en ny rad i tabellen for hvert element
    for(let fil of film) {
        ut += "<tr>";
        ut += "<td>" + fil.select + "</td><td>" + fil.antall + "</td><td>" + fil.fornavn + "</td><td>" + fil.etternavn + "</td><td>" + fil.telefonnr + "</td><td>" + fil.epost + "</td><td>" + "" + "</td>"
        ut += "</tr>";
    }
// Til slutt settes innholdet i ut inn i HTML-elementet med id-en film, som viser tabellen på nettsiden.
    document.getElementById("film").innerHTML=ut;
}




