import Example from "../src/Example";

describe("Example Control", () => {
	it("should create an instance of Example", () => {
		const example = new Example();
		expect(example).toBeInstanceOf(Example);
	});
});
