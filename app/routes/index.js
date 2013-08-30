var IndexRoute = Ember.Route.extend({
  model: function() {
    return ['Visit New Zealand', 'Relax', "Skip Australia"];
  }
});

export default IndexRoute;
