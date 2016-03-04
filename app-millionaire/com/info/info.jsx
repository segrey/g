(function(_exports) {
  var componentPath = 'app-millionaire/com/info';

  var Info = React.createClass({
    getDefaultProps: function () {
      return {
        text: '',
        mode: 'simple',
        hidden: true
      }
    },

    render: function () {
      var mode = this.props.mode;
      var hidden = this.props.hidden;
      var className = [
        'info',
        'mode_' + mode,
        hidden ? '_hidden' : '_visible'
      ].join(' ');

      return (
        <div className={className}>
          <div className="info-inner">
            <span className="symbol">●</span>
            Следующий вопрос хочешь ты
            <span className="symbol">●</span>
          </div>
        </div>
      )
    }
  });

  _exports.Info = Info;

})(window);