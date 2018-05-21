import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { routes } from './routes';
import HeaderMenu from './containers/HeaderMenuContainer';

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
        <HeaderMenu routes={routes.filter(route => route.isNavBar)}></HeaderMenu>
        <Container className='main'>
          {renderSwitch()}
        </Container>
      </React.Fragment>
    </Router>
  );
};

export default App;
