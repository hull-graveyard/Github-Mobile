Hull.widget('repo_issues', {
  templates: ['issues'],
  datasources: {
    issues: function() {
      var path = ['repos', this.options.login, this.options.repo, 'issues'].join("/");
      return this.api({ provider: 'github', path: path });
    }
  }
});