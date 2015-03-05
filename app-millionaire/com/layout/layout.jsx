(function(_exports) {
  var componentPath = 'app-millionaire/com/layout';

  var Layout = React.createClass({
    render: function () {
      var questions = this.props.questions;
      console.log(questions);

      return (
        <div className="layout">
          <NerdTvLogo />
          <MillionaireLogo />
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
  _exports.LayoutLogo = NerdTvLogo;

})(window);