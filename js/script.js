// !Milestone 2
//* Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.
// TODO:Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// TODO:Click sul contatto mostra la conversazione del contatto cliccato
//! EXTRA:
// Per chi avesse tempo e voglia di portarsi avanti, questa è la prossima milestone:
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
console.log("HERE",Vue);


Vue.config.devtools=true;



var app = new Vue({
    el: '#app',
    data: {
      data,
    }
  })