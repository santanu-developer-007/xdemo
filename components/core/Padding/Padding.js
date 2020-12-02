import x from "../../x.js";
export default x({
	name: "Padding",
	render(){
		let element = document.createElement("div");
		element.classList.add("padding");

		return element;
	},
	mounted(){
		this.appendChild(this.props.child);
		this.setPadding(this.props);
	},
	methods:{
		appendChild: function(child){
			this.element.appendChild(child.element);
		},
		setPadding: function(props){
			if(props.left != undefined){
				this.element.style.paddingLeft = props.left + "px";
			}
			if(props.right != undefined){
				this.element.style.paddingRight = props.right + "px";
			}
			if(props.top != undefined){
				this.element.style.paddingTop = props.top + "px";
			}
			if(props.bottom != undefined){
				this.element.style.paddingBottom = props.bottom + "px";
			}	
		}
	}
});