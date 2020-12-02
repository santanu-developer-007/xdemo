// Import CSS --
import css from "./css.js";

// Import Components --
import { Row, Padding, Column, SizedBox, Center, Text, ScrollView } from "./components/core";
import Page from "./components/page";
import Header from "./components/header";
import Drawer from "./components/drawer";
import DrawerTrigger from "./components/drawer/DrawerTrigger.js";
let rootNode = document.getElementById("demo");

function App(){

	let drawer;

	let drawerTrigger = new DrawerTrigger({
		onOpen: function(){
			drawer.open();
		},
		onClose: function(){
			drawer.close();
		},
	});
	
	let padding = new Padding({
		"left": 20,
		"right": 20,
		child: new Text({child: "Hello"})
	});

	let row = new Row({
		children: [
			padding
		]
	});

	console.log(drawerTrigger);

	drawer = new Drawer({
		position: "left",
		behaviour: "dock",
		width: "350px",
		onClose: function(){
			drawerTrigger.active = false;
		},
		child: row
	});

	return new Page({
		drawer: drawer,
		header: new Header({
			child: Row({
				children: [
					drawerTrigger
				]
			})
		}),
		body: new ScrollView({
			child: new Center({
				child: new Column({
					children: [
						new SizedBox({
							style: "background-color: red;",
							height: 600,
							width: 500,
							child: Text({child: "hi"})
						})
					]
				})
			})	
		})		
	});
}
function Test(){
	return new Column({
		children: [
			new Column({
				children: new Text({child: "Hi..."})
			})
		]
	});
}
rootNode.appendChild(new App().element);