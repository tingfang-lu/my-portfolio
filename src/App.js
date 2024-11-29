import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact>
              <h2>Welcome to my personal portfolio!</h2>
            </Route>
            <Route path="/projects">
              <h2>My Projects</h2>
            </Route>
            <Route path="/blog">
              <h2>My Blog</h2>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
