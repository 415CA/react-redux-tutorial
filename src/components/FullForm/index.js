import React from 'react';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';

const NewForm = ({ username, setUsername }) => {
  const onSubmit = username => console.log(username);

  return (
    <>
      <Form onSubmit={
        (event) => {
        onSubmit(username);
        event.preventDefault();
      }}
      >
      <Input value={username} onChange={setUsername}>
        Your name:
      </Input>
        <Button color="violet" type="submit">
          Click Here
        </Button>
      </Form>
    </>
  )
}

export default NewForm