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

