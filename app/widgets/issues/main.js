Hull.widget('issues', {
  templates: ['issues'],
  datasources: {
    issues: function() {
      return this.api({ provider: 'github', path: 'issues' });
    }
  },

  beforeRender: function(data) {
    var issuesByRepo = {};
    _.map(data.issues, function(issue) {
      var repo = issuesByRepo[issue.repository.id];
      if (!repo) {
        repo = { repository: issue.repository, issues: [] }
        issuesByRepo[issue.repository.id] = repo;
      }
      repo.issues.push(issue);
      issue.summary = _.str.prune(issue.body, 140);
    });
    data.issuesByRepo = _.values(issuesByRepo);
  }
});