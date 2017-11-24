const header = require('web-automation-header').Header;
const category = require('web-automation-category-page').categoryPage;
const assert = require('assert');

let arr = [{}];
let str = '';

describe('CTTCM-1111', () => {
    before(() => {
        browser.url('/llb/shop/514129?featest=1');
        header.goToCategoryPage();
        arr = category.verifyThumbnailImages();
    });

    it('Thumbnail images appears correctly', () => {
        let passed = true;
        arr.forEach(element => {
            try {
                assert.equal(element.passed, true);
            } catch (e) {
                str += `${element.prodName}\n`;
                passed = false;
            }
        });
        assert(passed, `There are broken thubnails:\n${str}`);
    });
});
