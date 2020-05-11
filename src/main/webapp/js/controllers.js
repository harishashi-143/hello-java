function MyCtrl($scope,helloAngularBeans){
	
	function sayHello(name){
		helloAngularBeans.sayHello(name).then(
				function(response){$scope.message=response;}
		);
	};
	
	$scope.sayHello=sayHello;
	
	
};
