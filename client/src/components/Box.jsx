var Box = (props) => (
	<div>
		<div><ImageList handleClick={props.handleClick} photos={props.photoData}/></div>
		<div><SideImage image={props.currentImage}/></div>

	</div>
)