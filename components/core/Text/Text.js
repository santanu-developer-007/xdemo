import x from "../../x.js";
export default x({
	name: "Text",
	render(){
		let element = document.createElement("div");
		element.classList.add("text");
		return element;
	},
	mounted(){
		this.setChild(this.props.child);
	},
	methods: {
		setChild(child){
			if(typeof child == "string"){
				this.element.textContent = child;
			}	
		}
	}
});