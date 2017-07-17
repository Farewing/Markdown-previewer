
    var DisplayText = React.createClass({
      getInitialState: function() {
        return {
        value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*' }
      },
      handleChange: function(event) {
          this.setState({value: event.target.value});
      },
      rawMarkup: function(value) {
        var rawMarkup = marked(value, {sanitize: true});
        return { __html: rawMarkup };
    },
       render: function() {
       var value = this.state.value;
       return (
      <div className="row">
        <div className="col-md-6">
          <textarea rows="24" type="text" value={value} onChange={this.handleChange} className="form-control"/>
        </div>
        <div className="col-md-6">
            <span dangerouslySetInnerHTML={this.rawMarkup(value)} />
        </div>
      </div>
      );
  }
});

      ReactDOM.render(<DisplayText />, document.getElementById('container'));