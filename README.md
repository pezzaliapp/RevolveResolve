RevolveResolve

RevolveResolve è una Progressive Web App (PWA) progettata per assistere gli utenti nella gestione dei dati locali e nel fornire formule Excel accurate basate su domande in linguaggio naturale. Che tu stia organizzando dati, eseguendo calcoli o automatizzando attività in Excel, RevolveResolve offre una soluzione intuitiva ed efficiente su misura per le tue esigenze.

Sommario
	•	Caratteristiche
	•	Installazione
	•	Utilizzo
	•	Gestione Dati Locali
	•	Q&A Formule Excel
	•	Esempi di Q&A Excel
	•	Contribuire
	•	Licenza

Caratteristiche
	•	Gestione Dati Locali: Inserisci, salva, esporta e importa dati facilmente all’interno dell’app utilizzando il local storage del browser.
	•	Q&A Formule Excel: Poni domande in linguaggio naturale relative a formule Excel e ricevi formule accurate insieme a istruzioni passo-passo.
	•	Fuzzy Matching: Integrato con Fuse.js per riconoscere e gestire variazioni nelle query degli utenti, inclusi forme singolari e plurali.
	•	Accesso Offline: Essendo una PWA, RevolveResolve può essere installata sul tuo dispositivo e utilizzata anche senza connessione internet.
	•	Esportazione e Importazione Dati: Esporta i tuoi dati in un file JSON o importa dati da un file JSON per una facile condivisione e backup.
	•	Interfaccia Utente Intuitiva: UI pulita e intuitiva per un’interazione senza problemi.

Installazione
	1.	Clona il Repository

git clone https://github.com/tuo-username/RevolveResolve.git


	2.	Naviga nella Directory del Progetto

cd RevolveResolve


	3.	Servi l’App Localmente
Poiché le PWA richiedono un server web, puoi utilizzare un server semplice come Live Server per VS Code o usare il server integrato di Python.
	•	Usando Python 3

python -m http.server 8000


	•	Usando Node.js (serve)

npm install -g serve
serve


	4.	Accedi all’App
Apri il tuo browser e vai a http://localhost:8000.
	5.	Installa la PWA
Nel tuo browser, clicca sul pulsante di installazione (solitamente presente nella barra degli indirizzi) per aggiungere RevolveResolve al tuo dispositivo per l’accesso offline.

Utilizzo

Gestione Dati Locali
	1.	Inserisci Dati
	•	Naviga nella sezione “Gestione Dati Locali”.
	•	Inserisci del testo nel campo di input e clicca su “Salva nei dati locali” per memorizzare i dati.
	2.	Visualizza Dati Memorizzati
	•	I dati memorizzati vengono visualizzati nella sezione “Dati memorizzati”.
	3.	Esporta Dati
	•	Clicca su “Esporta Dati (JSON)” per scaricare i tuoi dati come file JSON.
	4.	Importa Dati
	•	Seleziona un file JSON utilizzando l’input file e clicca su “Importa Dati (JSON)” per caricare i dati nell’app.

Q&A Formule Excel
	1.	Poni una Domanda
	•	Naviga nella sezione “Trova la Formula Excel”.
	•	Inserisci la tua domanda relativa a Excel in linguaggio naturale (es. “Ho due colonne A e B, devo trovare quali dati mancano tra le due colonne.”).
	2.	Ricevi la Formula
	•	Clicca su “Trova Formula” per ricevere la formula Excel corrispondente insieme a istruzioni dettagliate.

Esempi di Q&A Excel

Di seguito è riportata una lista di domande comuni che gli utenti potrebbero porre, insieme alle formule Excel fornite da RevolveResolve.

1. Ho due colonne la A e la B, devo trovare quali dati mancano tra le due colonne.

Formula:

=SE(CONTA.SE($B:$B; A2)=0; "Non presente in B"; "Presente in B")

Istruzioni:
	1.	Inserisci la formula nella cella C2.
	2.	Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
	3.	La colonna C mostrerà “Non presente in B” per i valori della colonna A che non sono presenti nella colonna B.

Nota: Assicurati che i riferimenti delle colonne siano corretti e adattali se necessario.

2. Come posso sommare i valori nelle celle da A1 ad A10?

Formula:

=SOMMA(A1:A10)

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Modifica l’intervallo di celle (A1:A10) secondo le tue necessità.

3. Come posso calcolare la media dei valori nelle celle da B1 a B10?

Formula:

=MEDIA(B1:B10)

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Modifica l’intervallo di celle (B1:B10) secondo le tue necessità.

4. Come posso contare quante celle nella colonna C contengono il valore “Sì”?

Formula:

=CONTA.SE(C:C; "Sì")

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Modifica l’intervallo (C:C) e il criterio (“Sì”) secondo le tue necessità.

5. Come posso trovare il valore più alto nelle celle da D1 a D20?

Formula:

=MAX(D1:D20)

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Modifica l’intervallo di celle (D1:D20) secondo le tue necessità.

6. Come posso cercare il nome “Mario” nella colonna F e restituire il suo punteggio dalla colonna G?

Formula:

=CERCA.VERT("Mario"; F:G; 2; FALSO)

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Sostituisci “Mario” con il valore da cercare.
	3.	Modifica l’intervallo della tabella (F:G) e l’indice della colonna (2) secondo le tue necessità.

7. Come posso etichettare le vendite superiori a 1000 come “Alto” e le altre come “Basso”?

Formula:

=SE(H2 > 1000; "Alto"; "Basso")

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
	3.	La colonna mostrerà “Alto” o “Basso” in base ai criteri impostati.

8. Come posso rimuovere gli spazi inutili dal testo nella cella U2?

Formula:

=ANNULLA.SPAZI(U2)

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
	3.	La cella mostrerà il testo senza spazi iniziali, finali e ridotti interni.

9. Come posso calcolare la differenza percentuale tra le vendite di S1 e S2?

Formula:

=(S2 - S1) / S1

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Formatta la cella come percentuale andando su Home > Formato Percentuale.

10. Come posso utilizzare la funzione CERCA.X (XLOOKUP) per cercare il valore “Luca” nella colonna L e restituire il suo indirizzo dalla colonna M?

Formula:

=CERCA.X("Luca"; L:L; M:M; "Non trovato")

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Sostituisci “Luca” con il valore da cercare.
	3.	Modifica l’intervallo della tabella (L:L, M:M) e il valore da restituire (“Non trovato”) secondo le tue necessità.

Contribuire

Se desideri contribuire al progetto, segui questi passaggi:
	1.	Fork del Repository
Clicca sul pulsante “Fork” in alto a destra nella pagina del repository per creare una copia del progetto nel tuo account GitHub.
	2.	Clona il Repository

git clone https://github.com/tuo-username/RevolveResolve.git


	3.	Crea un Nuovo Branch

git checkout -b feature-nome-feature


	4.	Apporta le Tue Modifiche
Apporta le modifiche desiderate ai file del progetto.
	5.	Commit delle Tue Modifiche

git commit -m "Aggiungi nuova formula per calcolare il tasso di crescita"


	6.	Push sul Branch

git push origin feature-nome-feature


	7.	Apri una Pull Request
Vai al repository originale e apri una Pull Request per richiedere l’integrazione delle tue modifiche.

Licenza

Questo progetto è concesso in licenza sotto la MIT License.

Espansione del Database delle Formule Excel

Per migliorare ulteriormente la capacità della tua app di rispondere alle domande degli utenti, puoi espandere il database delle formule Excel aggiungendo ulteriori oggetti all’array excelFormulasDB nel file app.js. Ogni oggetto dovrebbe seguire questa struttura:

{
  id: <numero_univoco>,
  keywords: [
    "parola chiave 1",
    "parola chiave 2",
    "parola chiave 3",
    // ...altre parole chiave
  ],
  answer: `
La tua formula e le istruzioni dettagliate.
`
},

Esempio di Aggiunta di una Nuova Formula

Supponiamo di voler aggiungere una formula per calcolare il tasso di crescita percentuale. Ecco come puoi farlo:

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
}

Aggiunta di Più Formule

Puoi continuare ad aggiungere ulteriori formule seguendo lo stesso schema. Ecco un altro esempio per rimuovere gli spazi extra da una cella:

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
}

Ottimizzazione della Funzione di Matching

Per aumentare le possibilità di trovare una corrispondenza, puoi continuare ad espandere manualmente le parole chiave o considerare l’uso di tecniche di Natural Language Processing (NLP) più avanzate.

Conclusioni

Con RevolveResolve, hai a disposizione uno strumento potente per gestire dati localmente e ottenere rapidamente formule Excel pertinenti alle tue esigenze. Grazie all’integrazione di Fuse.js per il fuzzy matching, l’app è in grado di comprendere meglio le tue domande, anche quando utilizzi forme singolari o plurali delle parole chiave.

Passi Successivi
	1.	Implementa il Codice Aggiornato: Assicurati che il tuo file app.js includa Fuse.js e le configurazioni necessarie per il fuzzy matching.
	2.	Espandi il Database delle Formule: Aggiungi ulteriori domande e formule per coprire una gamma più ampia di esigenze degli utenti.
	3.	Testa e Ottimizza: Testa l’app con diverse formulazioni delle domande per assicurarti che le corrispondenze funzionino come previsto.
	4.	Implementa Feedback degli Utenti: Considera l’aggiunta di funzionalità per permettere agli utenti di segnalare risposte errate o suggerire nuove formule.
	5.	Esplora Librerie Avanzate di NLP: Per una comprensione ancora più profonda delle domande degli utenti, potresti integrare librerie di Natural Language Processing (NLP) più avanzate o servizi esterni.

Se hai bisogno di ulteriori assistenza o di funzionalità aggiuntive, non esitare a chiedere!

Buon sviluppo!
