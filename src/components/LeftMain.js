import React from 'react';
import { Row, } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

class LeftMain extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:false
        }
    }

    handleInputChange =(event)=>{
        this.setState({
            [event.target.name]:!this.state[event.target.name]
        })
    }

   render(){
        return(
            <div>
                <label>
          Is going:
          <input
            name="selectCategories"
            type="checkbox"
            value={this.state.data}
            checked={this.state.data}
            onChange={this.handleInputChange} />
        </label>
             {this.props.Data.map(data=>
                <Row>
                <span onClick={()=>{this.props.onDataClick(data)}}>
                    {data}
                </span>
               </Row>)}
            </div>
        )
    }
}


export default LeftMain