Hull.widget('profile', {
  templates: ['profile'],
  datasources: {
    profile: function() {
      return this.api({ provider: 'github', path: 'users/' + this.options.login });
    },
    activities: function() {
      return this.api({ provider: 'github', path: 'users/' + this.options.login + '/received_events/public' });
    }
  },

  actions: {
    follow: function(source, event, data) {
      
    }
  },

  beforeRender: function(data) {
    console.warn("Profile", data)
    if (data.profile.blog && !/^http/.test(data.profile.blog)) {
      data.profile.blog_url = "http://" + data.profile.blog;
    }
  }

});