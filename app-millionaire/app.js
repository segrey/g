(function(_ctx) {
  var app = {};

  app.questions = {};

  app.currentQuestion = null;

  app.currentQuestionIndex = 0;

  app.QUESTION_STATE = {
    BLANK: 0,
    QUESTION: 1,
    QUESTION_WITH_ANSWERS: 2
  };

  app.view = null;

  app.run = function (questions) {
    app.questions = questions;
    app.currentQuestion = app.questions[app.currentQuestionIndex];

    React.initializeTouchEvents(true);

    var view = React.createFactory(Layout)({
      questions: app.questions,
      currentQuestion: app.currentQuestion
    });

    app.view = React.render(view, document.body);
  };

  _ctx.app = app;
})(window);