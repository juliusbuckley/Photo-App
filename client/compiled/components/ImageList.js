"use strict";

var ImageList = function ImageList(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"ul",
			null,
			props.photos.map(function (photo) {
				return React.createElement(
					"li",
					null,
					React.createElement(Image, { handleClick: props.handleClick, data: photo })
				);
			})
		)
	);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0ltYWdlTGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFlBQVksU0FBWixTQUFZLENBQUMsS0FBRDtBQUFBLFFBQ2Y7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0UsU0FBTSxNQUFOLENBQWEsR0FBYixDQUFpQixVQUFDLEtBQUQ7QUFBQSxXQUNqQjtBQUFBO0FBQUE7QUFBSSx5QkFBQyxLQUFELElBQU8sYUFBYSxNQUFNLFdBQTFCLEVBQXVDLE1BQU0sS0FBN0M7QUFBSixLQURpQjtBQUFBLElBQWpCO0FBREY7QUFERCxFQURlO0FBQUEsQ0FBaEIiLCJmaWxlIjoiSW1hZ2VMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEltYWdlTGlzdCA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2PlxuXHRcdDx1bD5cblx0XHRcdHtwcm9wcy5waG90b3MubWFwKChwaG90bykgPT5cblx0XHRcdFx0PGxpPjxJbWFnZSBoYW5kbGVDbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9IGRhdGE9e3Bob3RvfS8+PC9saT5cblx0XHRcdCl9XG5cdFx0PC91bD5cblx0PC9kaXY+XG4pIl19