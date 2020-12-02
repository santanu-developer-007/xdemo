import x from "../../x.js";
export default x({
	name: "MaterialIcon",
	data: {
		icon: null,
	},
	render(){
		let element = document.createElement("div");
		element.classList.add("icon");
		this.icon = document.createElement("i");
		this.icon.classList.add("material-icons");
		this.icon.textContent = this.props.child;
		element.appendChild(this.icon);
		return element;
	},
	methods:{
		setIcon(iconName){
			if(iconName == undefined){
				this.icon.textContent = this.props.child;
			}else{
				this.icon.textContent = iconName;
			}
		},
	}
});