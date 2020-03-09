import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './components/Nav'
import RouterView from './router/RouterView'

function App() {
  return (
    <Router>
      <div className="text-gray-900 min-h-screen bg-gray-200">
        <Nav />
        <div className="relative container mx-auto py-4">
          <RouterView />
        </div>
      </div>
    </Router>
  );
}

export default App;
