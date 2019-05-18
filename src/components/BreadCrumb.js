import React from 'react'

class BreadCrumb extends React.Component{
    constructor(props){
        
        super(props)
    }
    
    render(){
        console.log('display props', this.props.data)
        return(
            <div><h1>{this.props.data}</h1></div>
        )
    }
}


export default BreadCrumb