import x from "../x.js";
import { Column, Row, Expanded, ScrollView } from "../core";
export default x({
	name: "Page",
	render(){
		let structure = new Column({
			classNames: "page",
			children: [
				this.props.drawer,
				new Expanded({
					child: new Column({
						classNames: "page_content",
						children: [
							this.props.header,
							new Expanded({
								classNames: "page_body",
								child: new ScrollView({
									child: this.props.body
								})								
							})
						]
					})
				})				
			]
		});
		return structure.element;
	}
});