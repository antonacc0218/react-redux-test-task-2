import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Item, Label, Icon, Loader } from 'semantic-ui-react';
import { getNews } from 'asyncActions';


class News extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    getNews: PropTypes.func.isRequired,
    news: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string
    }))
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    return (
      <React.Fragment>
        <Loader active={this.props.isLoading} size='medium'>Loading</Loader>
        <Header as='h1'>News</Header>
        <Item.Group>
          {this.props.news.map(el =>
            <Item key={el.id}>
              <Item.Content>
                <Item.Header as='h2'>{el.title}</Item.Header>
                <Item.Description>{el.text}</Item.Description>
              </Item.Content>
            </Item>
          )}
        </Item.Group>
        <Label>
          <Icon size='large' name='newspaper' /> {this.props.news.length}
        </Label>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news.list,
  isLoading: state.news.isLoading
});

export default connect(mapStateToProps, { getNews })(News);
