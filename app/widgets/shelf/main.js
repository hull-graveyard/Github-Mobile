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

  beforeRender: function(data) {
    data.githubAccount  = _.select(data.me.identities, function(i) { return i.provider == 'github'; })[0];
  },

  afterRender: function() {
    this.snapper = new Snap({
      element: document.getElementById('content')
    });
    $('.left-drawer').show();
  } 

});

