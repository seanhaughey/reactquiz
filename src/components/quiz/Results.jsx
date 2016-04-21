import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component{

	render(){
		var percent = (this.props.score/(this.props.questions.length*25)*100);
		if(percent > 80) {
			var message = "Awesome job!";
		} else if(percent < 80 && percent > 60) {
			var message = "You did ok.";
		} else {
			var message = "You did horribly!";
		}
		return(
			<div className="well">
				<h4>You got {this.props.score/25} out of {this.props.questions.length} correct</h4>
				<h1>{percent}% - {message}</h1>
				<hr></hr>
				<a href="/app">Take this quiz again</a>
			</div>
		)
	}
}

export default Results