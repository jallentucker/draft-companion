App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
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
    return players;
  }
});
