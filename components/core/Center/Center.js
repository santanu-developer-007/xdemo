import x from "../../x.js";
export default x({
	name: "Center",
	render(){
		let element = document.createElement("div");
		element.classList.add("center");
		element.style.height = "inherit";
		element.style.width = "inherit";
		return element;
	},
	mounted(){
		this.element.appendChild(this.props.child.element);
	},
});