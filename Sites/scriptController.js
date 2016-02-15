var myAppModule = angular.module("myApp", []);

myAppModule.controller('mainController', function($scope) //controller for the view; constructor function
{
	var employee = {
		firstName: "David",
		lastName: "Hastings",
	};
	$scope.message = "I love Steinway pianos!";
	$scope.employee = employee; //attached the employee to the scope
	//we will use data binding expressions in the view (the html)    {{  }}
})  //  employee is actually called a model

//ng_controller was used to attach the controller to the DOM , instantiates it too using the Ctor
//a new child scope will be created and made available as an injectable parameter to the ctor function!
//controller sets up initial state of the $scope
//add behavior to the $scope
//only business logic should be in the controller, NO PRESENTATION LOGiC

//databinding and directives are used to encapsulate DOM manipulation
//not for formatting input USe angular form controls instead
//filter output - use angular FILTERS instead
//share code or state across controllers - USE ANGULAR services instead
//manage the life=cycle of other components (to not use to create service instances)
myAppModule.filter('greet', function()  {  //just say 'ITs a FUNCTION!'
	
	return function(name) {

		return 'Hello, ' + name + '!';
	}
})

var searchPeople = function(firstname, lastName, height, age, occupation ) 
{
	return 'Jane Doe';
}
console.log(searchPeople(1,2,3,4,5));