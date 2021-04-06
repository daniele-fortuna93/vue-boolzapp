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
                  showDeleteMessage: false,
                  status: 'sent',
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di dargli da mangiare',
                      showDeleteMessage: false,
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      showDeleteMessage: false,
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
                  showDeleteMessage: false,
                  message: 'Ciao come stai?',
                  status: 'sent'
              },
                  {
                      date: '20/03/2020 16:30:55',
                      showDeleteMessage: false,
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      showDeleteMessage: false,
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
                  showDeleteMessage: false,
                  message: 'La Marianna va in campagna',
                  status: 'received'
              },
                  {
                      date: '28/03/2020 10:20:10',
                      showDeleteMessage: false,
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      showDeleteMessage: false,
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
                  showDeleteMessage: false,
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      showDeleteMessage: false,
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
                  showDeleteMessage: false,
                  message: 'Oggi che cosa fai dopo lavoro?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      showDeleteMessage: false,
                      message: 'Ancora non lo so',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      showDeleteMessage: false,
                      message: 'Tu sei libero?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      showDeleteMessage: false,
                      message: 'Si',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      showDeleteMessage: false,
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
        let showDeleteMessage = false;
        let contactsSearch = this.contactsSearch;
        if ( contactsSearch.length == 0 ) {
          messagesArray[y].messages.push({message, date, status, showDeleteMessage});
          setTimeout(function replace() {

            if ( message == 'ciao') {
              message = 'ciao :)';
            } else {
              message = stringheReplace[Math.floor(Math.random()*stringheReplace.length)];
            }
            let status = 'received';
            messagesArray[y].messages.push({message, date, status, showDeleteMessage});
            messagesArray[y].read = false;
          },1000);

        } else {
          contactsSearch[y].messages.push({message, date, status, showDeleteMessage});
          setTimeout(function replace() {

            if ( message == 'ciao') {
              message = 'ciao :)';
            } else {
              message = stringheReplace[Math.floor(Math.random()*stringheReplace.length)];
            }
            let status = 'received';
            contactsSearch[y].messages.push({message, date, status, showDeleteMessage});
            contactsSearch[y].read = false;
          },1000);
        }
        this.inputMessage = '';
      },
      lastMessage: function(array){
        let lastIndex = array.length - 1;
        return lastIndex;
      },
      searchContact: function () {
        let nomeCercato = this.inputSearch;
        let contatti = this.contacts;
        let contactsSearch = this.contactsSearch;
        this.messageBoxIndex = 0;
        if ( nomeCercato != '') {
          for (var i = 0; i < contatti.length; i++) {
            if ((new RegExp(nomeCercato.toLowerCase())).test(contatti[i].name.toLowerCase())) {
              if (!contactsSearch.includes(contatti[i]))
              contactsSearch.push(contatti[i]);
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
        let contacts = this.contacts;
        let contactsSearch = this.contactsSearch;
        if ( contactsSearch.length > 0) {
          for (let i = 0; i < contactsSearch.length; i++) {
            if ( i == index ) continue;
            contactsSearch[i].showDeleteChatBox = false;
          }
          contactsSearch[index].showDeleteChatBox == true ? contactsSearch[index].showDeleteChatBox = false : contactsSearch[index].showDeleteChatBox = true;
        } else {
          for (let i = 0; i < contacts.length; i++) {
            if ( i == index ) continue;
            contacts[i].showDeleteChatBox = false;
          }
          contacts[index].showDeleteChatBox == true ? contacts[index].showDeleteChatBox = false : contacts[index].showDeleteChatBox = true;
        }

      },
      deleteChat: function(index){
        let contacts = this.contacts;
        let contactsSearch = this.contactsSearch;
        if ( contactsSearch.length == 0) {
          contacts[index].messages = [];
          for (let i = 0; i < contacts.length; i++) {
            contacts[i].showDeleteChatBox = false;
          }
        } else {
          contactsSearch[index].messages = [];
          for (let i = 0; i < contactsSearch.length; i++) {
            contactsSearch[i].showDeleteChatBox = false;
          }
        }


      },
      changeDeleteMessage: function(mex,index,array){

        for (var i = 0; i < array.length; i++) {
          if ( i == index) continue;
          array[i].showDeleteMessage = false;
        }
        mex.showDeleteMessage == true ? mex.showDeleteMessage = false : mex.showDeleteMessage = true;
      },
      deleteMessage: function(mex,index,array) {
        array.splice(index,1)
      }
    }
  }
);
