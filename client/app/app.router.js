
//--------------------------------------------------------------
// Global Configuration

Router.configure({
  layoutTemplate: 'appLayout',
  notFoundTemplate: 'notFoundPage',
  yieldTemplates: {
    'appHeader': {to: 'header'},
    'appFooter': {to: 'footer'}
  }
});


// Have to sign in to access all application pages
Router.onBeforeAction(function() {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    this.redirect('/sign-in');
  }
}, {
  // whitelist which routes you don't need to be signed in for
  except: [
    'signUpRoute',
    'signInRoute',
    'forgotPasswordRoute',
    'signOutRoute',
    'resetPasswordRoute',
    'pageNotFoundRoute'
  ]
});

// Subscriptions application-wide
Router.waitOn(function() {
  if (Meteor.loggingIn() || Meteor.user())
    return Meteor.subscribe("userOrgs");
});

Router.onAfterAction(collapseHeaderNav);

//--------------------------------------------------------------
// Root route

Router.route('landingPageRoute', {
  path: '/',
  template: 'landingPage'
});