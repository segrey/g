var BoardTable = React.createClass({
  render: function () {
    var that = this;
    var themes = this.props.themes;

    return (
      <table className="board-table">
        {themes.map(function (theme) {
          return <BoardTableRow theme={theme} />;
        })}
      </table>
    )
  }
});

var BoardTableRow = React.createClass({
  render: function () {
    var theme = this.props.theme;

    return (
      <tr>
        <td className="theme-cell">{theme.title}</td>
        {theme.questions.map(function (question, i) {
          return (
            <BoardTableQuestionCell
              question={question}
              id={{themeId: theme.id, questionIndex: i}}
            />
          )
        })}
      </tr>
    )
  }
});

var BoardTableQuestionCell = React.createClass({
  getInitialState: function () {
    return {
      selected: false
    }
  },

  handleQuestionSelect: function () {
    var question = this.props.question;

    if (!question.isAnswered) {
      this.setState({selected: true});
      setTimeout(function () {
        app.doAction('showQuestion', {question: question});
      }, 600);
    }
  },

  render: function () {
    var question = this.props.question;
    var isSelected = this.state.selected;
    var isAnswered = question.isAnswered;
    var className = [
      'question-cell',
      isSelected ? 'selected' : void 0,
      isAnswered ? 'answered' : void 0
      
    ].join(' ');

    return (
      <td className={className} onClick={this.handleQuestionSelect} onTouchStart={this.handleQuestionSelect}>
        <span className="question-price">{question.price}</span>
      </td>
    )
  }
});