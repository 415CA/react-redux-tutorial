import React from 'react';
import './css/index.css';

import Stories from '../Stories';

const App = ({ stories }) =>
  <div className="app">
    <Stories stories={stories} />
  </div>

export default App;