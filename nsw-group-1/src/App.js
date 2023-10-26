import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CampaignGallery from './pages/CampaignGallery';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/campaigns" component={CampaignGallery} />
      </Switch>
    </Router>
  );
}

export default App;