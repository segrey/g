var Question = React.createClass({
  handleQuestionAnswer: function () {
    var question = this.props.question;

    question.isAnswered = true;
    app.doAction('board');
  },

  render: function () {
    var question = this.props.question;

    return (
      <div className="question-wrap" onClick={this.handleQuestionAnswer} onTouchStart={this.handleQuestionAnswer}>
        <div className="question">
          <div className="question-content">
            {question.text}
          </div>
        </div>
      </div>
    )
  }
});