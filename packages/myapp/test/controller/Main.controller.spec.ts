import Page from "sap/m/Page";
import MainController from "../../webapp/controller/Main.controller";
import View from "sap/ui/core/mvc/View";

describe("TestController", () => {
	it("should create an instance of Main controller", () => {
		const controller = new MainController("");

		const pageMock = {
			addContent: jest.fn(),
		} as unknown as Page;

		const viewMock = {
			byId: jest.fn().mockReturnValue(pageMock),
		} as unknown as View;

		jest.spyOn(controller, "getView").mockReturnValue(viewMock);

		controller.onInit();

		expect(controller).toBeInstanceOf(MainController);
	});
});
