exports.decorateBrowserOptions = (defaults) => {
	return Object.assign({}, defaults, {
		frame: true,
		titleBarStyle: "default",
		autoHideMenuBar: true,
		title: "Terminal",
		transparent: false
	})
}
exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		css: `
		  ${config.css || ''}
			.hyper_main {
				border: none;
			}
			.header_windowHeader {
				display: none;
			}
			.terms_terms {
				margin-top: 0px;
			}
			.terms_termsShifted {
				margin-top: 34px;
			}
			.tabs_nav {
				position: unset;
			}
		`
	})
}
exports.getTabsProps = (parentProps, props) => {
	let title = 'Hyper';
	if (props.tabs.length == 1 && props.tabs[0].title) {
		title = props.tabs[0].title;
	}	else if (props.tabs.length > 1) {
		let active = props.tabs.find((tab) => tab.isActive && tab.title);
		if (active) title = active.title;
	}
	window.document.title = title
	return props
}