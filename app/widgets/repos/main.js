Hull.widget('repos', {
  templates: ['repos'],
  datasources: {
    repos: function() {
      return this.api({ provider: 'github', path: 'users/' + this.options.login + '/repos' });
    }
  }
});