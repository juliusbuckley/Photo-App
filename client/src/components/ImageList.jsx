var ImageList = (props) => (
	<div>
		<ul>
			{props.photos.map((photo) =>
				<li><Image handleClick={props.handleClick} data={photo}/></li>
			)}
		</ul>
	</div>
)