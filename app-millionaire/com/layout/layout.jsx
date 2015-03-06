(function(_exports) {
  var componentPath = 'app-millionaire/com/layout';

  var Layout = React.createClass({
    getDefaultProps: function () {
      return {
        questions: null,
        currentQuestion: null,
        hideQuestionBlock: false
      }
    },

    render: function () {
      var currentQuestion = this.props.currentQuestion;

      return (
        <div className="layout">
          <NerdTvLogo />
          <MillionaireLogo />
          <QuestionBar question={currentQuestion} hide={this.props.hideQuestionBlock} />
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