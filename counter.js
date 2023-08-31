
import React,  {Component} from 'react';
class Counter extends Component{
	constructor(props){
		super(props);
		this.state={
			count:0, //initalization state

		};

	}
	increment = () => {

		this.setState({count:this.state.count + 2});// updating state
	};
	render(){
		return(
			<div>
            <h1>Counter:{this.state.count}</h1>
			<button onclick={this.increment}>increment</button>
			</div>
		);
	}
}
export default Counter;