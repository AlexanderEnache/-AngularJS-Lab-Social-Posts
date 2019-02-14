"use strict"

const post = {
	
	bindings: {
		pst: "<",
	},
	
	template: `
	
		<h3>{{$ctrl.pst.title}}</h3>
		
		<p>{{$ctrl.pst.post}}</p>
		
		<button class = "close">X</button>
	
	`
	
}

angular.module("socialPosts").component("post", post);