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
              read: true,
              showDeleteChatBox: false,
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
              read: false,
              showDeleteChatBox: false,
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
              read: false,
              showDeleteChatBox: false,
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
              read: false,
              showDeleteChatBox: false,
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
              access: '13:30',
              read: false,
              showDeleteChatBox: false,
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
      contactsSearch:[],
      contactsArchivied: [],
      messageBoxIndex: 0,
      dataOra: dayjs().format('DD/MM/YYYY HH:mm:ss'),
      inputMessage: '',
      inputSearch: '',
      emoticons: [
        '😀','😆','😁','😅','🤣','😂','🙂','😉','😉','😊','😇','🥰','😍','🤩','😘','😗','🍋','🍌','🍍','🥭','🍎','🍏','🍄','🧅','🥯','🍔','🥓','🍟','🍺','🍷','🍸','🥃','🍫','🍬',
        '🏂','⛹️','🏋️','🚴','🤸','🤼','🏌️'
      ],
      clickEmoticon: false,
      chatArchivied: true
    },
    methods: {
      getIndex: function (index) { // Funzione per prendere l'indice dei contatti
        let x = index;
        this.messageBoxIndex = x;
        this.contacts[x].read = true;
        return x;
      },
      sendMessage: function () { // Funzione per inviare messaggi e per ricevere una risposta dopo 1 secondo
        let y = this.messageBoxIndex;
        let stringheReplace = this.emoticons;
        let message = this.inputMessage;
        let status = 'sent';
        let date = this.dataOra;
        let messagesArray = this.contacts;
        messagesArray[y].messages.push({message, date, status});
        setTimeout(replace, 1000);
          function replace() {

            if ( message == 'ciao') {
              message = 'ciao :)';
            } else {
              message = stringheReplace[Math.floor(Math.random()*stringheReplace.length)];
            }
            let status = 'received';
            messagesArray[y].messages.push({message, date, status});
            messagesArray[y].read = false;
        }
        this.inputMessage = '';

      },
      lastMessage: function(array){
        let lastIndex = array.length - 1;
        return lastIndex;
      },
      searchContact: function () {
        let nomeCercato = this.inputSearch;
        nomeCercato = nomeCercato[0].toUpperCase() + nomeCercato.substring(1);
        let contatti = this.contacts;
        let contactSearch = this.contactsSearch;
        this.messageBoxIndex = 0;
        if ( nomeCercato != '') {

          for (var i = 0; i < contatti.length; i++) {
            if ((new RegExp(nomeCercato)).test(contatti[i].name)) {
              if (!contactSearch.includes(contatti[i]))
              contactSearch.push(contatti[i]);
            }
          }
        }
      },
      deleteSearchContacts: function () {
        if ( this.inputSearch == '') {
          this.contactsSearch = [];
        }
      },
      showEmoticon: function() {
        this.clickEmoticon == true ? this.clickEmoticon = false : this.clickEmoticon = true;
      },
      addEmoticon: function(emoticon){
        this.inputMessage += emoticon;
      },
      changeDeleteChatBox: function(index){
        console.log(this.contacts[index]);
        console.log(this.contactsSearch[index]);
        let contacts = this.contacts;
        let contactsSearch = this.contactsSearch;
        for (let i = 0; i < contacts.length; i++) {
          if ( i == index ) continue;
          contacts[i].showDeleteChatBox = false;
        }

        if ( contactsSearch.length > 0) {
          contactsSearch[index].showDeleteChatBox == true ? contactsSearch[index].showDeleteChatBox = false : contactsSearch[index].showDeleteChatBox = true;
        }
        contacts[index].showDeleteChatBox == true ? contacts[index].showDeleteChatBox = false : contacts[index].showDeleteChatBox = true;
      },
      deleteChat: function(index){
        let contacts = this.contacts;
        contacts[index].messages = [];
        for (let i = 0; i < contacts.length; i++) {
          contacts[i].showDeleteChatBox = false;
        }
      }
    }
  }
);
