import x from "../../x.js";
export default x({
	name: "Column",
	render(){
		let element = document.createElement("div");
		element.classList.add("column");
		return element;
	},
	mounted(){
		if(this.props.children != undefined && this.props.children.length > 0)
			this.appendChildren(this.props.children);
	},
	methods:{
		appendChildren: function(children){
			children.forEach(function(childComponent){
				this.element.appendChild(childComponent.element);
			}.bind(this));
		},	
	}
});