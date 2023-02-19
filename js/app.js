var app = new Vue({
  el: '#app',
  data () {
    return {
      invitados:"",
      pases:0,
      individual:0
    }
  },
  methods: {
    getInfoInvitados: function () {
      var hash = window.location.hash;
      var items = hash.split("/");
      if(items[1]){
        this.pases = parseInt(items[1]);
      }
      if(items[2]){
        this.individual = parseInt(items[2]);
      }
      if(items[3]){
        this.invitados = items[3].replaceAll("-"," ");
      }
    },
  },
  mounted () {
    this.getInfoInvitados();

  },

});