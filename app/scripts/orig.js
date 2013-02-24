var GithubMobile = GithubMobile || (function(doc, win) {

    var Utils   = {}, // Your Toolbox  
        Events  = {}, // Event-based Actions   
        App     = {}, // Your Global Logic and Initializer
        Public  = {}, // Your Public Functions
        Ajax  = {},
        $   = function(selector){
      var els = doc.querySelectorAll(selector),
        temp = [],
        i;
      for(i in els){
        if(typeof els[i] == 'object'){
          temp.push(els[i]);
        }
      }
      return temp;
    };
  
    Utils = {
        settings: {
            debug: true,
            meta: {
              client_id: '25eb7ed37550a77f4dfc',
              state: -1,
                currentUser: -1,
                url: -1
            },
            init: function() {
              Utils.settings.meta.url   = $('meta[name="url"]')[0].content;
              Utils.settings.meta.route   = $('meta[name="route"]')[0].content;
              Utils.settings.meta.state   = $('meta[name="state"]')[0].content;
              Utils.settings.meta.token   = $('meta[name="token"]')[0].content;
              Utils.settings.meta.client  = $('meta[name="client"]')[0].content;
              Utils.settings.meta.authed  = $('meta[name="authed"]')[0].content;
            }
        },
        cache: {
            modal_blanket: $('#blanket')[0],
            modal: $('#blanket .modal')[0]
        },
        home_url: function(path){
            if(typeof path=="undefined"){
                path = '';
            }
            return Utils.settings.meta.url+path;            
        },
        log: function(what) {
            if (Utils.settings.debug) {
                console.log(what);
            }
        },
        numbers: {
          addCommas: function(nStr){
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
      }
        },
        parseRoute: function(input) {
          
        var delimiter = input.delimiter || '/',
            paths = input.path.split(delimiter),
            check = input.target[paths.shift()],
            exists = typeof check != 'undefined',
            isLast = paths.length == 0;
        
        if (exists) {
            if (isLast) {
                input.parsed.call(undefined, {
                    exists: true,
                    type: typeof check,
                    obj: check
                });
            } else {
                Utils.parseRoute({
                    path: paths.join(delimiter), 
                    target: check,
                    delimiter: delimiter,
                    parsed: input.parsed
                });
            }
        } else {
            input.parsed.call(undefined, {
                exists: false
            });
        }
    },
        route: function(){
          
      var route = Utils.settings.meta.route.split('/'),
            controller = route[0],
            action = route[1];
        
          if(typeof Routes[controller] != 'undefined'){
              if(typeof Routes[controller].init != 'undefined'){
                  Routes[controller].init.call();                
              }
  
              if(typeof Routes[controller][action] != 'undefined'){
                  Routes[controller][action].call();              
              }
          }            
      }
    };
    var _log = Utils.log;
  
  Ajax = {
    getHTTPObject : function() {
      var http = false;
      if (window.XMLHttpRequest) {
        try {http = new XMLHttpRequest();}
        catch (e) {http = false;}
      }
      return http;
    },
    load : function (url,callback,format) {
      var http = this.init();
      if(!http||!url) return;
      if (http.overrideMimeType) http.overrideMimeType('text/xml');
  
      if(!format) var format = "text";
      format = format.toLowerCase();
      
      http.open("GET", url, true);
  
      http.onreadystatechange = function () {
        if (http.readyState == 4) {
          if(http.status == 200) {
            var result = "";
            if(http.responseText) result = http.responseText;
            if(format.charAt(0) == "j") {
              result = result.replace(/[\n\r]/g,"");
              result = eval('('+result+')'); 
            }
            if(callback) callback(result);
          } else {
            if(error) error(http.status);
          }
        }
      }
      http.send(null);
    },
    init : function() {return this.getHTTPObject();}
  },
  
    Events = {
        endpoints: {
          
          search: {
            focus: function(){
              doc.body.classList.add('search-focus');
            },
            blur: function(){
              doc.body.classList.remove('search-focus');
            }
          },
          
          shelf: {
            open: function(){
              doc.body.classList.add('shelf-open');
            },
            close: function(){
              doc.body.classList.remove('shelf-open');
            },
            toggle: function(e){
              e.preventDefault();
              if(doc.body.classList.contains('shelf-open')){
                Events.endpoints.shelf.close();
              } else{
                Events.endpoints.shelf.open();
              }
            }
          },
          
          push: {
            after: function(){
          var route = $('meta[name="route"]')[0].content.split('/');
          doc.body.className = "animate body-"+route[0]+" body-"+route[1];
          
          //Utils.reflow();
          
          Utils.settings.init();
          Events.init(); 
          Utils.route();
          var b = $('.button-prev')[0];
          if(b){b.href='javascript:window.history.go(-1);';}
        }
          },
          
          repo: {
            toggleContent: function(e){
              e.preventDefault();
              var c = $('.code-house-inner')[0],
                t = $('.code-house header .pull-right')[0];
              if(c.style.display=="none" || c.style.display==""){
                c.style.display="block";
                t.innerHTML = '[-]';
              } else {
                c.style.display="none";
                t.innerHTML = '[+]';
              }
            }
          },
          
          watch: {
            toggle: function(e){
              var button = this,
                repo = button.dataset.repo,
                action = button.dataset.action;
              e.preventDefault();
              
              if(action=='watch'){
                button.innerHTML = '<span class="icon-eye-blocked"></span> Unwatch';
                button.dataset.action = 'unwatch';
              } else {
                button.innerHTML = '<span class="icon-eye"></span> Watch';
                button.dataset.action = 'watch';
              }
              
              Ajax.load(Utils.home_url('ajax/watch/'+action+'/'+repo), function(res){
              
                if(res.status!='success'){
                  button.classList.add('button-negative');
                  button.innerHTML = 'Error';
                }
              
              }, 'json');
            }
          },
          
          stars: {
            toggle: function(e){
              var button = this,
                repo = button.dataset.repo,
                action = button.dataset.action;
              e.preventDefault();
              
              var social = $('.star_cnt')[0];
              if(social){
                count = parseInt(social.innerHTML.replace(',',''));
              
                var noCount = false;
                if(social.innerHTML.indexOf('k') || social.innerHTML.indexOf('m')){
                  var noCount = true;
                }
                
                if(action=='star'){
                  button.innerHTML = '<span class="icon-star"></span> Unstar';
                  button.dataset.action = 'unstar';
                  count++;
                } else {
                  button.innerHTML = '<span class="icon-star"></span> Star';
                  button.dataset.action = 'star';
                  count--;
                }
                if(!noCount){
                  social.innerHTML = Utils.numbers.addCommas(count);
                }
              }
              
              
              Ajax.load(Utils.home_url('ajax/stars/'+action+'/'+repo), function(res){
              
                if(res.status!='success'){
                  button.classList.add('button-negative');
                  button.innerHTML = 'Error';
                }
              
              }, 'json');
            }
          },
          
          follow: {
            toggle: function(e){
              var button = this,
                user = button.dataset.user,
                action = button.dataset.action;
              e.preventDefault();
              
              if(action=='follow'){
                button.classList.add('following');
                button.innerHTML = 'Following';
                button.dataset.action = 'unfollow';
              } else {
                button.classList.remove('following');
                button.innerHTML = 'Follow';
                button.dataset.action = 'follow';
              }
              
              Ajax.load(Utils.home_url('ajax/relations/'+action+'/'+user), function(res){
              
                if(res.status!='success'){
                  button.classList.remove('following');
                  button.classList.add('button-negative');
                  button.innerHTML = 'Error';
                }
              
              }, 'json');
            }
          },
          
          cache: {
            clear: function(e){
              localStorage.removeItem('github-mobile-cache');
              Events.endpoints.modal.close(e);
            },
            shake: function(e){
              Events.endpoints.modal.open(e);
            }
          },
          
          notifications: {
            open: function(e){
              $('.modal header span')[0].innerHTML = 'Notifications';
              Events.endpoints.modal.open(e);
            }
          },
          
          auth: function(){
            window.location.href = 'https://github.com/login/oauth/authorize?scope=user,repo,repo:status,notifications&client_id='+Utils.settings.meta.client_id+'&state='+Utils.settings.meta.state;
          },
          modal: {
            propagate: function(e){
              e.stopPropagation();
            },
            open: function(e){
              e.stopPropagation();
              e.preventDefault();
              Utils.cache.modal_blanket.style.display = 'block';
              
              var posFix = (parseInt(win.getComputedStyle(Utils.cache.modal).height)/2);
              Utils.cache.modal.style.marginTop = '-'+(posFix+50)+'px';
              
              setTimeout(function(){
                doc.body.classList.add('modal-open');
              }, 0);
            },
            close: function(e){
              e.stopPropagation();
              e.preventDefault();
              Utils.cache.modal_blanket.addEventListener('webkitTransitionEnd', Events.endpoints.modal.process_close);
              doc.body.classList.remove('modal-open');
              
            },
            process_close: function(){
              Utils.cache.modal_blanket.style.display = 'none';
              
              Utils.cache.modal_blanket.removeEventListener('webkitTransitionEnd', Events.endpoints.modal.process_close, false);
              
            },
            toggle: function(e){
              if(doc.body.classList.contains('modal-open')){
                Events.modal.close(e);
              } else {
                Events.modal.open(e);
              }
            }
          }
        },
        bindEvents: function(){
            $('[data-event]').forEach(function(element){
              var method = (element.dataset) ? element.dataset.method || 'click' : 'click',
                    name = element.dataset.event,
                    bound = element.dataset.bound=='true';
                
                Utils.parseRoute({
                  path: name,
            target: Events.endpoints,
            delimiter: '.',
            parsed: function(res) {
                if(res.exists){
                  if(!bound){
                            element.dataset.bound = true;
                            element.addEventListener(method, res.obj);
                        }
                } else {
                  _log(res);
                }
            }
                });
            });
        },
        swipe: {
          wrap: $('#wrap')[0],
          data: {},
          translate: function(){
            
          },
          touchMove: function(e){
          
            var cur = e.changedTouches[0].pageX,
              threshold = e.changedTouches[0].pageY;
            
            if(cur>Events.swipe.data.track){
              Events.swipe.data.isOpening = true;
          } else {
              Events.swipe.data.isOpening = false;
            }
            Events.swipe.data.track = cur;
            
            if( ( (cur - Events.swipe.data.x) > 20) || Events.swipe.data.canSlide){
              Events.swipe.data.canSlide = true;
              if(cur - Events.swipe.data.x >= 0){
                Events.swipe.wrap.style.webkitTransform = 'translate3d('+(cur - Events.swipe.data.x)+'px,0,0)';
              }
              //_log(wrap.style.webkitTransform);
            }
          },
          touchStart: function(e){
            Events.swipe.data.oldTransition = Events.swipe.wrap.style.webkitTransition;
            Events.swipe.wrap.style.webkitTransition='none';
            Events.swipe.data.x = e.changedTouches[0].pageX;
            Events.swipe.data.y = e.changedTouches[0].pageY;
            
          },
          touchEnd: function(e){
            Events.swipe.data.canSlide = false;
            Events.swipe.wrap.style.webkitTransition = Events.swipe.data.oldTransition;
            Events.swipe.wrap.style.webkitTransform='';
            if(Events.swipe.data.isOpening){
              Events.endpoints.shelf.open();
            } else {
              Events.endpoints.shelf.close();
            }
          },
          listen: function(){
            
            doc.addEventListener('touchstart', Events.swipe.touchStart );
            doc.addEventListener('touchend', Events.swipe.touchEnd );
            doc.addEventListener('touchmove', Events.swipe.touchMove );
            
          }
        },
        saveBack: function(){
          
          var hash = window.location.hash.substring(1),
            button = $('.button-prev')[0],
            links = $('a[href*="users"]'),
            prev = localStorage.getItem('prevPage'),
            prevRoute = prev ? prev.split('/') : null,
            route = ($('meta[name="route"]')[0].content).split('/');
          if(prev && button && prevRoute[0]!=route[0]){
            button.href = Utils.home_url(prev);
            prev = localStorage.removeItem('prevPage');
          } else {
            localStorage.setItem('prevPage', route.join('/'));
          }
        },
        init: function(){
            Events.bindEvents();
            //Events.swipe.listen();
        }
    };
    
    Routes = {
      users: {
        profile: function(){
          Ajax.load(Utils.home_url('ajax/contributions/'+$('#focus_username')[0].value), function(res){
            if(res.status=="success"){
              var c = $('#contributions')[0];
              c.innerHTML = res.data;
              c.scrollLeft = c.scrollWidth;
              
              $('.repos-panel b')[0].innerHTML = res.meta.total+' Total';
              $('.streak-panel b')[0].innerHTML = res.meta.streak+' days';
              $('.streak-panel p')[0].innerHTML = res.meta.streak_days;
              
              var boxes = $('#contributions .day-element');
              boxes = boxes.reverse();
              var i = 0;
              
              for (i = 0; i < boxes.length; i++) {
                (function(i) {
                  setTimeout(function() {
                        boxes[i].style.opacity=1;
                    }, i * 3);
                })(i);
            }
            $('.panels')[0].classList.add('panels-active');
          } else {
            c.innerHTML = '<span class="err">Could not retreve data</span>';
          }
          c.classList.remove('loading');
          }, 'json');
      }
      },
      auth: {
        login: function(){
        
          var tokenLocal = localStorage.getItem('token'),
            tokenSession = Utils.settings.meta.token;
          
          if(tokenSession && !tokenLocal){
            // Need to save token in local storage
            localStorage.setItem('token', Utils.settings.meta.token);
            window.location.href = Utils.home_url('dashboard');
          } else if(!tokenSession && tokenLocal){
            // Need to save token in session variable
            window.location.href = Utils.home_url('auth/renew/'+tokenLocal);
          } else if(tokenLocal && tokenSession){
            // Alright, Sparky! Lets roll!
            window.location.href = Utils.home_url('dashboard');
          } else {
            // Login
            document.body.classList.add('do-login');
          }
        },
        logout: function(){
          if(localStorage.getItem('token')){
            localStorage.removeItem('token');
          }
          Utils.settings.meta.token = false;
        }
      }
    };
    
    App = {
      logic: {
        global: function(){
          new FastClick(document.body);
          
          var shelfLinks = $('#shelf a');
          for(var i = 0; i<shelfLinks.length; i++){
            shelfLinks[i].addEventListener('click', Events.endpoints.shelf.close);
          }
          
          
          $('#search')[0].addEventListener('focus', Events.endpoints.search.focus);
          $('#search')[0].addEventListener('blur', Events.endpoints.search.blur);
          
          
        }
      },
        ready: function(func){
          doc.addEventListener('DOMContentLoaded', func);
        },
        init: function() {
            App.ready(function(){
              
              App.logic.global();
              
        Utils.settings.init();
        Events.init(); 
        Utils.route();
        
        win.addEventListener('shake', Events.endpoints.cache.shake, false);
        
        win.addEventListener('beforepush', function(){
          _log('Loading...');
        });
        
        win.addEventListener('push', Events.endpoints.push.after);
        
        /*var content = $('.content')[0],
          refresh = $('#refresh')[0];
        content.addEventListener('touchend', function(e){
          var top = content.scrollTop;
          if(top<=-70){
            window.location.reload();
            //content.scrollTop = -70;
            //$('#refresh')[0].innerHTML = 'Refreshing...';
          }
        });
        content.addEventListener('scroll', function(e){
          var top = content.scrollTop;
          if(top<=0){
            //refresh.style.lineHeight = ((top*-1)+30)+'px';
            if(top<=-70){
              refresh.innerHTML = 'Release to refresh';
            } else {
              refresh.innerHTML = 'Pull to refresh';
            }
          }
        });*/
            });
        }
    };
    
    Public = {
        init: App.init,
        ready: App.ready,
        utils: Utils
    };

    return Public;

})(document, window);

GithubMobile.init();
