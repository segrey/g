(function(_ctx) {
  var app = {};

  React.initializeTouchEvents(true);

  app.data = {};

  app.run = function (themes) {
    this.data = themes;

    this.doAction('board');

    //this.doAction('showQuestion', {question: themes[0].questions[0]});
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
    board: function (themes) {
      var themes = app.data;
      app.render(BoardTable, {themes: themes});
    },

    showQuestion: function (question) {
      app.render(Question, question);
    }
  };

  _ctx.app = app;
})(window);