/*******************************************************
 * Struttura dati in memoria
 *******************************************************/
let appData = {
  userInputs: [] // Array per salvare i dati inseriti dall'utente
};

/*******************************************************
 * Inizializzazione
 *******************************************************/
function initApp() {
  loadDataFromLocalStorage();
  updateDisplay();
}

/*******************************************************
 * Funzioni di Gestione Dati Locali
 *******************************************************/

// Carica i dati da localStorage
function loadDataFromLocalStorage() {
  const savedDataString = localStorage.getItem('myAppData');
  if (savedDataString) {
    try {
      const parsedData = JSON.parse(savedDataString);
      appData = parsedData;
    } catch (error) {
      console.error("Errore nel parsing dei dati da localStorage:", error);
    }
  }
}

// Salva i dati su localStorage
function saveDataToLocalStorage() {
  localStorage.setItem('myAppData', JSON.stringify(appData));
}

// Aggiunge nuovi dati
function saveLocalData() {
  const input = document.getElementById('localDataInput');
  const value = input.value.trim();
  if (!value) {
    alert("Per favore, inserisci un testo valido.");
    return;
  }

  appData.userInputs.push(value);
  saveDataToLocalStorage();
  updateDisplay();

  // Svuota il campo di input
  input.value = '';
}

// Aggiorna la visualizzazione dei dati
function updateDisplay() {
  const display = document.getElementById('storedDataDisplay');
  display.textContent = JSON.stringify(appData, null, 2);
}

// Esporta i dati in un file JSON
function exportDataToFile() {
  const dataStr = JSON.stringify(appData, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'myAppData.json';
  link.click();

  URL.revokeObjectURL(url);
}

// Importa i dati da un file JSON
function importDataFromFile() {
  const fileInput = document.getElementById('importFile');
  if (!fileInput.files.length) {
    alert("Nessun file selezionato per l'import.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      if (importedData.userInputs && Array.isArray(importedData.userInputs)) {
        appData.userInputs = appData.userInputs.concat(importedData.userInputs);
      }
      saveDataToLocalStorage();
      updateDisplay();
      alert("Dati importati con successo!");
    } catch (error) {
      alert("Errore durante l'import: " + error);
    }
  };

  reader.readAsText(file);
}

/*******************************************************
 * Q&A Excel - Logica per trovare la formula corretta
 *******************************************************/

// "Database" di domande-chiave e formule Excel
const excelFormulasDB = [
  {
    id: 1,
    keywords: [
      "due colonne", 
      "mancano", 
      "colonne a e b",
      "colonne la a e la b",
      "dati mancanti", 
      "dati assenti",
      "dati non presenti",
      "trovare quali dati sono presenti in a ma non in b",
      "trovare quali dati mancano tra le due colonne",
      "trovare quali dati non sono presenti"
    ],
    answer: `
Per trovare i valori di A che non sono presenti in B, puoi usare:

\`\`\`excel
=SE(CONTA.SE($B:$B; A2)=0; "Non presente in B"; "Presente in B")
\`\`\`

oppure, in inglese:

\`\`\`excel
=IF(COUNTIF($B:$B, A2)=0, "Not in B", "Found in B")
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella C2.
2. Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
3. La colonna C mostrerà "Non presente in B" per i valori della colonna A che non sono presenti nella colonna B.

**Nota:** Assicurati che i riferimenti delle colonne siano corretti e adattali se necessario.
  `
  },
  {
    id: 2,
    keywords: [
      "come sommare", 
      "somma", 
      "somma un intervallo di celle",
      "sommare celle",
      "calcolare somma",
      "sommare a1:a10",
      "sommare valori",
      "sum",
      "sommare valori in excel"
    ],
    answer: `
Per sommare un intervallo di celle, puoi usare:

\`\`\`excel
=SOMMA(A1:A10)
\`\`\`

oppure in inglese:

\`\`\`excel
=SUM(A1:A10)
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella desiderata.
2. Modifica l'intervallo di celle (A1:A10) secondo le tue necessità.
    `
  },
  {
    id: 3,
    keywords: [
      "media", 
      "calcolare media", 
      "media aritmetica", 
      "calcolare average", 
      "media valori",
      "average",
      "calcolare la media"
    ],
    answer: `
Per calcolare la media aritmetica di un intervallo di celle, puoi usare:

\`\`\`excel
=MEDIA(B1:B10)
\`\`\`

oppure in inglese:

\`\`\`excel
=AVERAGE(B1:B10)
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella desiderata.
2. Modifica l'intervallo di celle (B1:B10) secondo le tue necessità.
    `
  },
  {
    id: 4,
    keywords: [
      "come contare", 
      "contare celle", 
      "conta.se", 
      "conta celle con criterio",
      "countif",
      "contare valori specifici"
    ],
    answer: `
Per contare il numero di celle che soddisfano un criterio specifico, puoi usare:

\`\`\`excel
=CONTA.SE(C:C; "Sì")
\`\`\`

oppure in inglese:

\`\`\`excel
=COUNTIF(C:C, "Yes")
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella desiderata.
2. Modifica l'intervallo (C:C) e il criterio ("Sì") secondo le tue necessità.
    `
  },
  {
    id: 5,
    keywords: [
      "valore massimo", 
      "trova massimo", 
      "max", 
      "valore più alto",
      "trova il valore maggiore"
    ],
    answer: `
Per trovare il valore più alto in un intervallo di celle, puoi usare:

\`\`\`excel
=MAX(D1:D20)
\`\`\`

oppure in inglese:

\`\`\`excel
=MAX(D1:D20)
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella desiderata.
2. Modifica l'intervallo di celle (D1:D20) secondo le tue necessità.
    `
  },
  {
    id: 6,
    keywords: [
      "cercare un valore", 
      "cerca.vert", 
      "vlookup", 
      "cerca.vert",
      "cerca.x",
      "xlookup",
      "cerca nella tabella",
      "trova valore corrispondente"
    ],
    answer: `
Per cercare un valore in una tabella e restituire un risultato corrispondente, puoi usare:

\`\`\`excel
=CERCA.VERT("Mario"; F:G; 2; FALSO)
\`\`\`

oppure, in inglese:

\`\`\`excel
=VLOOKUP("Mario", F:G, 2, FALSE)
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella desiderata.
2. Sostituisci "Mario" con il valore da cercare.
3. Modifica l'intervallo della tabella (F:G) e l'indice della colonna (2) secondo le tue necessità.
    `
  },
  {
    id: 7,
    keywords: [
      "trovare media", 
      "calcolare average", 
      "media aritmetica", 
      "media valori", 
      "average",
      "calcolare la media"
    ],
    answer: `
Per calcolare la media aritmetica di un intervallo di celle, puoi usare:

\`\`\`excel
=MEDIA(A1:A10)
\`\`\`

oppure in inglese:

\`\`\`excel
=AVERAGE(A1:A10)
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella desiderata.
2. Modifica l'intervallo di celle (A1:A10) secondo le tue necessità.
    `
  },
  {
    id: 8,
    keywords: [
      "differenza percentuale", 
      "calcolare differenza percentuale", 
      "percentuale di crescita", 
      "differenza percentuale tra due colonne",
      "percentuale tra y e z"
    ],
    answer: `
Per calcolare la differenza percentuale tra due colonne Y e Z, puoi usare:

\`\`\`excel
=(Z2 - Y2) / Y2
\`\`\`

**Per visualizzare come percentuale:**
1. Inserisci la formula nella cella desiderata.
2. Vai a **Home** > **Formato Percentuale**.

**Istruzioni:**
1. Inserisci la formula nella cella, ad esempio in AA2.
2. Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
3. La cella mostrerà la differenza percentuale tra i valori di Y2 e Z2.
    `
  },
  {
    id: 9,
    keywords: [
      "filtrare dati", 
      "filtro avanzato", 
      "filtrare celle",
      "filter data",
      "filtrare valori in excel"
    ],
    answer: `
Per filtrare i dati in Excel basandoti su determinati criteri, puoi usare i **Filtri** o la **Formattazione Condizionale**.

**Usare Filtri:**
1. Seleziona l'intervallo di dati.
2. Vai a **Dati** > **Filtro**.
3. Clicca sull'icona del filtro nella colonna desiderata e imposta i criteri.

**Usare Filtraggio Avanzato:**
1. Vai a **Dati** > **Avanzate**.
2. Configura i criteri di filtro e l'intervallo di destinazione.

**Istruzioni:**
- Utilizza i filtri per visualizzare solo le righe che soddisfano i tuoi criteri specifici, facilitando l'analisi dei dati.
    `
  },
  {
    id: 10,
    keywords: [
      "ordinare dati", 
      "ordinare colonne", 
      "sort data", 
      "ordinare valori in excel",
      "sort columns"
    ],
    answer: `
Per ordinare i dati in Excel, puoi usare la funzione di **Ordinamento**.

**Ordinare in Ordine Crescente o Decrescente:**
1. Seleziona l'intervallo di dati da ordinare.
2. Vai a **Dati** > **Ordina**.
3. Scegli la colonna per l'ordinamento e seleziona **Ordine Crescente** o **Decrescente**.
4. Clicca su **OK**.

**Istruzioni:**
1. Seleziona l'intervallo di celle che desideri ordinare.
2. Decidi se ordinare in base a una o più colonne.
3. Scegli il tipo di ordinamento (crescente o decrescente) e applicalo.
    `
  },
  {
    id: 11,
    keywords: [
      "tasso di crescita", 
      "crescita percentuale", 
      "calcolare crescita", 
      "percentuale di crescita", 
      "growth rate",
      "percentuale crescita",
      "calcolare differenza percentuale"
    ],
    answer: `
Per calcolare il tasso di crescita percentuale tra due valori, puoi usare:

\`\`\`excel
=(Z2 - Y2) / Y2
\`\`\`

**Per visualizzare come percentuale:**
1. Inserisci la formula nella cella desiderata.
2. Vai a **Home** > **Formato Percentuale**.

**Istruzioni:**
1. Inserisci la formula nella cella, ad esempio in AA2.
2. Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
3. La cella mostrerà la differenza percentuale tra i valori di Y2 e Z2.
    `
  },
  {
    id: 12,
    keywords: [
      "rimuovere spazi", 
      "eliminare spazi", 
      "trim", 
      "ANNULLA.SPAZI", 
      "remove extra spaces",
      "remove spaces in excel",
      "clean text"
    ],
    answer: `
Per rimuovere gli spazi extra dal testo in una cella, puoi usare:

\`\`\`excel
=ANNULLA.SPAZI(U2)
\`\`\`

oppure in inglese:

\`\`\`excel
=TRIM(U2)
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella desiderata.
2. Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
3. La cella mostrerà il testo senza spazi iniziali, finali e ridotti interni.
    `
  },
  {
    id: 13,
    keywords: [
      "somma condizionale", 
      "sommare se", 
      "sumif", 
      "somme se", 
      "sum with condition",
      "sommare con criterio",
      "sumif in excel"
    ],
    answer: `
Per sommare i valori che soddisfano un criterio specifico, puoi usare:

\`\`\`excel
=SOMMA.SE(Q:Q; "Prodotto A"; P:P)
\`\`\`

oppure in inglese:

\`\`\`excel
=SUMIF(Q:Q, "Product A", P:P)
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella desiderata.
2. Modifica l'intervallo (Q:Q) e il criterio ("Prodotto A") secondo le tue necessità.
3. Specifica l'intervallo da sommare (P:P).
    `
  },
  {
    id: 14,
    keywords: [
      "somma condizionale multipla", 
      "sommare con più criteri", 
      "sumifs", 
      "somme avec plusieurs critères", 
      "sum with multiple conditions",
      "sommare con criteri multipli",
      "sumifs in excel"
    ],
    answer: `
Per sommare i valori che soddisfano più criteri, puoi usare:

\`\`\`excel
=SOMMA.SE(Q:Q; "Prodotto A"; P:P)
=SOMMA.PIÙ.SE(P:P; Q:Q; "Prodotto A"; R:R; ">10")
\`\`\`

oppure in inglese:

\`\`\`excel
=SUMIF(Q:Q, "Product A", P:P)
=SUMIFS(P:P, Q:Q, "Product A", R:R, ">10")
\`\`\`

**Istruzioni:**
1. Inserisci la prima formula nella cella desiderata.
2. Inserisci la seconda formula nella cella desiderata.
3. Modifica gli intervalli e i criteri secondo le tue necessità.
4. La seconda formula permette di aggiungere ulteriori condizioni (ad esempio, sommare solo se nella colonna R il valore è maggiore di 10).
    `
  },
  {
    id: 15,
    keywords: [
      "tasso di crescita", 
      "crescita percentuale", 
      "calcolare crescita", 
      "percentuale di crescita", 
      "growth rate",
      "percentuale crescita",
      "calcolare differenza percentuale"
    ],
    answer: `
Per calcolare il tasso di crescita percentuale tra due valori, puoi usare:

\`\`\`excel
=(Z2 - Y2) / Y2
\`\`\`

**Per visualizzare come percentuale:**
1. Inserisci la formula nella cella desiderata.
2. Vai a **Home** > **Formato Percentuale**.

**Istruzioni:**
1. Inserisci la formula nella cella, ad esempio in AA2.
2. Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
3. La cella mostrerà la differenza percentuale tra i valori di Y2 e Z2.
    `
  },
  {
    id: 16,
    keywords: [
      "somma condizionale multipla", 
      "sommare con più criteri", 
      "sumifs", 
      "somme avec plusieurs critères", 
      "sum with multiple conditions",
      "sommare con criteri multipli",
      "sumifs in excel"
    ],
    answer: `
Per sommare i valori che soddisfano più criteri, puoi usare:

\`\`\`excel
=SOMMA.SE(Q:Q; "Prodotto A"; P:P)
=SOMMA.PIÙ.SE(P:P; Q:Q; "Prodotto A"; R:R; ">10")
\`\`\`

oppure in inglese:

\`\`\`excel
=SUMIF(Q:Q, "Product A", P:P)
=SUMIFS(P:P, Q:Q, "Product A", R:R, ">10")
\`\`\`

**Istruzioni:**
1. Inserisci la prima formula nella cella desiderata.
2. Inserisci la seconda formula nella cella desiderata.
3. Modifica gli intervalli e i criteri secondo le tue necessità.
4. La seconda formula permette di aggiungere ulteriori condizioni (ad esempio, sommare solo se nella colonna R il valore è maggiore di 10).
    `
  },
  {
    id: 17,
    keywords: [
      "cerca.x", 
      "xlookup", 
      "funzione cercax", 
      "xlookup in excel",
      "cerca x lookup",
      "xlookup formula",
      "funzione xlookup"
    ],
    answer: `
Per utilizzare la funzione CERCA.X (XLOOKUP) per cercare un valore e restituire un risultato corrispondente, puoi usare:

\`\`\`excel
=CERCA.X("Luca"; L:L; M:M; "Non trovato")
\`\`\`

oppure in inglese:

\`\`\`excel
=XLOOKUP("Luca", L:L, M:M, "Not found")
\`\`\`

**Istruzioni:**
1. Inserisci la formula nella cella desiderata.
2. Sostituisci "Luca" con il valore da cercare.
3. Modifica l'intervallo della tabella (L:L, M:M) e il valore da restituire ("Non trovato") secondo le tue necessità.
    `
  },
  {
    id: 18,
    keywords: [
      "filtrare dati multipli", 
      "filtra con più criteri", 
      "advanced filter", 
      "filtraggio avanzato",
      "filter data multiple conditions",
      "filtrare dati con criteri multipli",
      "excel advanced filter"
    ],
    answer: `
Per filtrare i dati in Excel basandoti su più criteri, puoi usare i **Filtri Avanzati**.

**Filtraggio Avanzato:**
1. Vai a **Dati** > **Avanzate**.
2. Configura i criteri di filtro e l'intervallo di destinazione.
3. Specifica l'intervallo di dati da filtrare e l'intervallo dei criteri.
4. Clicca su **OK** per applicare il filtro avanzato.

**Istruzioni:**
1. Prepara un intervallo di criteri separato che definisce le condizioni multiple.
2. Seleziona l'intervallo di dati che desideri filtrare.
3. Utilizza il filtro avanzato per applicare le condizioni specificate.
    `
  }
  // Aggiungi ulteriori oggetti per ciascuna delle domande sopra elencate
];

/*******************************************************
 * Configurazione di Fuse.js
 *******************************************************/
const fuseOptions = {
  includeScore: true,
  threshold: 0.4, // Imposta la soglia di tolleranza per le corrispondenze
  keys: ['keywords']
};

const fuse = new Fuse(excelFormulasDB, fuseOptions);

/**
 * Funzione principale che legge la domanda e cerca la miglior corrispondenza usando Fuse.js
 */
function findExcelFormula() {
  const questionInput = document.getElementById("excelQuestion");
  const question = questionInput.value.trim().toLowerCase();

  if (!question) {
    displayExcelAnswer("Inserisci una domanda valida.");
    return;
  }

  const searchResults = fuse.search(question);

  if (searchResults.length > 0) {
    const bestMatch = searchResults[0].item;
    displayExcelAnswer(bestMatch.answer);
  } else {
    displayExcelAnswer("Nessuna formula trovata per la tua domanda.");
  }
}

/**
 * Funzione di utilità per mostrare il risultato
 */
function displayExcelAnswer(msg) {
  const answerDiv = document.getElementById("excelAnswer");
  answerDiv.innerHTML = msg;
}

/*******************************************************
 * Avvio dell'app
 *******************************************************/
document.addEventListener('DOMContentLoaded', initApp);
