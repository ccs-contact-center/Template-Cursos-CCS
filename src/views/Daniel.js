import React, { Component } from 'react';
//import Rect, { Component } from 'react';
import withAuth from '../services/withAuth';

import {
  Col,
  Row,
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
} from 'reactstrap';

class Daniel extends Component {
  render() {
    return (
      <Row>
        <Col xs="6">
          <Button color="primary" id="toggler" style={{ marginBottom: '1rem'}}>
            Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt magni, voluptas debitis similique porro a molestias
                consequuntur earum odio officiis natus, amet hic, iste sed
                dignissimos esse fuga! Minus, alias.
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </Col>
        <Col xs="6">
          <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
            Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler2">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt magni, voluptas debitis similique porro a molestias
                consequuntur earum odio officiis natus, amet hic, iste sed
                dignissimos esse fuga! Minus, alias.
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </Col>
      </Row>
    )
  }
}

export default withAuth(Daniel)
