// !Milestone 2
//* Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.
//* Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
//* Click sul contatto mostra la conversazione del contatto cliccato
//! EXTRA:
// !Milestone 3:
//* Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra,
//*   come messaggio verde
//* Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
//!Milestone 4 (PER DOMANI)
//*Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono
//*   visualizzati solo i contatti il cui nome contiene le 
//*   lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono
//*    solo Marco e Martina)
//!Milestone 5( BONUS OPZIONALE)
//Cancella messaggio: cliccando sul messaggio appare un menu a tendina 
//  che permette di cancellare il messaggio selezionato.
//*Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista
//*   dei contatti



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
    //input search 
    //? devo inserire vuoto ('')
    search: '',
  },
  methods: {
    //metodo per settare poi il contatto al click sul profilo (user-contact)
    setCurrentContact(position) {
      this.currentContact = position;
    },
    //filter Last Received Message by pos
    getLastSeen(pos) {
      const msg = this.data.contacts[pos].messages;
      const receivedMsg = msg.filter((message) => message.status === 'received');
      const lastMessages = receivedMsg[receivedMsg.length - 1];

      return lastMessages.date;
    },
    getRandomNumber(max) {
      return Math.floor(Math.random() * (max));
    },
    //crea un nuovo messaggio
    newMessage() {

      //controllo stringa vuota 
      //? modificatori: v-model.trim() 
      if (!this.currentText) return;
      //creo un oggetto messaggio
      this.addMessage(this.currentText, 'sent');

      //pulisco il currentText
      this.currentText = '';

      setTimeout(() => {
        //creo array di risoposte
        const strResponses = ['Ciao👋🏻', 'Ok,arrivo subito', 'Yep', 'Lol🤣', 'Scusa,👀 ..ora non posso', 'sono in riunione', 'Nope'];
        const len = strResponses.length - 1;
        //creo un messaggio di risposta
        this.addMessage(strResponses[this.getRandomNumber(len)], 'received');

      }, this.seconds);

    },
    addMessage(text, status) {
      const msg = {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        status,
        message: text,
      }

      this.data.contacts[this.currentContact].messages.push(msg);
    }
  },
  //! methods vs. computed
  // computed: serve a modificare la vista di dati già esistenti.
  // methods: modificare direttamente i dati
  // cit. vus.js doc site /computed-properties
  computed: {
    //filtro per nome dei contatti e visibilità 
    filterByNameContact() {
      return this.data.contacts.filter((contact) => {
        console.log(contact.visible);
       
        return (contact.name.toLowerCase().includes(this.search.toLowerCase())&& contact.visible);
      }
      );
    }
  }
})