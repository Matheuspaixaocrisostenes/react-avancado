import React, { Component } from 'react'

class Twitter extends Component{

  render(){
    return(
      <div>
        <button onClick={this.onRemove}>Remover Component</button>
      </div>
    )
  }
}

export default Twitter