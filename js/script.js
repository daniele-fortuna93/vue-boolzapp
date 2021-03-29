var app = new Vue(
  {
    el: '#root',
    data: {
      contacts: [
          {
              name: 'Michele',
              avatar: 'img/avatar_1.jpg',
              visible: true,
              messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
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
              avatar: 'img/avatar_2.jpg',
              visible: true,
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
              avatar: 'img/avatar_3.jpg',
              visible: true,
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
              avatar: 'img/avatar_4.jpg',
              visible: true,
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
      ],
      messageBoxIndex: 0,
      dataOra: dayjs().format('DD/MM/YYYY HH:mm:ss'),
      inputMessage: '',
      imgList:[
        'img/avatar_1.jpg',
        'img/avatar_2.jpg',
        'img/avatar_3.jpg',
        'img/avatar_4.jpg',
        'img/avatar_5.jpg',
        'img/avatar_6.jpg',
        'img/avatar_7.jpg',
        'img/avatar_8.jpg',
      ]
    },
    methods: {
      getIndex: function (index) { // Funzione per prendere l'indice dei contatti
        let x = index;
        console.log(x);
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
            let message = 'Ok';
            let status = 'received';
            let date = this.dataOra;
            messagesArray[y].messages.push({message, date, status});
        }

      }
    }
  }
);
