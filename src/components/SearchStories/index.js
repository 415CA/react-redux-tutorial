import React, { useState } from 'react';
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
    <Form>
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

export default SearchStories
