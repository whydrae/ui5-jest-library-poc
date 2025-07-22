import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import Page from "sap/m/Page";
import formatter from "myapp/model/formatter";

// This works in UI5 runtime, but not in Jest environment
import Example from "mylib/Example";

// This works in Jest environment, but not in UI5 runtime
// import Example from "mylib/dist/resources/mylib/Example";

/**
 * @namespace myapp.controller
 */
export default class Main extends BaseController {
	public onInit(): void {
		const example = new Example("myExample", {
			text: "Hello from the reusable library!",
		});
		const page = this.getView().byId("page") as Page;
		page.addContent(example);
	}

	public sayHello(): void {
		MessageBox.show(formatter.formatValue("Hello World!"));
	}
}
