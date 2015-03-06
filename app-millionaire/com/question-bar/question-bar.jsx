(function(_exports) {
  var componentPath = 'app-millionaire/com/question-bar';

  var QuestionBar = React.createClass({
    getDefaultProps: function () {
      return {
        question: null,
        hide: 0
      }
    },

    render: function () {
      var question = this.props.question;

      var className = [
        'question-bar',
        this.props.hide ? 'hide' : void 0
      ].join(' ');

      return (
        <div className={className}>
          <div className="question-text">
            <div className="text">{question.text}</div>
          </div>

          <AnswersBar
            answers={question.answers}
            correct={question.correct}
          />
        </div>
      )
    }
  });


  var AnswersBar = React.createClass({
    getDefaultProps: function () {
      return {
        question: null
      }
    },

    getInitialState: function () {
      return {
        selectedIndex: null
      }
    },

    handleAnswerSelect: function (index) {
      var that = this;
      var refs = this.refs;
      var keys = Object.keys(this.refs);
      var selectedAnswer = this.refs[index];

      if (app.currentQuestionState == app.QUESTION_STATE.WAS_ANSWERED)
        return;

      keys.forEach(function (id) {
        var answer = refs[id];
        var isSelected = selectedAnswer === answer;
        answer.setState({selected: isSelected});

        if (isSelected) {
          that.setState({selectedIndex: index});
          app.currentQuestionState = app.QUESTION_STATE.WAS_SELECTED;
        }
      });

      // Double click
      if (index == this.state.selectedIndex) {
        this.handleAnswerSubmit(index);
        this.setState({selectedIndex: null});
        app.currentQuestionState = app.QUESTION_STATE.WAS_ANSWERED;
      }
    },

    // checking for correct answer
    handleAnswerSubmit: function (selectedIndex) {
      var scoreEarned = 0;
      var answers = this.props.answers;
      var correctAnswerId = this.props.correct;
      var selectedAnswer = answers[selectedIndex];
      var selectedAnswerId = Object.keys(selectedAnswer)[0];
      var isCorrect = correctAnswerId == selectedAnswerId;
      var correctAnswerIndex;
      answers.forEach(function (answer, i) {
          var answerId = Object.keys(answer)[0];
          if (answerId === correctAnswerId)
            correctAnswerIndex = i;
      });

      if (isCorrect) {
        this.refs[selectedIndex].setState({correct: true});
        scoreEarned = app.scores[app.currentQuestionIndex];
        app.totalScore += scoreEarned;
        app.nextQuestion();

      } else {
        this.refs[correctAnswerIndex].setState({correct: true});
        this.refs[selectedIndex].setState({correct: false});
      }
    },

    render: function () {
      var that = this;
      var answers = this.props.answers;

      return (
        <div className="question-bar-answers">
          {answers.map(function (answer, i) {
            var uid = app.currentQuestionIndex + '.' + i;
            return <AnswersBarItem
              answer={answer}
              key={uid}
              ref={i}
              id={i}
              onClick={that.handleAnswerSelect.bind(null, i)}
            />
          })}
        </div>
      )
    }
  });


  var AnswersBarItem = React.createClass({
    getInitialState: function () {
      return {
        selected: false,
        correct: null
      }
    },

    render: function () {
      var answer = this.props.answer;
      var answerId = Object.keys(answer)[0];
      var answerText = answer[answerId];
      var isSelected = this.state.selected;
      var isCorrect = this.state.correct;

      var className = [
        'question-bar-answers-item',
        isSelected ? 'selected' : void 0,
        isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : void 0
      ].join(' ');


      return (
        <a className={className} onClick={this.props.onClick} onTouchEnd={this.props.onClick}>
          <span className="inner">
            <span className="answer-id">{answerId}: </span>
            <span className="answer-text">{answerText}</span>
          </span>
        </a>
      )
    }
  });

  _exports.QuestionBar = QuestionBar;

})(window);