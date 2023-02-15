import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      message:"Counter-0"
    }
  }
    reset(){
      this.setState({
        message:"Counter-0"
      })
    }
    increment(){
      this.setState({
        message:"Counter-5"
      })}
    decrement(){
      this.setState({
        message:"Counter-0"
      })
    }
 
render(){
  return(
    <div className='main-container'>
      <h1>Simple counter App</h1>
      <div className='counter-container'>
      <h2>{this.state.message}</h2>
      </div>
      <div className='buttons-main'>
      <div className='buttons'><button onClick={()=>this.reset()}>Reset</button></div>
      <div className='buttons'><button onClick={()=>this.increment()}>Increment</button></div>
      <div className='buttons'><button onClick={()=>this.decrement()}>Decrement</button></div>
      </div>
    </div>
  )
}
}  
  
export default App