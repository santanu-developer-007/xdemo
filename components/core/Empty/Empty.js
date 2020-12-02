import x from "../../x.js";
export default x({
	name: "Empty",
	render(){
		let element = document.createElement("div");
		element.style.width = "0";
		element.style.height = "0";
		return element;
	}
});