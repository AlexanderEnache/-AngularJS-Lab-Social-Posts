"use strict"

//<input class = "textArea borderRad" expand ng-model = "post" type = "textarea">

const postForm = {
	
	bindings:{
		onSubmit: "&",
		hide: "<"
	},
	
	template: `
	
		<form ng-hide = "$ctrl.hide">
		
			<h1>Title</h1>
			<input class = "borderRad" expand ng-model = "tle" type = "textbox" placeholder = "Post Here">
			<h1>Thought</h1>
			<textarea class = "textArea borderRad" expand ng-model = "post" rows="40"></textarea>
			<button class = "formButton" ng-click = "$ctrl.onSubmit({ title: tle, post: post })">Add thought</button>
			
		</form>
	
	`
	
}

angular.module("socialPosts").component("postForm", postForm);