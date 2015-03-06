(function(_ctx) {
  var app = {};

  app.QUESTION_STATE = {
    BLANK: 0,
    WAS_DISPLAYED: 1,
    WAS_DISPLAYED_WITH_ANSWERS: 2,
    WAS_SELECTED: 3,
    WAS_ANSWERED: 4
  };

  app.questions = null;

  app.scores = null;

  app.totalScore = 0;

  app.currentQuestion = null;

  app.currentQuestionIndex = 0;

  app.currentQuestionState = app.QUESTION_STATE.BLANK;

  app.view = null;

  app.nextQuestion = function () {
    setTimeout(function () {
      app.view.setProps({hideQuestionBlock: true});

      app.view.setProps({
        showInfo: true,
        infoText: app.totalScore
      });

      setTimeout(function () {
        setTimeout(function () {
          app.currentQuestion = app.questions[app.currentQuestionIndex + 1];
          app.currentQuestionIndex++;
          app.currentQuestionState = app.QUESTION_STATE.WAS_DISPLAYED;

          app.view.setProps({
            currentQuestion: app.currentQuestion,
            hideQuestionBlock: false,
            showInfo: false
          });
        }, 500);

      }, 1500);

    }, 1000);
  };

  app.run = function (data) {
    app.questions = data.questions;
    app.scores = data.scores;
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