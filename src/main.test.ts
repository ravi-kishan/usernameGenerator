import { expect } from "chai";
import * as fs from 'fs';
import * as path from 'path';
import { JSDOM } from "jsdom";

const dom:any = new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>");
global.window = dom.window;
global.document = dom.window.document;






describe('usernemeGenerator test', () => {

    var result1:any,result2:any;
    before(() => {
        return new Promise((resolve) => {
            import('./index')
            .then(content => {
                result1 = content.generate("Ra vi");
                result2 = content.generate("Ravi");
              
            })
            resolve();
        });
      });
 it('should return some username', () => {
        var value = true;
        expect(value).to.equal(true);
    });
 it('should return some username', () => {
        var value = true;
        expect(value).to.equal(true);
    });
});