Hull.widget('tree', {

  templates: ['files'],

  datasources: {
    tree: function() {
      console.warn("Fetching tree with ", this.sha, (this.sha && !this.files));
      if (this.sha && !this.files) {
        var path = this.repoPath + '/git/trees/' + this.sha;
        return this.api({ provider: 'github', path: path }, { recursive: 1 });
      }
    }
  },

  actions: {
    browse: function(evt, action) {
      console.warn("Browsing to : ", action.data.path);
      this.currentPath = action.data.path;
      this.render();
    }
  },

  initialize: function() {
    this.currentPath = "/";
    this.repo = this.options.repo;
    this.repoPath = 'repos/' + this.repo;
    this.sandbox.on('github.repo.ref.' + this.repo, function(ref) {
      this.sha    = ref.object.sha;
      this.files  = null;
      this.render();
    }, this);
  },

  beforeRender: function(data) {
    console.warn("Data for tree", data);

    if (!this.files && data.tree) {
      var files = {};
      _.each(data.tree.tree, function(f) {
        var dir = ("/" + f.path).replace(/\/[^\/]+$/, '') || "/";
        files[dir] = files[dir] || [];
        files[dir].push(f)
      })

      this.files = files;
    }
    data.files = this.files[this.currentPath || "/"];
    console.warn("Files for ", this.currentPath, " : ", data.files);
  }
});