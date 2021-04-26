import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
    
    handleMsgChange = event
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" name="message" id="message" 
          onChange={event => this.props.handleMsgChange(event)}
        value={this.props.message}/>
        <p>Remaining Characters: { this.remainingCharacters }
      </div>
    );
  }
}

export default TwitterMessage;
