const header = require('web-automation-header').Header;
const category = require('web-automation-category-page').categoryPage;
const assert = require('assert');
const expect = require('chai').expect;

const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

let arr = [true, true, true, false, true, false];
let str = '';

let defaultImage = '&defaultImage=llbstage//A0211793_2';

describe('CTTCM-1111', () => {
    before(() => {
       /*  browser.url('/llb/shop/514129?featest=1');
        header.goToCategoryPage();
        arr = category.verifyThumbnailImages(); */
    });

    it('should assert presence of all values in array', () => {
        let passed= true;
        arr.forEach(function(element){
            try {
                assert.equal(element, true, `NO PASO--------${element}\n`);
            }
            catch (e) {
                str += `${e.message}`;
                passed = false;
            }
        });
        assert(passed, `There are broken thubnails:\n${str}`);
});

});
