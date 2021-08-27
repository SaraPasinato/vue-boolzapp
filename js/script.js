// !Milestone 2
//* Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.
//* Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
//* Click sul contatto mostra la conversazione del contatto cliccato
//! EXTRA:
// !Milestone 3:
//* Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra,
//*   come messaggio verde
//* Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
console.log("HERE", Vue);


Vue.config.devtools = true;



var app = new Vue({
  el: '#app',
  data: {
    data,
    //tiene traccia della posizione corrente in array contacts
    currentContact: 0,
    //tiene traccia del testo in input
    currentText: "",

    //secondi di risposta
    seconds: 1000,
  },
  methods: {
    //metodo per settare poi il contatto al click sul profilo (user-contact)
    setCurrentContact(position) {
      this.currentContact = position;
      return this.currentContact;
    },
    //crea un nuovo messaggio
    newMessage() {
      //creo un oggetto messaggio
      const msg = {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        message: this.currentText,
        status: 'sent',
      };
      //inserisco il messaggio in coda ai messaggi del current contact
      this.data.contacts[this.currentContact].messages.push(msg);
      //pulisco il currentText
      this.currentText = '';

      setTimeout(() => {
        //creo un messaggio di risposta
        const msgAuto = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          message: 'ok!',
          status: 'received',
        };
        //inserisco il messggio automatico
        this.data.contacts[this.currentContact].messages.push(msgAuto);

      }, this.seconds);
    },
  }
})