(function(_exports) {
  var componentPath = 'app-millionaire/com/layout';

  var Layout = React.createClass({
    getInitialState: function () {
      return {
        currentQuestionIndex: 0
      }
    },

    render: function () {
      var questions = this.props.questions;
      var currentQuestionIndex = this.state.currentQuestionIndex;
      var currentQuestion = questions[currentQuestionIndex];

      return (
        <div className="layout">
          <NerdTvLogo />
          <MillionaireLogo />
          <QuestionBar question={currentQuestion} />
        </div>
      )
    }
  });

  var NerdTvLogo = React.createClass({
    render: function () {
      return (
        <img src={componentPath + '/nerdtv-logo.svg'} className="layout-nerdtv-logo" />
      )
    }
  });

  var MillionaireLogo = React.createClass({
    render: function () {
      return (
        <img src={componentPath + '/millionaire-logo.svg'} className="layout-millionaire-logo" />
      )
    }
  });

  _exports.Layout = Layout;

})(window);