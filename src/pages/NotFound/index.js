import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Header, Button, } from 'semantic-ui-react';


const NotFound = () => (
  <React.Fragment>
    <Header as='h2'>Not Found Page</Header>
    <Grid id='login' verticalAlign='middle' textAlign='center'>
      <Grid.Column width={6}>
        <NavLink to='/'>
          <Button color='black'>Back to home page</Button>
        </NavLink>
      </Grid.Column>
    </Grid>
  </React.Fragment>
);

export default NotFound;
