PeepProp = React.createClass({
  propTypes: {
    peep: React.PropTypes.object.isRequired
  },

  render() {
    return <span>Hello, {this.data.peep[0].Numbers[3]}</span>
  }
});
