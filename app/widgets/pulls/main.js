Hull.widget('pulls', {
  templates: ['pulls'],
  datasources: {
    pulls: function() {
      // HOW TO GET ALL THE PULL REQUESTS OF A USER VIA THE API ?
      return this.api({ provider: 'github', path: 'issues' });
    }
  },

  beforeRender: function(data) {
    var pullsByRepo = {};
    _.map(data.pulls, function(issue) {
      var repo = pullsByRepo[issue.repository.id];
      if (!repo) {
        repo = { repository: issue.repository, pulls: [] }
        pullsByRepo[issue.repository.id] = repo;
      }
      repo.pulls.push(issue);
      issue.summary = _.str.prune(issue.body, 140);
    });
    data.pullsByRepo = _.values(pullsByRepo);
  }
});