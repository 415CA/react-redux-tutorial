import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../../actions/index';
import Button from '../Button';
import Input from '../Input';
import Form from '../Form';

const SearchStories = ({ onFetchStories }) => {
  const [query, setQuery] = useState('')

  const onSubmit = (event) => {
    if (query) {
      onFetchStories(query);
      setQuery(query)
    }
    event.preventDefault();
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input 
        type='text' 
        value={query} 
        onChange={setQuery} 
      />
      <Button 
        type='submit'
        onSubmit={onSubmit}
      >
        Search
      </Button>
    </Form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onFetchStories: query => dispatch(doFetchStories(query)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchStories);
