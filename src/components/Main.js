import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import LeftMain from './LeftMain';
import RightMain from './RightMain';
import BreadCrumb from './BreadCrumb'
import Data from '../utils/Data'


class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            click:false,
            data:''
        }
    }

    dataClick=(data)=>{
        console.log('click')
        console.log('data', data)
        this.setState({
            click:!this.state.click,
            data:data
        })
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col><BreadCrumb data={this.state.data}/></Col>
                </Row>
            <Row>
                <Col xs="4"><LeftMain Data={Data} onDataClick={this.dataClick}/></Col>
                <Col xs="8"><RightMain/></Col>
            </Row>
            </Container>
        )
    }
}


export default Main;