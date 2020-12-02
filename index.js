// Import CSS --
import css from "./css.js";

// Import Components --
import { Row, Padding, Column, SizedBox, Center, Text, Empty } from "./components/core";
import Page from "./components/page";
import Header from "./components/header";
import Drawer from "./components/drawer";
import DrawerTrigger from "./components/drawer/DrawerTrigger.js";
import Textbox from "./components/forms/Textbox/Textbox.js";


let rootNode = document.getElementById("demo");

function App(){

	let drawer, drawerTrigger, header, body;

	drawerTrigger = new DrawerTrigger({
		onOpen: function(){
			drawer.open();
		},
		onClose: function(){
			drawer.close();
		},
	});

	drawer = new Drawer({
		position: "left",
		behaviour: "dock",
		width: "350px",
		onClose: function(){
			drawerTrigger.active = false;
		},
		child: new Text({child: "hello"})
	});

	header = new Header({
		child: Row({
			children: [
				drawerTrigger
			]
		})
	});

	let t = new Textbox({
		label: "Demo Label",
		required: true
	});

	console.log(t);

	body = new Center({
		child: new SizedBox({
			width: 500,
			height: 100,
			child: t
		}),	
	});

	return new Page({
		drawer: drawer,
		header: header,
		body: body
	});
}
rootNode.appendChild(new App().element);