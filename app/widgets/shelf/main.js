Hull.widget("shelf", {
  templates: ['shelf'],
  initialize: function() {
    _.map(['open', 'close', 'toggle'], function(action) {
      this.sandbox.on('shelf.' + action, _.bind(this[action], this));
    }.bind(this));
  },

  open: function() {
    document.body.classList.add('shelf-open');
  },

  close: function() {
    document.body.classList.remove('shelf-open');
  },

  toggle: function() {
    if(document.body.classList.contains('shelf-open')) {
      this.close();
    } else {
      this.open();
    }
  }

});

