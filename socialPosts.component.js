"use strict"

// <post-form 		ng-repeat = "post in $ctrl.posts" pst = $ctrl.posts[$index]		>

const socialPosts = {
	
	template: `
	
	<div class = "divAll">
	
	<h1 class = "rel" style = "font-family: 'Homemade Apple', cursive;">My Thoughts</h1>
		
		<button class = "topPart" ng-click = "$ctrl.hide()">New Thoughts</button>
		
		<div class = "centerDiv">
			<post class = "post" ng-repeat = "post in $ctrl.posts" pst = $ctrl.posts[$index]></post>
		</div>
		
	</div>
	
	<post-form ng-class = "{ hide : isHide }" on-submit = "$ctrl.add(title, post)" hide = "$ctrl.isHide"></post-form>
	
	`,
	
	controller: [function(){
		
		const vm = this;
		
		vm.isHide = true;
		
		vm.posts = [];
		
		vm.add = function(title, post){
			
			console.log(title, post);
			
			vm.posts.push({
				title: title,
				post: post
			});
			
			vm.isHide = true;
			
		}
		
		vm.hide = function(){
			
			vm.isHide = false;
			
		}
		
	}]
	
}

angular.module("socialPosts").component("socialPosts", socialPosts);

