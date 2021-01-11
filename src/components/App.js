import React from 'react';
import SearchBar from './SearchBar';
import SegmentCard from './SegmentCard';
import nasa from '../apis/nasa';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onTermSubmit = async (term) => {
    const response = await nasa.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({images: response.data.collection.items})
  };

  render() {
    return (
      <div>
      <SegmentCard />
      <SearchBar onFormSubmit={this.onTermSubmit} />
      <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
