import x from "../../x.js";
export default x({
	name: "Row",
	render(){
		let element = document.createElement("div");
		element.classList.add("row");	
		return element;
	},
	mounted(){
		this.appendChild();
	},
	methods: {
		appendChild: function(){
			if(this.props.children != undefined && this.props.children.length > 0){
				this.props.children.forEach(function(childComponent){
					this.element.appendChild(childComponent.element);
				}.bind(this));
			}
		}
	}
});