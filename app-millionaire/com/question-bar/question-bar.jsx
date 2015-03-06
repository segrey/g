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

          <AnswersBar question={question} />
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

      keys.forEach(function (id) {
        var answer = refs[id];
        var isSelected = selectedAnswer === answer;
        answer.setState({selected: isSelected});

        if (isSelected) {
          that.setState({selectedIndex: index});
        }
      });

      if (index == this.state.selectedIndex) {
        this.handleAnswerSubmit(index);
      }
    },

    // checking for correct answer
    handleAnswerSubmit: function (selectedIndex) {
      var question = this.props.question;
      var correctAnswerId = question.correct;
      var selectedAnswer = question.answers[selectedIndex];
      var selectedAnswerId = Object.keys(selectedAnswer)[0];
      var isCorrect = correctAnswerId == selectedAnswerId;
      var correctAnswerIndex;
      question.answers.forEach(function (answer, i) {
          var answerId = Object.keys(answer)[0];
          if (answerId === correctAnswerId)
            correctAnswerIndex = i;
      });

      console.log(correctAnswerIndex);

      if (isCorrect) {
        this.refs[selectedIndex].setState({correct: true});
      } else {
        this.refs[correctAnswerIndex].setState({correct: true});
        this.refs[selectedIndex].setState({correct: false});
      }
    },

    render: function () {
      var that = this;
      var question = this.props.question;
      var answers = question.answers;
      var correctAnswerId = question.correct;

      return (
        <div className="question-bar-answers">
          {answers.map(function (answer, i) {
            return <AnswersBarItem
              answer={answer}
              key={i}
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

    getDefaultProps: function () {
      return {
        answer: null,
        selected: false
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
        <a className={className} onClick={this.props.onClick}>
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