import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-300">
      <div className="max-w-xl flex flex-wrap items-center justify-center p-4 shadow-lg bg-white rounded-lg m-2">
        <img src={logo} className="w-24 h-24 rounded-full shadow-lg m-4" alt="logo" />
        <div className="text-center sm:text-left">
          <div className="text-xl font-semibold">React.js App Boilerplate</div>
          <div className="text-base text-gray-500">By Issam Ait Ouahmane</div>
        </div>
      </div>
    </div>
  );
}

export default App;
