Hull.widget('code', {

  templates: ['code'],

  datasources: {
    readme: function() {
      var self = this, repo = this.options.repo;
      return this.api({ provider: 'github', path: this.repoPath + '/readme' });
    },

    repo: function() {
      return this.api({ provider: 'github', path: '/repos/' + this.options.login + '/' + this.options.repo });
    }
  },

  initialize: function() {
    this.repoPath = 'repos/' + this.options.login + '/' + this.options.repo;
  },

  beforeRender: function(data) {
    console.warn("Data for repo", data);

    data.readme_content = atob(data.readme.content.replace(/\n/g, ""));
    data.readme_excerpt = data.readme_content.substring(0,150);
  },

  afterRender: function(data) {
    var self = this;
    this.api({ provider: 'github', path: this.repoPath + "/git/refs/heads/" + data.repo.master_branch }).then(function(ref) {
      var evt = 'github.repo.ref.' + data.repo.full_name;
      _.defer(function() { 
        console.warn("Emitting", evt);
        self.sandbox.emit(evt, ref) 
      }, 500);
    });
  }



});