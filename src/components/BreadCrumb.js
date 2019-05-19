import React from 'react'

class BreadCrumb extends React.Component{
    constructor(props){
        
        super(props)
    }
    
    render(){
        const unique = [...new Set(this.props.dataArray)]
        return(
            // <div><h1>{this.props.dataArray}</h1></div>
            <h1>{unique + " , "}</h1>
        )
    }
}


export default BreadCrumb