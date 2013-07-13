Hull.widget('activity', function() {
  var eventTypes = {
    CommitCommentEvent: { icon: 'icon-bubbles', action: 'commented on commit' },
    CreateEvent: { icon: 'icon-book', action: 'created {{payload.ref_type}} {{payload.ref}} on' },
    DeleteEvent: { },
    DownloadEvent: {},
    FollowEvent: { icon: 'icon-loop', action: 'started following' },
    ForkEvent: { icon: 'icon-fork', action: 'forked' },
    ForkApplyEvent: { },
    GistEvent: { icon: 'icon-embed', action: '{{action}} gist' },
    GollumEvent: {},
    IssueCommentEvent: { icon: 'icon-bubbles', action: 'commented on issue #{{payload.issue.number}} on' },
    IssuesEvent: { icon: 'icon-notification', action: '{{payload.action}} issue #{{payload.issue.number}} on' },
    MemberEvent: { },
    PublicEvent: { icon: 'icon-bookmarks', action: 'open sourced' },
    PullRequestEvent: { icon: 'icon-tab', action: '{{payload.action}} pull request #{{payload.number}}' },
    PullRequestReviewCommentEvent: { icon: 'icon-bubbles', action: 'commented on pull request #{{payload.number}} on' },
    PushEvent: { icon: 'icon-upload', action: 'pushed to' },
    TeamAddEvent: { },
    WatchEvent: { icon: 'icon-star', action: 'starred', partial: 'watch' }
  };

  _.map(_.keys(eventTypes), function(k) {
    if (eventTypes[k].action) {
      eventTypes[k].action = Handlebars.compile(eventTypes[k].action);  
    }
  });

  return {

    templates: ['activity'],

    datasources: {
      news: function() {
        var path = 'users/' + this.options.login + '/' + (this.options.activity || 'events');
        return this.api({ provider: 'github', path: path });
      }
    },

    beforeRender: function(data) {
      data.news = _.compact(_.map(data.news, function(entry) {
        var eventType = eventTypes[entry.type];
        if (eventType && eventType.action) {
          return _.extend({}, eventType, { event: entry, summary: eventType.action(entry) });
        }
      }));
    }  
  }
  


});



//--------


Hull.widget('app', {

  templates: [
    'dashboard',
    'users',
    'repos',
  ],

  initialize: function () {
    this.initRouter();  
  },

  currentSection: 'dashboard',
  currentView: 'activity',

  sections: {
    dashboard: [
      { name: 'activity',  title: 'Activity' },
      { name: 'user_issues',  title: 'Issues' },
      { name: 'stars',  title: 'Stars' }
    ],
    users: [
      { name: 'profile', title: "Profile" },
      { name: 'repos', title: "Repos" },
      { name: 'activity', title: "Activity" }
    ],
    repos: [
      { name: 'code', title: "Code" }, 
      { name: 'pulls', title: "Pulls" },
      { name: 'repo_issues', title: "Issues" }
    ]
  },

  actions: {
    toggleShelf: function() {
      this.sandbox.emit('shelf.toggle');
    },
    openNotifications: function() {
      this.sandbox.emit('notifications.open');
    }
  },

  initRouter: function() {
    var Backbone = require('backbone');
    var Router = Backbone.Router.extend({
      routes: {
        'dashboard/:view'     : 'dashboard',
        'users/:login(/:view)': 'users',
        'repos/:login/:repo(/:view)': 'repos'
      }
    });

    var router = new Router();

    router.on('route:users', _.bind(function(login, view) {
      this.currentSection = 'users';
      this.currentView = view || 'profile';
      this.render('users', { login: login });
    }, this));

    router.on('route:repos', _.bind(function(login, repo, view) {
      this.currentSection = 'repos';
      this.currentView = view || 'code';
      this.render('repos', { login: login, repo: repo });
    }, this));

    router.on('route:dashboard', _.bind(function(view) {
      this.currentSection = 'dashboard';
      this.currentView = view || 'activity';
      this.render('dashboard');
    }, this));

    this.sandbox.on('app.route', function(route) {
      router.navigate(route, { trigger: true });
    });

  },

  beforeRender: function(data) {
    console.warn("Rendering app...", data);
    data.githubAccount  = _.select(data.me.identities, function(i) { return i.provider == 'github'; })[0];
    data.currentView    = this.currentView;
    data.currentSection = this.currentSection;
    data.sectionViews   = this.sections[this.currentSection];
    return data;
  },

  afterRender: function() {
  }
});





//--------


Hull.widget("blanket", {
  templates: ['blanket']
});





//--------


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



//--------


/*global Hull:true */
Hull.widget("githull", {
  templates: ['githull'],
  refreshEvents: ['model.hull.me.change'],
  initialize: function() {
    // Hack to force credentials refresh...
    this.sandbox.on('hull.currentUser', function() {
      window.location.reload();
    });
  }
});





//--------


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



//--------


Hull.widget('repo_issues', {
  templates: ['issues'],
  datasources: {
    issues: function() {
      var path = ['repos', this.options.login, this.options.repo, 'issues'].join("/");
      return this.api({ provider: 'github', path: path });
    }
  }
});



//--------


Hull.widget('repos', {
  templates: ['repos'],
  datasources: {
    repos: function() {
      return this.api({ provider: 'github', path: 'users/' + this.options.login + '/repos' });
    }
  }
});



//--------


Hull.widget("shelf", {
  templates: ['shelf'],

  events: {
    'click a' : function() {
      this.snapper.close();
    }
  },

  initialize: function() {
    this.sandbox.on('shelf.open', function() {
      this.snapper.open('left');
    }, this);

    this.sandbox.on('shelf.close', function() {
      this.snapper.close();
    }, this);

    this.sandbox.on('shelf.toggle', function() {
      if (this.snapper.state().state=="left" ){
        
        this.snapper.close();
      } else {
        
        this.snapper.open('left');
      }
    }, this);
  },

  beforeRender: function(data) {
    data.githubAccount  = _.select(data.me.identities, function(i) { return i.provider == 'github'; })[0];
  },

  afterRender: function() {
    this.snapper = new Snap({
      element: document.getElementById('content')
    });
    $('.left-drawer').show();
  } 

});





//--------


Hull.widget('stars', {

  templates: ['stars'],

  datasources: {
    starred: function() {
      return this.api({ provider: 'github', path: 'users/' + this.options.login + '/starred' });
    }
  },

  actions: {
    unstar: function(source, event, data) {
      this.starAction('unstar', source, data.repo);
    },
    star: function(source, event, data) {
      this.starAction('star', source, data.repo);
    }
  },

  starAction: function(action, button, repo) {
    var method, 
        markup ='<span class="icon-star"></span>',
        inverse;
    if (action == 'unstar') {
      method  = 'delete';
      markup += 'Star';
      inverse = 'star';
    } else {      
      method  = 'put';
      markup += 'Unstar';
      inverse = 'unstar';
    }
    this.api('github/user/starred/' + repo, method).then(function() {
      button.data('hullAction', inverse);
      button.html(markup);
    });
  }


});



//--------


Hull.widget('tree', {

  templates: ['files'],

  datasources: {
    files: function() {
      if (this.sha) {
        var path = this.repoPath + '/git/trees/' + this.sha;
        return this.api({ provider: 'github', path: path });
      }
    }
  },

  initialize: function() {
    this.repo = this.options.repo;
    this.repoPath = 'repos/' + this.repo;
    console.warn("sb.in")
    this.sandbox.on('github.repo.ref.' + this.repo, function(ref) {
      this.sha = ref.object.sha;
      this.render();
    }, this);
  },

  beforeRender: function(data) {
    data.repo = this.repo;
  }
});



//--------


Hull.widget('user_issues', {
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
        repo = { repository: issue.repository, issues: [] };
        issuesByRepo[issue.repository.id] = repo;
      }
      repo.issues.push(issue);
      issue.summary = _.str.prune(issue.body, 140);
    });
    data.issuesByRepo = _.values(issuesByRepo);
  }
});