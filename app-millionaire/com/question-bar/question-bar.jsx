(function(_exports) {
  var componentPath = 'app-millionaire/com/question-bar';

  var QuestionBar = React.createClass({
    getDefaultProps: function () {
      return {
        question: null
      }
    },

    render: function () {
      var question = this.props.question;

      return (
        <div className="question-bar">
          <div className="question-text">
            <div className="text">{question.text}</div>
          </div>

          <QuestionBarAnswers question={question} />
        </div>
      )
    }
  });


  var QuestionBarAnswers = React.createClass({
    getDefaultProps: function () {
      return {
        question: null
      }
    },

    render: function () {
      var question = this.props.question;
      var answers = question.answers;
      var correctAnswerId = question.correct;

      return (
        <div className="question-bar-answers">
          {answers.map(function (answer) {
            return <QuestionBarAnswersItem answer={answer} />
          })}
        </div>
      )
    }
  });


  var QuestionBarAnswersItem = React.createClass({
    getDefaultProps: function () {
      return {
        answer: null
      }
    },

    render: function () {
      var answer = this.props.answer;
      var answerId = Object.keys(answer)[0];
      var answerText = answer[answerId];

      return (
          <a className="question-bar-answers-item">
            <span className="answer-id">{answerId}: </span>
            <span className="answer-text">{answerText}</span>
          </a>
      )
    }
  });

  _exports.QuestionBar = QuestionBar;

})(window);