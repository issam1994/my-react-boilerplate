import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './components/Nav'
import RouterView from './router/RouterView'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <Nav />
        <RouterView />
      </div>
    </Router>
  );
}

export default App;
