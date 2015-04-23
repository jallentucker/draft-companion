var _ = require('lodash');

App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    // fs.readFile('adp.txt', { encoding: 'utf8' }, function(err, adpData) {
    //   var adpPlayerStrings = adpData.split('\r\n');
    //   // var players = adpPlayerStrings.map(function(adpPlayerString) {
    //   //   var adpPlayerArray = adpPlayerString.split('\t');
    //   //   var adpPlayerName = adpPlayerArray[1].split(',')[0].trim();
    //   //   var adpPlayerObject = {
    //   //     name: adpPlayerName,
    //   //     adp: parseFloat(adpPlayerArray[3])
    //   //   };
    //   //   return adpPlayerObject;
    //   // });
    //   var players = [
    //     {
    //       name: "Mike Trout",
    //       adp: 1.2
    //     }, {
    //       name: "Clayton Kershaw",
    //       adp: 3.4
    //     }, {
    //       name: "Paul Goldschmidt",
    //       adp: 5.6
    //     }, {
    //       name: "Miguel Cabrera",
    //       adp: 8
    //     }
    //   ];
    //   return players;
    // });
    var players = [
      {
        name: "Mike Trout",
        adp: 1.2
      }, {
        name: "Clayton Kershaw",
        adp: 3.4
      }, {
        name: "Paul Goldschmidt",
        adp: 5.6
      }, {
        name: "Miguel Cabrera",
        adp: 8
      }
    ];
    return _.rest(players);
  }
});
