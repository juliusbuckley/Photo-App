var Image = (props) => (
	<div>
		<a onClick= { function(){ props.handleClick(props.data.image); }}>{props.data.title}</a>
	</div>
)
