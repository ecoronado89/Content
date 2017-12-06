const footer = require('web-automation-footer').Footer;
const assert = require('assert');

describe('CTTCM-1621', () => {
    before(() => {
        browser.url('/');
        browser.moveToObject('.global-footer');
        browser.pause(4000);
    });

    it('Shipping - Free Shipping', () => {
        const statusCode = footer.verifyURL('Free Shipping');
        assert.equal(statusCode, 200);
    });

    it('Shipping - More Shipping Information', () => {
        const statusCode = footer.verifyURL('More Shipping Information');
        assert.equal(statusCode, 200);
    });

    it('Guarantee - Our Guarantee', () => {
        const statusCode = footer.verifyURL('Our Guarantee');
        assert.equal(statusCode, 200);
    });

    it('Guarantee - Returns', () => {
        const statusCode = footer.verifyURL('Returns');
        assert.equal(statusCode, 200);
    });

    it('Stores and Events - Find a Store', () => {
        const statusCode = footer.verifyURL('Find a Store');
        assert.equal(statusCode, 200);
    });

    it('Stores and Events - Bootmobile', () => {
        const statusCode = footer.verifyURL('Bootmobile');
        assert.equal(statusCode, 200);
    });

    it('About Us - Blog', () => {
        const statusCode = footer.verifyURL('Blog');
        assert.equal(statusCode, 200);
    });

    it('About Us - Videos', () => {
        const statusCode = footer.verifyURL('Videos');
        assert.equal(statusCode, 200);
    });

    it('About Us - Newsroom', () => {
        const statusCode = footer.verifyURL('Newsroom');
        assert.equal(statusCode, 200);
    });

    it('About Us - Jobs', () => {
        const statusCode = footer.verifyURL('Jobs');
        assert.equal(statusCode, 200);
    });

    it('About Us - L.L.Bean Catalogs', () => {
        const statusCode = footer.verifyURL('L.L.Bean Catalogs');
        assert.equal(statusCode, 200);
    });

    it('Explore the Outdoors - ODS', () => {
        const statusCode = footer.verifyURL('ODS');
        assert.equal(statusCode, 200);
    });

    it('Explore the Outdoors - Outdoor TV Show', () => {
        const statusCode = footer.verifyURL('Outdoor TV Show');
        assert.equal(statusCode, 200);
    });

    it('Explore the Outdoors - Maine Lodging', () => {
        const statusCode = footer.verifyURL('Maine Lodging');
        assert.equal(statusCode, 200);
    });

    it('Explore the Outdoors - ParkFinder', () => {
        const statusCode = footer.verifyURL('ParkFinder');
        assert.equal(statusCode, 200);
    });

    it('L.L.Bean Visa - Learn More', () => {
        const statusCode = footer.verifyURL('Learn Moder');
        assert.equal(statusCode, 200);
    });

    it('L.L.Bean Visa - Coupon Lookup', () => {
        const statusCode = footer.verifyURL('Coupon Lookup');
        assert.equal(statusCode, 200);
    });

    it('L.L.Bean Visa - Manage Your Visa Account', () => {
        const statusCode = footer.verifyURL('Manage Your Visa Account');
        assert.equal(statusCode, 200);
    });

    it('Gifts - Gift Shop', () => {
        const statusCode = footer.verifyURL('Gift Shop');
        assert.equal(statusCode, 200);
    });

    it('Gifts - Gift Card', () => {
        const statusCode = footer.verifyURL('Gift Card');
        assert.equal(statusCode, 200);
    });

    it('Gifts - Gift Card Balance', () => {
        const statusCode = footer.verifyURL('Gift Card Balance');
        assert.equal(statusCode, 200);
    });

    it('Social Media - Twitter', () => {
        const statusCode = footer.verifyURL('Twitter');
        assert.equal(statusCode, 200);
    });

    it('Social Media - Facebook', () => {
        const statusCode = footer.verifyURL('Facebook');
        assert.equal(statusCode, 200);
    });

    it('Social Media - Pinterest', () => {
        const statusCode = footer.verifyURL('Pinterest');
        assert.equal(statusCode, 200);
    });

    it('Social Media - Google+', () => {
        const statusCode = footer.verifyURL('Google+');
        assert.equal(statusCode, 200);
    });

    it('Social Media - Instagram', () => {
        const statusCode = footer.verifyURL('Instagram');
        assert.equal(statusCode, 200);
    });

    it('Bottom Links - Mobile Site', () => {
        const statusCode = footer.verifyURL('Mobile Site');
        assert.equal(statusCode, 200);
    });

    it('Bottom Links - Mobile App', () => {
        const statusCode = footer.verifyURL('Mobile App');
        assert.equal(statusCode, 200);
    });

    it('Bottom Links - Site Map', () => {
        const statusCode = footer.verifyURL('Site Map');
        assert.equal(statusCode, 200);
    });

    it('Bottom Links - Security', () => {
        const statusCode = footer.verifyURL('Security');
        assert.equal(statusCode, 200);
    });

    it('Bottom Links - Privacy Policy', () => {
        const statusCode = footer.verifyURL('Privacy Policy');
        assert.equal(statusCode, 200);
    });

    it('Bottom Links - Recall & Safety Info', () => {
        const statusCode = footer.verifyURL('Recall & Safety Info');
        assert.equal(statusCode, 200);
    });

    it('Bottom Links - Transparency Act', () => {
        const statusCode = footer.verifyURL('Transparency Act');
        assert.equal(statusCode, 200);
    });

    it('Bottom Links - Paypal', () => {
        const statusCode = footer.verifyURL('Paypal');
        assert.equal(statusCode, 200);
    });

});
