var container = document.querySelector(".container");
var textarea = document.querySelector("textarea");

class Mde extends React.Component {
	constructor(props) {
		super(props);
		this.state = {content: "Type *markup* here..."};
	}

	editor(e) {
		this.setState({content: e.target.value});
	}

	createMarkup() {
		return {__html: marked(this.state.content)};
	}

	render() {
		return (
			<div className = "wrapper">
				<div>
					<h3>Input</h3>
					<textarea onChange = {this.editor.bind(this)}>
						{this.state.content}
					</textarea>
				</div>
				<div>
					<h3>Output</h3>
					<div className="output" dangerouslySetInnerHTML={this.createMarkup()} /> 
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Mde />, container);