import React from 'react'
import RightMain2 from './RightMain2'

class RightMain1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            click:false
        }
    }


    handleClick =()=>{
        this.setState({
            click:!this.state.click
        })
    }
    render(){
        if(!this.state.click){
        return (
            <div>
            <input type="button" value="Above 65" onClick={this.handleClick}/>
            <input type="button" value="Below 65" onClick={this.handleClick}/>
            <input type="button" value="18-34" onClick={this.handleClick}/>
            <input type="button" value="<18" onClick={this.handleClick}/>
            </div>
        )
    }
    else{
        return (
            <RightMain2/>
        )
    }
}   

}



export default RightMain1