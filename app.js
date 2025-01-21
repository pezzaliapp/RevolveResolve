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
    keywords: [
      "due colonne", 
      "mancano", 
      "colonne a e b",
      "dati mancanti", 
      "dati assenti",
      "dati non presenti",
      "trovare quali dati sono presenti in a ma non in b"
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
    keywords: ["sommare", "sum", "somma", "totale", "totale somma"],
    answer: `
Per sommare un intervallo di celle, puoi usare:

\`\`\`excel
=SOMMA(A1:A10)
\`\`\`

oppure in inglese:

\`\`\`excel
=SUM(A1:A10)
\`\`\`
    `
  },
  {
    keywords: ["concatenare", "unire", "due celle", "concat", "unisci testo"],
    answer: `
Per concatenare i valori di due celle, puoi usare:

\`\`\`excel
=A2 & " " & B2
\`\`\`

oppure:

\`\`\`excel
=STRINGA.UNISCI(" ", VERO, A2, B2)
\`\`\`

In inglese:

\`\`\`excel
=CONCATENATE(A2, " ", B2)
\`\`\`

oppure:

\`\`\`excel
=TEXTJOIN(" ", TRUE, A2, B2)
\`\`\`
    `
  },
  {
    keywords: ["media", "average", "media aritmetica"],
    answer: `
Per calcolare la media aritmetica di un intervallo di celle, puoi usare:

\`\`\`excel
=MEDIA(A1:A10)
\`\`\`

oppure in inglese:

\`\`\`excel
=AVERAGE(A1:A10)
\`\`\`
    `
  },
  // Aggiungi altri oggetti con "keywords" e "answer" qui
];

/**
 * Funzione principale che legge la domanda e cerca la miglior corrispondenza
 */
function findExcelFormula() {
  const questionInput = document.getElementById("excelQuestion");
  const question = questionInput.value.toLowerCase();

  if (!question.trim()) {
    displayExcelAnswer("Inserisci una domanda valida.");
    return;
  }

  let bestMatch = null;
  let maxMatchedKeywords = 0;

  // Trova la formula con il maggior numero di keyword corrispondenti
  excelFormulasDB.forEach(entry => {
    let matchedKeywords = 0;
    entry.keywords.forEach(keyword => {
      if (question.includes(keyword)) {
        matchedKeywords += 1;
      }
    });

    if (matchedKeywords > maxMatchedKeywords) {
      bestMatch = entry;
      maxMatchedKeywords = matchedKeywords;
    }
  });

  if (bestMatch && maxMatchedKeywords > 0) {
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
