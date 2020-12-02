import x from "../x.js";
import { Column, Row } from "../core";
export default x({
	name: "Page",
	render(){
		let structure = new Column({
			classNames: "page",
			children: [
				this.props.drawer,
				new Column({
					classNames: "page_content",
					children: [
						
						this.props.header,
						this.props.body
					]
				})
			]
		});
		return structure.element;
	},
	mounted(){
		if(this.props.children != undefined && this.props.children.length > 0)
			this.appendChildren(this.props.children);
	},
	methods: {
		appendChildren: function(children){
			children.forEach(function(childComponent){
				this.element.appendChild(childComponent.element);
			}.bind(this));
		},	
	}
});