import React from 'react';
import { Row, } from 'reactstrap';

class LeftMain extends React.Component{
   render(){
        return(
            <div>
             {this.props.Data.map(data=><Row>
                <span onClick={()=>{this.props.onDataClick(data)}}>
                    {data} 
                </span>
               </Row>)}
               
            </div>
        )
    }
}


export default LeftMain