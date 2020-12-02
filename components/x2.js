function x(options){
	this.init = function(){
		options.component.render();
		options.component.init();
		this.uniqueComponents();
		this.setComponentName();
		this.applyRootStyle();
		this.applyClassName();
		if(options.watch != undefined){
			var targetProxy = new Proxy(options.component.props, {
			  	set: function (target, key, value) {
			  		console.log("okay");
			  		target[key] = value;
			  		// check if key is the watcher --
			  		if(options.watch[key] != undefined){
			  			options.watch[key]();
			  		}
			      	return true;
			  	}
			});
		}
	};
	this.setComponentName = function(){
		options.component._component_name = options.name;
	};
	this.uniqueComponents = function(){
		let ucom = window['unique_components'];
		if(ucom == undefined){
			ucom = window['unique_components'] = new Set();
		}
		ucom.add(options.name);
	};
	this.applyRootStyle = function(){
		let style = options.component.props.style;
		if(style != undefined){
			options.component.element.setAttribute("style", style);
		}
	};
	this.applyClassName = function(){
		if(options.component.props != undefined && options.component.props.classNames != undefined){
			let classNames = options.component.props.classNames.split(" ");
			classNames.forEach(function(name){
				options.component.element.classList.add(name);
			});
		}
	}
	this.init();
	return options.component;
}
export default x;