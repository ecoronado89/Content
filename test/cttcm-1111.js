const header = require('web-automation-header').Header;
const category = require('web-automation-category-page').categoryPage;
const sales = require('../src/Sales');
const assert = require('assert');
require('it-each')();
require('it-each')({ testPerIteration: true });

let arr = [{}];
let finnished = [{}];
let str = '';
const saleArray = ['514293', '510312', '504987'];

describe('CTTCM-1111', () => {
    before(() => {
        browser.url('/');
        header.goToCategoryPage();
        arr = category.verifyThumbnailImages();
    });

    it('Thumbnail images appears correctly', () => {
        let passed = true;
        arr.forEach(element => {
            if (element.passed === false) {
                str += `${element.prodName}\n`;
                passed = false;
            }
        });
        assert(passed, `There are broken thubnails:\n${str}`);
    });

    it.each(saleArray, 'Merch text on page %s', ['element'], element => {
        let temp = true;
        browser.url(`llb/shop/${element}&tealium=off`);
        browser.waitUntil(() => {
            finnished = sales.isSaleTextDisplayed();
            finnished.forEach(index => {
                if (index.visible === false) {
                    str += `${index.productName}\n`;
                    temp = false;
                }
            });
            finnished = [];
            return finnished;
        });
        assert(temp, `Page ${element} - Redline pricing is not visible on:\n${str}`);
    });
});
