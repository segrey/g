(function(_ctx) {
  var app = {};

  React.initializeTouchEvents(true);

  app.data = {};

  app.run = function (data) {
    this.data = data;

    this.doAction('board');
  };

  app.render = function (component, context, target) {
    var factory = React.createFactory(component);
    var target = target || document.body;

    React.render(factory(context), target);
  };

  app.doAction = function (action, data) {
    app.actions[action].call(this, data);
  };

  app.actions = {
    board: function () {
      app.render(Layout, {questions: app.data});
    }
  };

  _ctx.app = app;
})(window);