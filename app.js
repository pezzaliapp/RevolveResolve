/*******************************************************
 * Struttura dati in memoria
 *******************************************************/
let appData = {
  userInputs: []
};

/*******************************************************
 * Inizializzazione
 *******************************************************/
function initApp() {
  loadDataFromLocalStorage();
  updateDisplay();
}

// Carica da localStorage
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

// Salva su localStorage
function saveDataToLocalStorage() {
  localStorage.setItem('myAppData', JSON.stringify(appData));
}

/*******************************************************
 * Aggiunta e gestione dati
 *******************************************************/
function saveLocalData() {
  const input = document.getElementById('localDataInput');
  const value = input.value.trim();
  if (!value) return;

  appData.userInputs.push(value);

  saveDataToLocalStorage();
  updateDisplay();

  // Reset campo
  input.value = '';
}

// Mostra dati
function updateDisplay() {
  const display = document.getElementById('storedDataDisplay');
  display.textContent = JSON.stringify(appData, null, 2);
}

/*******************************************************
 * Esportazione e importazione dati (JSON)
 *******************************************************/
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
 * Avvio
 *******************************************************/
document.addEventListener('DOMContentLoaded', initApp);
