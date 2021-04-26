import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" name="message" id="message" 
          onChange={event => this.props.handleMsgChange(event)}
        value={this.props.maxChars}/>
      </div>
    );
  }
}

export default TwitterMessage;
