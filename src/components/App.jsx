import React from 'react';

class App extends React.Component {
  state = { resource: 'posts' };

  onButtonClick = resource => {
    this.setState({ resource: resource });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <button
            onClick={() => this.onButtonClick('posts')}
            className="ui button primary"
          >
            Posts
          </button>
          <button
            onClick={() => this.onButtonClick('todos')}
            className="ui button primary"
          >
            Todos
          </button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default App;
