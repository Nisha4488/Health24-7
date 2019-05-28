import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LeftMain from './LeftMain';
import RightMain from './RightMain';
import BreadCrumb from './BreadCrumb';
import Data from '../utils/Data';

const ageGroup = ['Above 65', 'Below 65', '18-34', '<18'];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      dataArray: [],
      ageClick: false,
      ageArray: [],
    };
  }

  dataClick = data => {
    const dataLength = this.state.dataArray.push(data);
    this.setState({
      click: !this.state.click,
      dataArray: this.state.dataArray,
    });
  };

  ageClick = age => {
    this.state.ageArray.push(age);
    this.setState({
      ageClick: !this.state.ageClick,
      ageArray: this.state.ageArray,
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <BreadCrumb
              dataArray={this.state.dataArray}
              ageArray={this.state.ageArray}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <LeftMain Data={Data} onDataClick={this.dataClick} />
          </Col>
          <Col xs="8">
            <RightMain ageGroup={ageGroup} ageClick={this.ageClick} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
