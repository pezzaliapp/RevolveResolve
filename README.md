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

7. Come posso trovare la media dei valori nella colonna A da A1 ad A10?

Formula:

=MEDIA(A1:A10)

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Modifica l’intervallo di celle (A1:A10) secondo le tue necessità.

8. Come posso calcolare la differenza percentuale tra le vendite di S1 e S2?

Formula:

=(S2 - S1) / S1

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Formatta la cella come percentuale andando su Home > Formato Percentuale.

9. Come posso filtrare i dati in base a criteri specifici?

Formula:

Non esiste una formula diretta, ma puoi utilizzare i Filtri avanzati di Excel.

Istruzioni:
	1.	Seleziona l’intervallo di dati.
	2.	Vai a Dati > Filtro.
	3.	Clicca sull’icona del filtro nella colonna desiderata e imposta i criteri.

10. Come posso ordinare i dati in ordine crescente nella colonna E?

Formula:

Non esiste una formula diretta, ma puoi utilizzare la funzione di Ordinamento di Excel.

Istruzioni:
	1.	Seleziona l’intervallo di dati da ordinare.
	2.	Vai a Dati > Ordina.
	3.	Scegli la colonna E e seleziona Ordine Crescente.
	4.	Clicca su OK.

11. Come posso calcolare il tasso di crescita percentuale tra due valori Y2 e Z2?

Formula:

=(Z2 - Y2) / Y2

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Vai a Home > Formato Percentuale.
	3.	Inserisci la formula nella cella, ad esempio in AA2.
	4.	Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
	5.	La cella mostrerà la differenza percentuale tra i valori di Y2 e Z2.

12. Come posso rimuovere gli spazi inutili dal testo nella cella U2?

Formula:

=ANNULLA.SPAZI(U2)

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
	3.	La cella mostrerà il testo senza spazi iniziali, finali e ridotti interni.

13. Come posso sommare i valori che soddisfano un criterio specifico nella colonna Q?

Formula:

=SOMMA.SE(Q:Q; "Prodotto A"; P:P)

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Modifica l’intervallo (Q:Q) e il criterio (“Prodotto A”) secondo le tue necessità.
	3.	Specifica l’intervallo da sommare (P:P).

14. Come posso sommare i valori che soddisfano più criteri nelle colonne Q e R?

Formula:

=SOMMA.PIÙ.SE(P:P; Q:Q; "Prodotto A"; R:R; ">10")

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Modifica gli intervalli (P:P, Q:Q, R:R) e i criteri (“Prodotto A”, “>10”) secondo le tue necessità.
	3.	La formula sommerà solo i valori nella colonna P che soddisfano entrambi i criteri.

15. Come posso calcolare il tasso di crescita percentuale tra due valori Y2 e Z2?

Formula:

=(Z2 - Y2) / Y2

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Vai a Home > Formato Percentuale.
	3.	Inserisci la formula nella cella, ad esempio in AA2.
	4.	Trascina la formula verso il basso per applicarla a tutte le righe necessarie.
	5.	La cella mostrerà la differenza percentuale tra i valori di Y2 e Z2.

16. Come posso sommare i valori che soddisfano più criteri nella colonna Q e R?

Formula:

=SOMMA.PIÙ.SE(P:P; Q:Q; "Prodotto A"; R:R; ">10")

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Modifica gli intervalli (P:P, Q:Q, R:R) e i criteri (“Prodotto A”, “>10”) secondo le tue necessità.
	3.	La formula sommerà solo i valori nella colonna P che soddisfano entrambi i criteri.

17. Come posso utilizzare la funzione CERCA.X (XLOOKUP) per cercare il valore “Luca” nella colonna L e restituire il suo indirizzo dalla colonna M?

Formula:

=CERCA.X("Luca"; L:L; M:M; "Non trovato")

Istruzioni:
	1.	Inserisci la formula nella cella desiderata.
	2.	Sostituisci “Luca” con il valore da cercare.
	3.	Modifica l’intervallo della tabella (L:L, M:M) e il valore da restituire (“Non trovato”) secondo le tue necessità.

18. Come posso filtrare i dati in Excel basandoti su più criteri?

Formula:

Non esiste una formula diretta, ma puoi utilizzare i Filtri Avanzati di Excel.

Istruzioni:
	1.	Vai a Dati > Avanzate.
	2.	Configura i criteri di filtro e l’intervallo di destinazione.
	3.	Specifica l’intervallo di dati da filtrare e l’intervallo dei criteri.
	4.	Clicca su OK per applicare il filtro avanzato.

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

Esempi di Aggiunta di Nuove Formule

1. Somma Condizionale Multipla

{
  id: 16,
  keywords: [
    "somma condizionale multipla", 
    "sommare con più criteri", 
    "sumifs", 
    "somme se", 
    "sum with condition",
    "sommare con criterio",
    "sumifs in excel"
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
}

2. Utilizzare la Funzione CERCA.X (XLOOKUP)

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
}

3. Filtrare Dati con Più Criteri

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

Suggerimenti per l’Espansione del Database
	1.	Analizza le Domande degli Utenti:
	•	Monitora le domande che gli utenti pongono all’app e aggiungi nuove formule basate su queste richieste.
	2.	Utilizza Risorse Online:
	•	Consulta forum come Stack Overflow, MrExcel, o Excel Easy per identificare le domande più frequenti.
	3.	Organizza le Formule per Categoria:
	•	Raggruppa le formule in categorie (es. Somma, Media, Ricerca, Condizionale) per facilitare l’espansione e la gestione del database.
	4.	Implementa il Fuzzy Matching:
	•	Fuse.js gestisce già il fuzzy matching, ma puoi regolare la soglia (threshold) nelle opzioni per bilanciare tra flessibilità e precisione.

Ottimizzazione della Funzione di Matching

Per aumentare le possibilità di trovare una corrispondenza, puoi continuare ad espandere manualmente le parole chiave o considerare l’uso di tecniche di Natural Language Processing (NLP) più avanzate.

Conclusioni

Con RevolveResolve, hai a disposizione uno strumento potente per gestire dati localmente e ottenere rapidamente formule Excel pertinenti alle tue esigenze. Grazie all’integrazione di Fuse.js per il fuzzy matching, l’app è in grado di comprendere meglio le tue domande, anche quando utilizzi forme singolari o plurali delle parole chiave.

Passi Successivi
	1.	Continua ad Espandere il Database
	•	Aggiungi ulteriori formule e domande frequenti seguendo lo schema mostrato.
	•	Assicurati di includere varie formulazioni e forme delle parole chiave per coprire una vasta gamma di possibili domande.
	2.	Ottimizza la Soglia di Fuse.js
	•	Se trovi che Fuse.js restituisce troppe o troppo poche corrispondenze, puoi regolare la threshold nelle opzioni di Fuse.js per bilanciare tra flessibilità e precisione.
	3.	Implementa Feedback degli Utenti
	•	Considera l’aggiunta di funzionalità per permettere agli utenti di segnalare risposte errate o suggerire nuove formule, migliorando ulteriormente l’accuratezza del database.
	4.	Esplora Librerie Avanzate di NLP
	•	Per una comprensione ancora più profonda delle domande degli utenti, potresti integrare librerie di Natural Language Processing (NLP) più avanzate o servizi esterni.

Se hai bisogno di ulteriori assistenza o di funzionalità aggiuntive, non esitare a chiedere! scrivimi pezzalialessandro@gmail.com

Buon sviluppo!
