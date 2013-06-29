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
    WatchEvent: { icon: 'icon-star', action: 'starred', partial: 'watch' }
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