"use strict";

var Image = function Image(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"a",
			{ onClick: function onClick() {
					props.handleClick(props.data.image);
				} },
			props.data.title
		)
	);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0ltYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksUUFBUSxTQUFSLEtBQVEsQ0FBQyxLQUFEO0FBQUEsUUFDWDtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsS0FBRyxTQUFXLG1CQUFVO0FBQUUsV0FBTSxXQUFOLENBQWtCLE1BQU0sSUFBTixDQUFXLEtBQTdCO0FBQXNDLEtBQWhFO0FBQW1FLFNBQU0sSUFBTixDQUFXO0FBQTlFO0FBREQsRUFEVztBQUFBLENBQVoiLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW1hZ2UgPSAocHJvcHMpID0+IChcblx0PGRpdj5cblx0XHQ8YSBvbkNsaWNrPSB7IGZ1bmN0aW9uKCl7IHByb3BzLmhhbmRsZUNsaWNrKHByb3BzLmRhdGEuaW1hZ2UpOyB9fT57cHJvcHMuZGF0YS50aXRsZX08L2E+XG5cdDwvZGl2PlxuKVxuIl19