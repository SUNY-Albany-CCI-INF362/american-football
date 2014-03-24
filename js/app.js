$(document).foundation();

var menu_logic = function(selection) {
	if (selection === "Timeline") {
		return $('.body').load("timeline.html");
	}
	if (selection === "Resources") {
		return $('.body').load("resources.html");
	}
	if (selection === "About") {
		return $('.body').load("about.html");
	}
	if (selection === "Housing Resources") {
		return $('.body').load("resources.html");
	}
};