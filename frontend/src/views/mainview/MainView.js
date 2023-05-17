import React, { useState, useEffect, useRef } from 'react';

import { Link, withRouter, Redirect } from "react-router-dom";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Container,
  Col,
  Collapse,
} from "reactstrap";
import axios from 'axios';

function MainView(props) {
  const [state, setState] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then(res => {
        setState(res.data);
        console.log(res.data);
      })
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      {state.length > 0 ? state.map((user) => {
        return (
          <h1>{user.name}</h1>
        )
      }) : null}
    </div>
  );
}

export default withRouter(MainView);