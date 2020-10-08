
import React from 'react'
import Hog from "./Hog.js"



//this file will essentially display all of the Hogs available
//this is the "bones" of how each Hog tile looks like
//this should be a Class component because we need state  

class HogIndex extends React.Component{

    handleInfoClick = (evt) => {
        console.log("Not my problem right now, ttyl")
    }

    
 

    render(){
        console.log("this is the props", this.props.hogs)
        let arrayOfComponents = this.props.hogs.map((singleHog) => {
        return <Hog hogName={singleHog.name}/>
        })
        return(
           <div>
            {arrayOfComponents}
            </ div>
        )

    }
}


export default HogIndex