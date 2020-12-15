import React from 'react';
import './css/index.css';

import Stories from '../Stories';
import SearchStories from '../SearchStories';

const App = () =>
  <div className="app">
    <div className="interactions">
      <SearchStories />
    </div>
    <Stories />
  </div>

export default App;