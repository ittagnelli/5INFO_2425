addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add')
    const sumBotton = document.getElementById('functions')
    const average = document.getElementById('avarage')

    function GetTabel() {
        var tabella = document.getElementById("paghe") 
        return tabella
    }

    function GetDipartimento() {
        var dipartimento_value = document.getElementById('dipartimento')    
        return dipartimento_value.value
    }

    function GetMese() {
        var mese = document.getElementById('mese')
        return mese.value
    }

    function GetImporto() {
        var importo = document.getElementById('importo')
        return importo.value
    }

    function GetNome() {
        var nome = document.getElementById('nome')
        return nome.value
    }

    function GetCognome() {
        var cognome = document.getElementById('cognome')
        return cognome.value
    }

    sumBotton.addEventListener('click', function sumFunction(){
        const tbody = document.querySelector("#paghe tbody");
        const importi =  tbody.querySelectorAll("tr td.importo2")
        const somma_tot = tbody.querySelector("tr td.importo")
        let somma = 0
        importi.forEach( td => {
            const valore = parseInt(td.textContent.replace('€',''))
            if (!isNaN(valore)) {
                somma += valore
            }


        });

        somma_tot.textContent = somma.toString().concat(" €")
    })

    average.addEventListener('click', function avrFunctionm(){
        const tbody = document.querySelector("#paghe tbody");
        const importi =  tbody.querySelectorAll("tr td.importo2")
        const somma_tot = tbody.querySelectorAll("tr td.importo")
        const avr = tbody.querySelectorAll("tr td.importo")
        const avr_final = avr[avr.length - 1]
        let somma = 0
        let counter = 0
        let average = 0
        importi.forEach( td => {
            const valore = parseInt(td.textContent.replace('€',''))
            if (!isNaN(valore)) {
                somma += valore
                average = somma/counter
                counter++
            }


        });
        avr_final.textContent = average.toString().match(/^-?\d+(?:\.\d{0,2})?/);
    })
    
    
    addButton.addEventListener('click', function addFunction() {
        if (!(GetCognome()) || !(GetNome()) || !(GetImporto()) || !(GetDipartimento()) || !(GetMese())) {
            console.log("Compila tutti i campi");
        } else {
            const tbody = document.querySelector("#paghe tbody");
            const spaziatore = tbody.querySelector("tr:has(td[colspan])");
            const nuovaLinea = document.createElement('tr');
            nuovaLinea.innerHTML = `
                <td>${GetDipartimento()}</td>
                <td>${GetCognome()}</td>
                <td>${GetNome()}</td>
                <td>${GetMese()}</td>
                <td class="importo2">${GetImporto()} &euro;</td>
            `;
            if (spaziatore) {
                tbody.insertBefore(nuovaLinea, spaziatore);
            } else {
                console.error("Separatore null");
            }
        }
    });
});