(function(_exports) {
  var componentPath = 'app-millionaire/com/layout';

  var Layout = React.createClass({
    getDefaultProps: function () {
      return {
        questions: null,
        currentQuestion: null,
        hideQuestionBlock: true,
        showInfo: false,
        infoText: '',
        infoMode: null
      }
    },

    handleClick: function () {
      var STATE = app.QUESTION_STATE;

      switch (app.currentQuestionState) {
        case STATE.BLANK:
          app.currentQuestionState = app.QUESTION_STATE.WAS_DISPLAYED;
          this.setProps({hideQuestionBlock: false});
          break;

        case STATE.WAS_ANSWERED_FAILED:
          app.currentQuestionIndex = app.currentQuestionIndex - 1;
          app.currentQuestion = app.questions[app.currentQuestionIndex];
          app.currentQuestionState = app.QUESTION_STATE.BLANK;

          app.view.setProps({
            currentQuestion: app.currentQuestion,
            hideQuestionBlock: false,
            showInfo: false
          });
          app.view.forceUpdate();
          break;
      }
    },

    render: function () {
      var currentQuestion = this.props.currentQuestion;
      var showInfo = this.props.showInfo;
      var infoText = this.props.infoText;
      var infoMode = this.props.infoMode;

      return (
        <div className="layout">
          <MillionaireLogo onClick={this.handleClick} onTouchEnd={this.handleClick} />
          <QuestionBar question={currentQuestion} hide={this.props.hideQuestionBlock} />
          <Info text={infoText} hidden={!showInfo} mode={infoMode} />
        </div>
      );
    }
  });

  var NerdTvLogo = React.createClass({
    render: function () {
      return (
        <a href="index.html"><img
          src={componentPath + '/nerdtv-logo.svg'}
          className="layout-nerdtv-logo"
        /></a>
      )
    }
  });

  var MillionaireLogo = React.createClass({
    render: function () {
      return (
        <img
          src={componentPath + '/millionaire-logo.svg'}
          className="layout-millionaire-logo"
          onClick={this.props.onClick}
          onTouchEnd={this.props.onClick}
        />
      )
    }
  });

  _exports.Layout = Layout;

})(window);