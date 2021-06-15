import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtGenerator from '../../containers/ArtGenerator';
import ECard from '../../containers/ECard';
import Gallery from '../../containers/Gallery';
import AboutUs from '../../containers/AboutUs';
import Header from '../header/Header';
import './app.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => <ArtGenerator {...routerProps} />}
        />
        <Route
          path="/ecard/:id"
          exact
          render={(routerProps) => <ECard {...routerProps} />}
        />
        <Route
          path="/gallery"
          exact
          render={(routerProps) => <Gallery {...routerProps} />}
        />
        <Route
          path="/aboutus"
          exact
          render={(routerProps) => <AboutUs {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
