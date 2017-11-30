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
        const list = this.saleText;
        const prodN = this.productList;

        prodN.value.forEach(element => {
            this.products.push({ productName: element.getText(this.selectors.salecategory.productName), visible: element.element(this.selectors.salecategory.saleText).isVisible() });
        }, this);
        return this.products;
    }
}

module.exports = new SalesPage();
