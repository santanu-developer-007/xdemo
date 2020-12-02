import x from "../../x.js";
export default x({
	name: "Div",
	render(){
		let element = document.createElement("div");
		if(typeof this.props.child == "string"){
			element.innerHTML = this.props.child;
		}else if(this.props.child.element != undefined){
			element.appendChild(this.props.child.element);	
		}else{
			element.appendChild(this.props.child);
		}
		
		return element;
	}
});