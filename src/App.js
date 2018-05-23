import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { routes } from './routes';
import HeaderMenu from './containers/HeaderMenuContainer';
import NotificationBarContainer from './containers/NotificationBarContainer';
import ProtectedComponent from './containers/ProtectedComponent';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => {
        const component = route.isPrivate ? ProtectedComponent(route.component) : route.component;
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
          <NotificationBarContainer/>
          {renderSwitch()}
        </Container>
      </React.Fragment>
    </Router>
  );
};

export default App;
