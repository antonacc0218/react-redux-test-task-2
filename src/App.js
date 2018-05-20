import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { routes } from './routes';
import NavBar from './components/Navbar';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => {
        const component = route.isPrivate ? route.component : route.component;
        return (
          <Route
            key={route.path}
            exact={route.isExact}
            path={route.path}
            component={component}
          />
        );
      })}
    </Switch>
  );

  return (
    <Router>
      <React.Fragment>
        <NavBar routes={routes.filter(route => route.isNavBar)}></NavBar>
        <Container className='main'>
          {renderSwitch()}
        </Container>
      </React.Fragment>
    </Router>
  );
};

export default App;
