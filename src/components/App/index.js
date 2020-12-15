import React from 'react';
import './css/index.css';

import Stories from '../Stories';

const App = ({ stories, onArchive }) =>
  <div className="app">
    <Stories 
      stories={stories}
      onArchive={onArchive}
    />
  </div>

export default App;