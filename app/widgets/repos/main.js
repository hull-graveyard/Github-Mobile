Hull.widget('repos', {
  templates: ['repos'],
  datasources: {
    repos: function() {
      return this.api('github/users/' + this.options.login + '/repos');
    }
  }
});