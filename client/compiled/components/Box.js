"use strict";

var Box = function Box(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"div",
			null,
			React.createElement(ImageList, { handleClick: props.handleClick, photos: props.photoData })
		),
		React.createElement(
			"div",
			null,
			React.createElement(SideImage, { image: props.currentImage })
		)
	);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JveC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQU0sU0FBTixHQUFNLENBQUMsS0FBRDtBQUFBLFFBQ1Q7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUssdUJBQUMsU0FBRCxJQUFXLGFBQWEsTUFBTSxXQUE5QixFQUEyQyxRQUFRLE1BQU0sU0FBekQ7QUFBTCxHQUREO0FBRUM7QUFBQTtBQUFBO0FBQUssdUJBQUMsU0FBRCxJQUFXLE9BQU8sTUFBTSxZQUF4QjtBQUFMO0FBRkQsRUFEUztBQUFBLENBQVYiLCJmaWxlIjoiQm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEJveCA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxkaXY+PEltYWdlTGlzdCBoYW5kbGVDbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9IHBob3Rvcz17cHJvcHMucGhvdG9EYXRhfS8+PC9kaXY+XG5cdFx0PGRpdj48U2lkZUltYWdlIGltYWdlPXtwcm9wcy5jdXJyZW50SW1hZ2V9Lz48L2Rpdj5cblxuXHQ8L2Rpdj5cbikiXX0=