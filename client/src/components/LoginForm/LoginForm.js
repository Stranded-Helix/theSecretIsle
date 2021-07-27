import React from 'react';
import { form } from 'react-bootstrap';

export default function LoginForm(props) {
  return(
    <form class="login-form">
      {props.children}
    </form>
  )
}
