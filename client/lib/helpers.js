collapseHeaderNav = function() {
  // Don't collapse it if it's already collapsed
  // There's a bug if this check isn't included
  if ($(".navbar-collapse").hasClass("in")) {
    $(".navbar-collapse").collapse();
    $(".navbar-toggle").addClass("collapsed");
  }
};