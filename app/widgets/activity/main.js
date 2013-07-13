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