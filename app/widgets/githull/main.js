/*global Hull:true */
Hull.widget("githull", {
  templates: ['githull'],
  refreshEvents: ['model.hull.me.change'],
  initialize: function() {
    // Hack to force credentials refresh...
    this.sandbox.on('hull.currentUser', function() {
      window.location.reload();
    });
  }
});

