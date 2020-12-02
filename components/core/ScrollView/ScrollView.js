import x from "../../x.js";
export default x({
	name: "ScrollView",
	data: {

	},
	render(){
		let element = document.createElement("div");
		element.classList.add("scroll_view");
		return element;
	},
	mounted(){
		if(this.props.child != undefined){
			this.element.appendChild(this.props.child.element);
		}
	}
});