import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';

const addNewLink = async props => {
  const response = await fetch('https://clickbait-generator.herokuapp.com/api');
  const forecasts = await response.json();
  props.dispatch({ type: 'ADD_LINK', value: { link: forecasts.title, votes: 0 } });
  console.log(props);
}

const upvote = link => {
  console.log(link);
    link.votes++;
}

const downvote = link => {
  console.log(link);
  link.votes--;
}

const Home = props => {
  console.log(props);

  return (<div>
    <Button onClick={() => addNewLink(props)}>How About More Clickbait?</Button><br/><br/>
    {props.links.map(link => (
      <Alert color="dark">
        <strong>{link.votes} pts</strong> - <em> {link.link}</em>
        <br />
        <Button onClick={() => upvote(link)}>Upvote this nonsense?</Button> {' '}
        <Button onClick={() => downvote(link)}>Downvote this garbage?</Button>
      </Alert>
    ))}
  </div>
  );
}

function mapStateToProps(state) {
  return {
    links: state
  };
}

export default connect(mapStateToProps)(Home);