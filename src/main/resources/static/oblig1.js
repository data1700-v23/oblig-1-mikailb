
    const film=[];

    function slettBilett(){
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
    function KjopBilett(){
    const select = document.getElementById("betaling").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    let valid = true;

    if (!antall) {
    document.getElementById("antall-error").innerHTML = "Må skrive noe inn i antall";
    valid = false;
} else if(antall<0){
    document.getElementById("antall-error").innerHTML="Skriv inn antall større enn null";
    valid = false;
}else {
    document.getElementById("antall-error").innerHTML = "";
}

    if (!fornavn) {
    document.getElementById("fornavn-error").innerHTML = "Må skrive noe inn i fornavnet";
    valid = false;
} else {
    document.getElementById("fornavn-error").innerHTML = "";
}

    if (!etternavn) {
    document.getElementById("etternavn-error").innerHTML = "Må skrive noe inn i etternavnet";
    valid = false;
} else {
    document.getElementById("etternavn-error").innerHTML = "";
}

    if (!telefonnr) {
    document.getElementById("telefonnr-error").innerHTML = "Må skrive noe inn i telefonnr";
    valid = false;
} else {
    document.getElementById("telefonnr-error").innerHTML = "";
}

    if (!epost) {
    document.getElementById("epost-error").innerHTML = "Må skrive noe inn i epost";
    valid = false;
} else {
    document.getElementById("epost-error").innerHTML = "";
}
    if (!valid) {
    return;
}

    const person={
    select:select,
    antall:antall,
    fornavn:fornavn,
    etternavn:etternavn,
    telefonnr:telefonnr,
    epost:epost
};
    film.push(person)


    let ut ="<table><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
    "<th>Telefonnr</th>" +
    "<th>Epost</th>" +
    "</tr>";

    for(let fil of film){
    ut+="<tr>";
    ut+="<td>"+fil.select+"</td><td>"+fil.antall+"</td><td>"+fil.fornavn+"</td><td>"+fil.etternavn+"</td><td>"+fil.telefonnr+"</td><td>"+fil.epost+"</td><td>"+""+"</td>"
    ut+="</tr>";
}
    document.getElementById("film").innerHTML=ut;
}




