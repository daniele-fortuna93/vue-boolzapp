var app = new Vue(
  {
    el: '#root',
    data: {
      contacts: [
          {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              access: '15:30',
              messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent',
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di dargli da mangiare',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              access: '11:30',
              messages: [{
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent'
              },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              access: '14:30',
              messages: [{
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received'
              },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Luisa',
              avatar: '_4',
              visible: true,
              access: '13:30',
              messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Mattia',
              avatar: '_5',
              visible: true,
              access: '130:30',
              messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Oggi che cosa fai dopo lavoro?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ancora non lo so',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Tu sei libero?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Potremmo vederci per le 16:00, che ne pensi?',
                      status: 'sent'
                  }
              ],
          },
      ],
      messageBoxIndex: 0,
      dataOra: dayjs().format('DD/MM/YYYY HH:mm:ss'),
      inputMessage: ''
    },
    methods: {
      getIndex: function (index) { // Funzione per prendere l'indice dei contatti
        let x = index;
        this.messageBoxIndex = x;
        return x;
      },
      sendMessage: function () { // Funzione per inviare messaggi e per ricevere una risposta dopo 1 secondo
        let y = this.messageBoxIndex;
        let message = this.inputMessage;
        let status = 'sent';
        let date = this.dataOra;
        let messagesArray = this.contacts;
        messagesArray[y].messages.push({message, date, status});
        this.inputMessage = '';
        setTimeout(replace, 1000);
          function replace() {
            let stringheReplace = ['Ok', 'Vediamo', 'Davvero?', 'Magari', ':)'];
            let message = stringheReplace[Math.floor(Math.random()*stringheReplace.length)];
            let status = 'received';
            messagesArray[y].messages.push({message, date, status});
        }

      },
      lastMessage: function(array){
        let lastIndex = array.length - 1;
        return lastIndex;
      }
    }
  }
);
