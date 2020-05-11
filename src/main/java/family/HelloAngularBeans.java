package family;

import angularBeans.api.AngularBean;

@AngularBean
public class HelloAngularBeans {

	
	
	public String sayHello(String name) {

		return "hello " + name + " from AngularBeans !";

	}

}
