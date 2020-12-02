import x from "../../x.js";

export default x({
	name: "Expanded",
	render(){
		let element = document.createElement("div");
		element.classList.add("expanded");

		return element;
	},
	mounted(){
		this.element.appendChild(this.props.child.element);
	},
});