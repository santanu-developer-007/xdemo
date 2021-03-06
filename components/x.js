function x(options){
	function init(props, options){
		let component = {};

		// Binding Props --
		component.props = props;

		// Setting name --
		component.name = options.name;

		// Binding Data --
		if(options.data !== undefined){
			Object.keys(options.data).forEach(function(dataName){
				component[dataName] = options.data[dataName];
			});
		}

		// Binding Methods --
		if(options.methods !== undefined){
			Object.keys(options.methods).forEach(function(methodName){
				component[methodName] = options.methods[methodName];
			});
		}

		// Render --
		if(options.render != undefined){
			component.render = options.render;
			component.element = component.render();
		}

		// Apply root style --
		if(props.style != undefined){
			applyRootStyle(props, component);
		}		

		// Mounted --
		if(options.mounted != undefined){
			component.mounted = options.mounted;
			component.mounted();
		}

		// Check Option ClassNames --
		if(props.classNames != undefined){
			applyClassName(props, component);	
		}

		uniqueComponents(options);

		return component;
	};
	function applyClassName(props, component){
		let classNames = props.classNames.split(" ");
		classNames.forEach(function(name){
			component.element.classList.add(name);
		});
	}
	function applyRootStyle(props, component){
		component.element.setAttribute("style", props.style);
	}
	function uniqueComponents(options){
		let ucom = window['unique_components'];
		if(ucom == undefined){
			ucom = window['unique_components'] = new Set();
		}
		ucom.add(options.name);
	}
	
	return function(props){
		return init(props, options);
	}
}
export default x;