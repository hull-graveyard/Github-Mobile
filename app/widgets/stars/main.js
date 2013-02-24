Hull.widget('stars', {

  templates: ['stars'],

  datasources: {
    starred: function() {
      return this.api('github/users/' + this.options.login + '/starred');
    }
  },

  actions: {
    unstar: function(source, event, data) {
      this.starAction('unstar', source, data.repo);
    },
    star: function(source, event, data) {
      this.starAction('star', source, data.repo);
    }
  },

  starAction: function(action, button, repo) {
    var method, 
        markup ='<span class="icon-star"></span>',
        inverse;
    if (action == 'unstar') {
      method  = 'delete';
      markup += 'Star';
      inverse = 'star';
    } else {      
      method  = 'put';
      markup += 'Unstar';
      inverse = 'unstar';
    }
    this.api('github/user/starred/' + repo, method).then(function() {
      button.data('hullAction', inverse);
      button.html(markup);
    });
  },


});