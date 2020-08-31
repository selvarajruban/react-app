import React, { Component } from 'react';
import Registrations from './components/Registrations';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div class="container-fluid">
      <Header companyName="Marriage Registration" />
      <div class="row">
        <Sidebar />
        <Registrations />
      </div>
    </div>
  );
}

export default App;
