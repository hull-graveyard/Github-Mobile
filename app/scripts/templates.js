this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["activity/activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <li>\n    <span class=\"";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n    <div class=\"text-body\">\n      <p>\n        <a data-transition=\"slide-in\" href=\"#/users/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.event),stack1 == null || stack1 === false ? stack1 : stack1.actor)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.event),stack1 == null || stack1 === false ? stack1 : stack1.actor)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n\n        ";
  if (stack2 = helpers.action) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.action; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack2 = helpers.event) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.event; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.event) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        \n        <div class=\"time\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow),stack1 ? stack1.call(depth0, ((stack1 = depth0.event),stack1 == null || stack1 === false ? stack1 : stack1.created_at), options) : helperMissing.call(depth0, "fromNow", ((stack1 = depth0.event),stack1 == null || stack1 === false ? stack1 : stack1.created_at), options)))
    + "</div>\n\n      </p>\n    </div>\n  </li>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n        \n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.repo),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack2 = helpers.payload) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.payload; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.payload) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a data-transition=\"slide-in\" href=\"#/repos/"
    + escapeExpression(((stack1 = ((stack1 = depth0.repo),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.repo),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.forkee) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.forkee; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.forkee) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.target) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.target; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.target) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        to \n        <a data-transition=\"slide-in\" href=\"#/repos/";
  if (stack1 = helpers.full_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.full_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.full_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.full_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a data-transition=\"slide-in\" href=\"#/users/";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        ";
  return buffer;
  }

  buffer += "<ul class=\"list text-list\">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.news) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.news; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.news) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["Hull"]["templates"]["app/dashboard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <ul class=\"segmented-controller\">\n      ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data};
  if (stack1 = helpers.sectionViews) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.sectionViews; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.sectionViews) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <li ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEqual),stack1 ? stack1.call(depth0, depth0, depth1.currentView, options) : helperMissing.call(depth0, "ifEqual", depth0, depth1.currentView, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n        <a href=\"#/dashboard/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" data-transition=\"fade\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.classify),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "classify", depth0, options)))
    + "</a>\n      </li>\n      ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "class=\"active\"";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"content\" data-hull-widget=\"";
  if (stack1 = helpers.currentView) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.currentView; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-hull-login=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.githubAccount),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-hull-activity='received_events'>\n  </div>\n  ";
  return buffer;
  }

  buffer += "<header class=\"bar-title\">\n  <a class=\"button\" data-hull-action=\"toggleShelf\" id=\"activate-shelf\">\n    <span class=\"icon-github-2\"></span>\n  </a>\n  <h1 class=\"title\">dashboard</h1>\n  <a class=\"button\" data-hull-action=\"openNotifications\">\n    <span class=\"notification-indicator unread\"></span>\n  </a>\n</header>\n<div class=\"push-hook\">\n  <nav class=\"bar-standard\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.sectionViews, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </nav>\n  <h1>";
  if (stack1 = helpers.currentView) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.currentView; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.currentView, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>";
  return buffer;
  });

this["Hull"]["templates"]["app/users"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <ul class=\"segmented-controller\">\n      ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data};
  if (stack1 = helpers.sectionViews) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.sectionViews; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.sectionViews) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <li ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEqual),stack1 ? stack1.call(depth0, depth0, depth1.currentView, options) : helperMissing.call(depth0, "ifEqual", depth0, depth1.currentView, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n        <a href=\"#/users/"
    + escapeExpression(((stack1 = depth1.login),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" data-transition=\"fade\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.classify),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "classify", depth0, options)))
    + "</a>\n      </li>\n      ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "class=\"active\"";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"content\" data-hull-widget=\"";
  if (stack1 = helpers.currentView) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.currentView; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-hull-login=\"";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-hull-activity='events'>\n  </div>\n  ";
  return buffer;
  }

  buffer += "<header class=\"bar-title\">\n  <a class=\"button\" data-hull-action=\"toggleShelf\" id=\"activate-shelf\">\n    <span class=\"icon-github-2\"></span>\n  </a>\n  <h1 class=\"title\">";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <a class=\"button\" data-hull-action=\"openNotifications\">\n    <span class=\"notification-indicator unread\"></span>\n  </a>\n</header>\n<div class=\"push-hook\">\n  <nav class=\"bar-standard\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.sectionViews, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </nav>\n  <h1>";
  if (stack1 = helpers.currentView) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.currentView; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.currentView, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>";
  return buffer;
  });

this["Hull"]["templates"]["blanket/blanket"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"modal\" data-event=\"modal.propagate\">\n  <div class=\"inner\">\n    <header>\n      <span>App Cache</span>\n      <a href=\"#\" data-event=\"modal.close\" class=\"close\">&times;</a>\n    </header>\n    <article>Some pages have been cached in this app. Would you like to clear the cache?</article>\n    <footer class=\"clearfix\">\n      <a href=\"#\" class=\"button pull-left\" data-event=\"modal.close\">Close</a>\n      <a href=\"#\" class=\"button-positive pull-right\" data-event=\"cache.clear\">Clear</a>\n    </footer>\n  </div>\n</div>\n";
  });

this["Hull"]["templates"]["githull/githull"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n<div data-hull-widget=\"app\"></div>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.json),stack1 ? stack1.call(depth0, depth0.loggedIn, options) : helperMissing.call(depth0, "json", depth0.loggedIn, options)))
    + "\n<header class=\"bar-title\">\n  <a class=\"button\" href=\"#\">About</a>\n  <h1 class=\"title\">login</h1>\n</header>\n<div class=\"push-hook\">\n  <div class=\"content\">\n    <div class=\"margin\">\n      <header class=\"hero-text\">github</header>\n      <p class=\"note\"><span>Enjoy all the social benefits of GitHub, right from your phone.</span></p>\n      <a class=\"button button-block button-dark\" data-hull-action=\"login\" data-hull-provider=\"github\">Login</a>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  }

  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.loggedIn),stack1 == null || stack1 === false ? stack1 : stack1.github), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });

this["Hull"]["templates"]["issues/issues"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <li>\n    <div class=\"repo\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.owner)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n  </li>\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack2 = helpers.issues) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.issues; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.issues) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <li>\n    <div class=\"padding\">\n      <a href=\"#\" class=\"block-link\">\n        <b>\n          ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n          <span>&middot; ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow),stack1 ? stack1.call(depth0, depth0.updated_at, options) : helperMissing.call(depth0, "fromNow", depth0.updated_at, options)))
    + "</span>\n        </b>\n      </a>      \n      ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data};
  if (stack2 = helpers.user) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.user; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.user) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <span class=\"chevron\"></span>\n  </li>\n  ";
  return buffer;
  }
function program3(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"actor\">\n        <img src=\"";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <a data-transition=\"slide-in\" href=\"#/users/";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        created #"
    + escapeExpression(((stack1 = depth1.number),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      ";
  return buffer;
  }

  buffer += "<ul class=\"list text-list issues-list\">\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.issuesByRepo) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.issuesByRepo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.issuesByRepo) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["Hull"]["templates"]["profile/profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <div id=\"profile\">\n\n    <input type=\"hidden\" value=\"";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"focus_username\">\n\n    <div class=\"user-focus\">\n      <div class=\"top-half clearfix\">\n        <div class=\"left-cell\">\n          <div class=\"image\" style=\"background-image:url(";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ");\"></div>\n        </div>\n\n        <div class=\"right-cell\">\n          <div class=\"right-top-cell\">\n            <ul>\n              <li>\n                <a> <b>";
  if (stack1 = helpers.followers) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.followers; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b>\n                  <span>followers</span>\n                </a>\n              </li>\n              <li>\n                <a> <b>";
  if (stack1 = helpers.public_repos) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.public_repos; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b>\n                  <span>repos</span>\n                </a>\n              </li>\n              <li>\n                <a>\n                  <b>";
  if (stack1 = helpers.following) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.following; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b>\n                  <span>following</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"right-bottom-cell\">\n\n            <a class=\"button follow-button following\" data-hull-action=\"follow\" data-hull-login=\"";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">   \n              Following\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"bottom-half\">\n        <b class=\"clearfix\">\n          ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n          <span class=\"pull-right\">\n            <span class=\"icon-clock\"></span>\n            Joined\n            <span class=\"black\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow),stack1 ? stack1.call(depth0, depth0.created_at, options) : helperMissing.call(depth0, "fromNow", depth0.created_at, options)))
    + "</span>\n          </span></b> \n        <div>\n          <p>\n            <span class=\"icon-office\"></span>\n            ";
  if (stack2 = helpers.company) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.company; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n          </p>\n          ";
  stack2 = helpers['if'].call(depth0, depth0.location, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          ";
  stack2 = helpers['if'].call(depth0, depth0.email, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          ";
  stack2 = helpers['if'].call(depth0, depth0.blog, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n      </div>\n    </div>\n\n    <div class=\"additional\">\n\n      <b>";
  if (stack2 = helpers.login) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.login; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "'s Open Source Contributions</b>\n      <div class=\"wrap\">\n        <div id=\"contributions-legend\">\n          <div class=\"week-labels\">\n            <span>M</span>\n            <span>W</span>\n            <span>F</span>\n          </div>\n          <div class=\"fade\"></div>\n        </div>\n        <div id=\"contributions\" class=\"loading\"></div>\n      </div>\n\n      <div class=\"panels\">\n        <div class=\"panel repos-panel\">\n          <div class=\"inner\">\n            <b></b>\n            <p>Feb 24 2012 - Feb 24 2013</p>\n            <span>Year of Contributions</span>\n          </div>\n        </div>\n        <div class=\"panel streak-panel\">\n          <div class=\"inner\">\n            <b></b>\n            <p></p>\n            <span>Longest Streak</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <p>\n            <span class=\"icon-location\"></span>\n            ";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.location; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n          </p>\n          ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <p>\n            <span class=\"icon-envelop\"></span>\n            <a href=\"mailto:";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n          </p>\n          ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <p>\n            <span class=\"icon-link\"></span>\n            <a href=\"";
  if (stack1 = helpers.blog) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blog; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.blog) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.blog; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n          </p>\n          ";
  return buffer;
  }

  buffer += "<div class=\"margin\">\n\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.profile) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.profile; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.profile) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  return buffer;
  });

this["Hull"]["templates"]["pulls/pulls"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <li>\n    <div class=\"repo\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.owner)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = depth0.repository),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n  </li>\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack2 = helpers.pulls) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.pulls; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.pulls) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <li>\n    <div class=\"padding\">\n      <a href=\"#\" class=\"block-link\">\n        <b>\n          ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n          <span>&middot; ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow),stack1 ? stack1.call(depth0, depth0.updated_at, options) : helperMissing.call(depth0, "fromNow", depth0.updated_at, options)))
    + "</span>\n        </b>\n      </a>      \n      ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0),data:data};
  if (stack2 = helpers.user) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.user; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.user) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <span class=\"chevron\"></span>\n  </li>\n  ";
  return buffer;
  }
function program3(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"actor\">\n        <img src=\"";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <a data-transition=\"slide-in\" href=\"#/users/";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        created #"
    + escapeExpression(((stack1 = depth1.number),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      ";
  return buffer;
  }

  buffer += "<ul class=\"list text-list issues-list\">\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.pullsByRepo) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.pullsByRepo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.pullsByRepo) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["Hull"]["templates"]["repos/repos"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <li>\n    <a data-transition=\"slide-in\" href=\"#/repos/"
    + escapeExpression(((stack1 = ((stack1 = depth0.owner),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"block-list-link\">\n      <span class=\"icon-book\"></span>\n      <div class=\"text-body\"> <b><span class=\"link-color\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n          <div class=\"repo-list-meta\">\n            <p>";
  if (stack2 = helpers.language) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.language; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n            <p>\n              <span class=\"icon-star\"></span>\n              ";
  if (stack2 = helpers.watchers_count) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.watchers_count; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n            </p>\n            <p>\n              <span class=\"icon-fork\"></span>\n              ";
  if (stack2 = helpers.forks_count) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.forks_count; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n            </p>\n          </div></b> \n        <p></p>\n        <div class=\"time\">Last updated ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow),stack1 ? stack1.call(depth0, depth0.updated_at, options) : helperMissing.call(depth0, "fromNow", depth0.updated_at, options)))
    + "</div>\n      </div>\n    </a>\n  </li>\n  ";
  return buffer;
  }

  buffer += "<ul class=\"list text-list repo-list\">\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.repos) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.repos; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.repos) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["Hull"]["templates"]["shelf/shelf"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"shelf-wrap\">\n  <ul>\n    <li><input type=\"search\" placeholder=\"Search\" id=\"search\"></li>\n    <li class=\"sep\"></li>\n    <li>\n      <a data-transition=\"fade\"></a>\n    </li>\n    <li class=\"sep\"></li>\n    <li>\n      <a href=\"#\" data-transition=\"fade\">Account Settings</a>\n    </li>\n    <li>\n      <a href=\"#\" data-transition=\"fade\">App Settings</a>\n    </li>\n    <li class=\"sep\"></li>\n    <li>\n      <a href=\"#\" data-transition=\"fade\">Updates <span class=\"count pull-right\">3</span></a>\n    </li>\n    <li>\n      <a href=\"#\" data-transition=\"fade\">GitHub Mobile</a>\n    </li>\n    <li class=\"sep\"></li>\n    <li>\n      <a data-hull-action='logout' data-transition=\"fade\">Logout</a>\n    </li>\n  </ul>\n  <span class=\"icon-github gh-logo\"></span>\n</div>\n";
  });

this["Hull"]["templates"]["stars/stars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <li>\n    <span class=\"icon-book\"></span>\n    <div class=\"text-body\"> <b><a href=\"#/repos/"
    + escapeExpression(((stack1 = ((stack1 = depth0.owner),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.owner),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></b> \n      <p>";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n    </div>\n    <a class=\"button do-full-remove\" data-hull-action=\"unstar\" data-hull-repo=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.owner),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n      <span class=\"icon-star\"></span>\n      Unstar\n    </a>\n  </li>\n";
  return buffer;
  }

  buffer += "<ul class=\"list text-list lightweight\">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.starred) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.starred; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.starred) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });