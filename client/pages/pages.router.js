Router.route("signUpRoute", {
  path: "/sign-up",
  template: "signUpPage"
});

Router.route("groupsRoute",{
  path:"/groups",
  template:"groupsPage"
});

Router.route("signInRoute", {
  path: "/sign-in",
  template: "signInPage"
});

Router.route('signOutRoute', {
  path: '/sign-out',
  template: "signOutPage",
  onBeforeAction: function() {
    Meteor.logout();
    Router.go('/');
  }
});



Router.route("forgotPasswordRoute", {
  path: "/forgot-password",
  template: "forgotPasswordPage",
});

Router.route('resetPasswordRoute', {
  path: 'reset-password/:resetToken',
  template: "resetPasswordPage",
  data: function() {
    Session.set('resetToken', this.params.resetToken);
    return ;
  }
});

Router.route("404Route", {
  path: "/page-not-found",
  template: "notFoundPage",
});

Router.route("dashboardRoute", {
  path: "/dashboard",
  template: "dashboardPage"
});