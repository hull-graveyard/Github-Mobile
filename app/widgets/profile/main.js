Hull.widget('profile', {
  templates: ['profile'],
  datasources: {
    profile: function() {
      return this.api({ provider: 'github', path: 'users/' + this.options.login });
    }
  },

  actions: {
    follow: function(source, event, data) {
      // console.warn("Follow", data.login);
    }
  }

});