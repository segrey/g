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
        mode ? 'mode_' + mode : void 0,
        hidden ? '_hidden' : '_visible'
      ].join(' ');

      return (
        <div className={className}>
          <div className="info-inner">
            <span className="symbol">●</span>
            {this.props.text}
            <span className="symbol">●</span>
          </div>
        </div>
      )
    }
  });

  _exports.Info = Info;

})(window);