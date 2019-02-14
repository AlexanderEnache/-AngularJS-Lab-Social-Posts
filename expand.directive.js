"use strict"

//difrective function must always return an object

function expand(){
	return{
		restrict: "A",
		link: function($scope, $element, $attrs){
			
			$element.on("focus", function(e){
				
				//console.log(e);
				
				$element.css("transform", "scale(2, 2)");
				
			});
			
			$element.on("blur", function(){
				
				$element.css("transform", "scale(1, 1)");
				
			});
		//console.log($scope);	
		//console.log($element);	
		//console.log($attrs);
		}
	};	
}

angular.module("socialPosts").directive("expand", expand);



