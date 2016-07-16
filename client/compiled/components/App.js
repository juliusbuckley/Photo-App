"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

		_this.state = {
			data: _this.props.data,
			current: _this.props.data[0].image
		};
		return _this;
	}

	_createClass(App, [{
		key: "handleClick",
		value: function handleClick(currentImage) {
			this.setState({
				current: currentImage
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					null,
					React.createElement(Box, { photoData: this.state.data, currentImage: this.state.current,
						handleClick: this.handleClick.bind(this)
					})
				)
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNMLGNBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHFGQUNYLEtBRFc7O0FBRWpCLFFBQUssS0FBTCxHQUFhO0FBQ1osU0FBTSxNQUFLLEtBQUwsQ0FBVyxJQURMO0FBRVosWUFBUyxNQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLENBQWhCLEVBQW1CO0FBRmhCLEdBQWI7QUFGaUI7QUFNakI7Ozs7OEJBQ1csWSxFQUFhO0FBQ3hCLFFBQUssUUFBTCxDQUFjO0FBQ2IsYUFBUztBQURJLElBQWQ7QUFHQTs7OzJCQUNPO0FBQ1AsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFDQyx5QkFBQyxHQUFELElBQUssV0FBVyxLQUFLLEtBQUwsQ0FBVyxJQUEzQixFQUFpQyxjQUFjLEtBQUssS0FBTCxDQUFXLE9BQTFEO0FBQ0MsbUJBQWEsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCO0FBRGQ7QUFERDtBQURELElBREQ7QUFTQTs7OztFQXZCZ0IsTUFBTSxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdGN1cnJlbnQ6IHRoaXMucHJvcHMuZGF0YVswXS5pbWFnZVxuXHRcdH1cblx0fVxuXHRoYW5kbGVDbGljayhjdXJyZW50SW1hZ2Upe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogY3VycmVudEltYWdlXG5cdFx0fSk7XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PEJveCBwaG90b0RhdGE9e3RoaXMuc3RhdGUuZGF0YX0gY3VycmVudEltYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnR9XG5cdFx0XHRcdFx0XHRoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG4iXX0=