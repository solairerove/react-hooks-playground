import React from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';

class ResourceList extends React.Component {
  state = { resources: [] };

  async componentDidMount() {
    const { resource } = this.props;
    const response = await jsonPlaceholder.get(`/${resource}`);
    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    const { resource } = this.props;
    if (prevProps.resource !== resource) {
      const response = await jsonPlaceholder.get(`/${resource}`);
      this.setState({ resources: response.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
