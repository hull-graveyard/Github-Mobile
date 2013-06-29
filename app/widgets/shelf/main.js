Hull.widget("shelf", {
  templates: ['shelf'],

  events: {
    'click a' : function() {
      this.snapper.close();
    }
  },

  initialize: function() {
    this.sandbox.on('shelf.open', function() {
      this.snapper.open('left');
    }, this);

    this.sandbox.on('shelf.close', function() {
      this.snapper.close();
    }, this);

    this.sandbox.on('shelf.toggle', function() {
      if (this.snapper.state().state=="left" ){
        
        this.snapper.close();
      } else {
        
        this.snapper.open('left');
      }
    }, this);
  },

  afterRender: function() {
    this.snapper = new Snap({
      element: document.getElementById('content')
    });
    $('.left-drawer').show();
  } 

});

