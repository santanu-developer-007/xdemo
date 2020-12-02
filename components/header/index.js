import x from "../x.js";
export default x({
	render(){
		let element = document.createElement("header");
		element.classList.add("header");
		element.appendChild(this.props.child.element);

		return element;
	},
});