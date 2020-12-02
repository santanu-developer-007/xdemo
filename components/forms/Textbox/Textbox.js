import x from "../../x.js";
import InputWrapper from "../InputWrapper/InputWrapper.js";
import { Column, Div, MaterialIcon, Empty, Row, Text } from "../../core";

export default x({
	name: "Textbox",
	data: {
		focused : false,
		disabled : false,
		defaultValue : "",
		value: "",
		inputNode: null,
	},
	render(){
		this.inputNode = document.createElement("input");
		this.inputNode.setAttribute("type", "text");

		let dom = new InputWrapper({
			child: new Div({
				classNames: "xTextBox",
				child: this.inputNode
			})
		});

		return dom.element;
	},
	mounted(){
		if (this.props.autocomplete == "off") {
			this.inputNode.setAttribute("autocomplete", "off");
		}
		if (this.props.placeholder != undefined) {
			this.inputNode.setAttribute("placeholder", this.props.placeholder);
		}
	},
	methods: {

	}
});

// function xTextBox(element){
// 	this.validations = dom.buildValidation(element);
// 	// Methods --
// 	this.onValueChange = function(value){};
// 	this.onFocus = function(value){};
// 	this.onBlur = function(value){};
// 	this.onInput = function(value){};
// 	this.onKeyup = function(value, event){};
// 	this.onChange = function(value, event){};
// 	this.setValue = function(value){
// 		if (this.disabled == true) {
// 			return;
// 		}
// 		if (value == undefined || value == null) {
// 			input.value = "";
// 			this.value = "";
// 			if (this.focused == false) {
// 				wrapper.controlLabelPosition(false);
// 			}
// 		}else if (value == "") {
// 			input.value = value;
// 			this.value = value;
// 			if (this.focused == false) {
// 				wrapper.controlLabelPosition(false);
// 			}
// 		}else{
// 			input.value = value;
// 			this.value = value;
// 			if (this.focused == false) {
// 				wrapper.controlLabelPosition(true);
// 			}
// 		}
// 		wrapper.emitValue(this);
// 		this.onValueChange(this.value);
// 	};
// 	this.focus = function(){
// 		input.focus();
// 		wrapper.focus();
// 	};
// 	this.validateData = function(){
// 		return wrapper.validateData(this.value, this.validations);
// 	};

// 	// Extracting Attribute Values for Textbox behaviour --
// 	preventOverflow = (preventOverflow != null) ? true : false;
// 	maxChar = (maxChar == null) ? null : parseInt(maxChar);
// 	required = (required == null) ? false : true;

// 	// DOM --
	

// 	// Watching --
// 	wrapper.onLabelClick = function(event){
// 		input.focus();
// 	};
// 	input.addEventListener("focus", function(event){
// 		this.focused = true;
// 		wrapper.controlLabelPosition(true);
// 		wrapper.playBarAnimation(true);
// 		if (maxChar != null) {
// 			wrapper.setCounter(this.value.length, maxChar);
// 		}
// 		if (helpText != null) {
// 			this.setHelp(helpText);
// 		}
// 		this.onFocus(this.value);
// 	}.bind(this));
// 	input.addEventListener("blur", function(event){
// 		this.focused = false;
// 		this.removeHelp();
// 		wrapper.playBarAnimation(false);
// 		if (input.value == "" || input.value == undefined || input.value == null) {
// 			wrapper.controlLabelPosition(false);
// 		}else{
// 			wrapper.controlLabelPosition(true);
// 		}
// 		wrapper.removeCounter();
// 		this.validateData();
// 		this.onBlur();
// 		wrapper.blur();
// 	}.bind(this));
// 	input.addEventListener("input", function(event){
// 		let value = event.target.value;
// 		if (attr.format == "numeric") {
// 			let num = Number(value);
// 			if (isNaN(num) == true) {
// 				input.value = this.value;
// 				return;
// 			}
// 		}else if (attr.format == "urlencodestring") {
// 			let query = /[!@#$%^&*(),/.?":{}|<>';]/g
// 			if (query.test(value)) {
// 				input.value = this.value;
// 				return;
// 			}
// 		}


// 		if (value != null || value != undefined) {			
// 			if(preventOverflow && input.value.length>maxChar){
// 				input.value = this.value;
// 				if (maxChar != null) {
// 					wrapper.setCounter(value.length, maxChar);
// 				}				
// 			}else{
// 				if (maxChar != null && input.value.length>maxChar) {
// 					wrapper.setCounter(value.length, maxChar);
// 				}else if(maxChar != null){
// 					wrapper.setCounter(value.length, maxChar);
// 				}
// 				this.value = value;
// 			}
// 			wrapper.emitValue(this);
// 			this.onValueChange(this.value);
// 		}
// 		this.validateData();
// 		this.onInput(this.value);
// 	}.bind(this));
// 	input.addEventListener("keyup", function(event){
// 		this.onKeyup(this.value, event);
// 	}.bind(this));
// 	input.addEventListener("change", function(event){
// 		this.onChange(this.value, event);
// 	}.bind(this));

// 	// Wrapper Alias ---
// 	this.wrapper = wrapper;
// 	this.setError = function(errorMessage){
// 		wrapper.setError(errorMessage);
// 	};
// 	this.removeError = function(){
// 		wrapper.removeError();
// 	};
// 	this.setHelp = function(helpText){
// 		wrapper.setHelp(helpText);
// 	};
// 	this.removeHelp = function(){
// 		wrapper.removeHelp();
// 	};
// 	this.setPrefix = function(prefixNode){
// 		wrapper.setPrefix(prefixNode);
// 	};
// 	this.setSuffix = function(suffixNode){
// 		wrapper.setSuffix(suffixNode);
// 	};
// 	this.enable = function(){
// 		this.disabled = false;
// 		element.classList.remove("disabled");
// 		input.removeAttribute("disabled");
// 		wrapper.enable();
// 	};
// 	this.disable = function(){
// 		this.disabled = true;
// 		element.classList.add("disabled");
// 		input.setAttribute("disabled", "disabled");
// 		this.removeError();
// 		wrapper.disable();
// 	};

// 	// Register the element --
// 	wrapper.registerInput(this);
// 	this.wrapper = wrapper;
	
// 	return this;
// }
// export default xTextBox;