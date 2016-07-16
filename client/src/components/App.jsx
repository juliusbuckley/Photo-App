class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: this.props.data,
			current: this.props.data[0].image
		}
	}
	handleClick(currentImage){
		this.setState({
			current: currentImage
		});
	}
	render(){
		return (
			<div>
				<div>
					<Box photoData={this.state.data} currentImage={this.state.current}
						handleClick={this.handleClick.bind(this)}
					/>
				</div>
			</div>
		)
	}
}
