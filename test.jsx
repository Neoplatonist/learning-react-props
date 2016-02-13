Peeps = new Mongo.Collection('peeps');

PeepInfo = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      peeps: Peeps.find({}).fetch()
    };
  },
  render() {
    return <span>Hello, {this.data.peeps[0].Numbers[3]}</span>
  }
});



if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<PeepInfo />, document.getElementById("render-target"));
  });
}
