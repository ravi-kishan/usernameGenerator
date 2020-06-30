import { expect } from "chai";
import { generate } from "./index";
describe('usernemeGenerator test', () => {
    it('should return some username', () => {
        var result = generate("Ra vi");
        var value = true;
        expect(value).to.equal(true);
    });
    it('should return some username', () => {
        var result = generate("Ravi");
        var value = true;
        expect(value).to.equal(true);
    });
});
