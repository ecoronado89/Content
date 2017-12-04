const selectors = require('web-automation-selectors').salesPageEcomm;

const products = [];

class SalesPage {
    constructor() {
        this.selectors = selectors;
        this.products = products;
    }

    get productList() {
        return browser.elements(this.selectors.salecategory.listItem);
    }

    get productName() {
        return browser.elements(this.selectors.salecategory.productName);
    }
    get saleText() {
        return browser.elements(this.selectors.salecategory.redlinePrice);
    }

    isSaleTextDisplayed() {
        browser.pause(10000);
        const list = this.saleText;
        const prodN = this.productList;

        for(let i  = 0; i < prodN.value.length; i += 1) {
            this.products.push({ productName: prodN.value[i].getText(this.selectors.salecategory.productName), visible: prodN.value[i].isVisible(this.selectors.salecategory.saleText)});
        }
        this.products.pop();
        console.log(this.products);
        return this.products;
    }
}

module.exports = new SalesPage();
