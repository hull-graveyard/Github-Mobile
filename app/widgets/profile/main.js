Hull.widget('profile', {
  templates: ['profile'],
  datasources: {
    profile: function() {
      return this.api('github/users/' + this.options.login)
    }
  },

  actions: {
    follow: function(source, event, data) {
      console.warn("Follow", data.login);
    }
  }

});