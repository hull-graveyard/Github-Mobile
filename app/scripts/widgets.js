Hull.widget('activity', {
  
  templates: ['activity'],

  datasources: {
    news: function() {
      var path = 'users/' + this.options.login + '/' + (this.options.activity || 'events');
      return this.api({ provider: 'github', path: path });
    }
  },

  eventTypes: {
    CommitCommentEvent: {},
    CreateEvent: {},
    DeleteEvent: {},
    DownloadEvent: {},
    FollowEvent: { icon: 'icon-loop', action: 'started following' },
    ForkEvent: { icon: 'icon-fork', action: 'forked' },
    ForkApplyEvent: {},
    GistEvent: {},
    GollumEvent: {},
    IssueCommentEvent: {},
    IssuesEvent: {},
    MemberEvent: {},
    PublicEvent: {},
    PullRequestEvent: {},
    PullRequestReviewCommentEvent: {},
    PushEvent: { },
    TeamAddEvent: {},
    WatchEvent: { icon: 'icon-star', action: 'starred', partial: 'watch' },
  },

  beforeRender: function(data) {
    var eventTypes = this.eventTypes;

    data.news = _.compact(_.map(data.news, function(entry) {
      
      var eventType = eventTypes[entry.type];

      if (eventType && eventType.action) {
        return _.extend({}, eventType, { event: entry });
      }

    }));
  }

});



//--------


Hull.widget('app', {

  templates: [
    'dashboard',
    'users'
  ],

  initialize: function () {
    this.initRouter();  
  },

  currentSection: 'dashboard',
  currentView: 'activity',

  sections: {
    dashboard: ['activity', 'issues', 'stars'],
    users: ['profile', 'repos', 'activity']
  },

  actions: {
    toggleShelf: function() {
      console.warn("Toggle shlef !");
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
        'users/:login(/:view)': 'users'
      }
    });

    var router = new Router();

    router.on('route:users', _.bind(function(login, view) {
      this.currentSection = 'users';
      this.currentView = view || 'profile';
      this.render('users', { login: login });
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



//--------


Hull.widget('profile', {
  templates: ['profile'],
  datasources: {
    profile: function() {
      return this.api({ provider: 'github', path: 'users/' + this.options.login })
    }
  },

  actions: {
    follow: function(source, event, data) {
      console.warn("Follow", data.login);
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
  },


});