import React, { Component }                                     from 'react';
import { Header }                                               from './header';
import Countries                                                from './countries';
import Cities                                                   from './cities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Countries />
        <Cities />
      </div>
    );
  }
}

export default App;
