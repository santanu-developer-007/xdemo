import x from "../../x.js";
import { Column, Div, MaterialIcon, Empty, Row, Text } from "../../core";

export default x({
	name: "InputWrapper",
	data: {
		inputContainer: null,
		iconPrefixContainer: null,
		icon: null,
		fieldContainer: null,
		label: null,
		inputField: null,
		bar: null,
		infoSection: null,
		infoText: null,
		counterContainer: null
	},
	render(){
		// Label --
		if(this.props.label == undefined){
			this.label = new Empty({});
		}else{
			this.label = new Row({
				classNames: "input_wrapper_label",
				children: [
					new Text({child: this.props.label }),
					(this.props.required == true) ? new Empty({}) : new Text({ classNames: "xInputRequiredMark", child: "*"})
				]
			});
		}

		// Icon --
		if(this.props.material_icon == undefined){
			this.icon = new Empty({});
		}else{
			this.icon = new Div({
				classNames: "icon_prefix_container",
				child: MaterialIcon({
					child: this.props.material_icon,
				}),
			});			
		}

		// Input container --
		this.inputContainer = new Row({
			classNames: "input_container",
			children: [
				this.icon,
				new Column({
					classNames: "field_container",
					children: [
						this.label,
						new Div({
							classNames: "input_field",
							child: this.props.child,
						})
					]
				}),
				new Div({
					classNames: "input_bar",
					child: new Empty({})
				})
			]
		});

		let dom = new Column({
			classNames: "input_wrapper",
			children: [
				this.inputContainer,
				// info --
				new Row({
					classNames: "input_wrapper_info_section",
					children: [
						new Div({
							classNames: "input_wrapper_info_text",
							child: new Empty({}),
						}),
						new Div({
							classNames: "counter_container",
							child: new Empty({}),
						})
					]
				})
			]
		});

		return dom.element;
	},
	mounted(){
		if (this.props['expand-collapse-icon'] == true) {
			this.element.classList.add("showExpand");
		}
		// Watching --
		if(this.props.label !== undefined){
			this.label.element.addEventListener("click", function(event){
				this.focus();
				if(this.props.onLabelClick !== undefined){
					this.onLabelClick(event);	
				}				
			}.bind(this));	
		}		
	},
	methods: {
		setInput(inputNode){
			inputField.appendChild(inputNode);
		},
		controlLabelPosition(forceRaised){
			let left = iconPrefixContainer.clientWidth;
			if (forceRaised) {
				label.classList.add("raised");
				label.style.left = "-" + left + "px";
			}else{
				label.classList.remove("raised");
				label.style.left = "0px";
			}
		},
		playBarAnimation(control){
			if (control == true) {
				bar.classList.add("active");
			}else{
				bar.classList.remove("active");
			}
		},
		setCounter(first, second){
			if (second == undefined) {
				counterContainer.textContent = first;
			}else{
				counterContainer.textContent = first + "/" + second;
			}
		},
		removeCounter(){
			counterContainer.textContent = "";
		},
		setError(errorMessage){
			element.classList.add("error");
			infoText.classList.remove("help");
			infoText.classList.add("error");
			infoText.textContent = errorMessage;
		},
		removeError(){
			element.classList.remove("error");
			infoText.classList.remove("error");
			infoText.textContent = "";
		},
		setHelp(helpMessage){
			infoText.textContent = helpMessage;
			infoText.classList.remove("error");
			infoText.classList.add("help");
		},
		removeHelp(){
			infoText.classList.remove("help");
			infoText.textContent = "";
		},
		registerInput(component){
			let node = component.element;
			// Registering the element to the closest form element --
			if (node.closest("form") != null) {
				let form = node.closest("form");
				if (form.inputs == undefined) {
					form.inputs = {};
				}
				form.inputs[node.getAttribute("name")] = component;
			}

			// Firing InputInitialized --
			let data = {};
			data[node.getAttribute('name')] = component.value;
			node.dispatchEvent(new CustomEvent("inputinitialized", {
				bubbles : true,
				cancelable : false,
				detail : data
			}));
		},
		enable(){
			element.classList.remove("disabled");
		},
		disable(){
			element.classList.add("disabled");
		},
		focus: function(){
			if (this.props['expand-collapse-icon'] == true) {
				this.inputContainer.element.classList.add("expand");
			}
		},
		blur(){
			if (this.props['expand-collapse-icon'] == true) {
				this.inputContainer.element.classList.remove("expand");
			}
		},
		addLoading(){
			bar.classList.add("barAnimation");
		},
		removeLoading(){
			bar.classList.remove("barAnimation");
		},
		setPrefix(prefixNode){
			iconPrefixContainer.appendChild(prefixNode);
		},
		setSuffix(suffixNode){
			inputContainer.appendChild(suffixNode);
		},
		emitValue(component){
			let data = {};
			data[component.element.getAttribute('name')] = component.value;
			component.element.dispatchEvent(new CustomEvent("value", {
				bubbles: true, 
				cancelable: false,
				detail : data
			}));
		},
		validateData(data, validations){
			let hasError = false;
			let keys = Object.keys(validations);
			for(let i=0; i<keys.length; i++){
				let validationName = keys[i];
				if (validationName == "required") {
					if (data == "" || data == undefined || data == null) {
						hasError = true;
						this.setError(validations.required.message);
						return false;
					}
				}else if (validationName == "email") {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					if (!pattern.test(data)){
						hasError = true;
						this.setError(validations.email.message);
					}
				}else if (validationName == "number") {
					let d = Number(data);
					if (isNaN(d) == true) {
						hasError = true;
						this.setError(validations.number.message);
					}
				}
			}
			if (hasError == true) {
				return false;
			}else{
				this.removeError();	
				return true;
			}
		},
	}
});