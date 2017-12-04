const footer = require('web-automation-footer').Footer;

describe('CTTCM-1621', () => {
    before(() => {
        browser.url('/');
        browser.moveToObject('.global-footer');
        browser.pause(4000);
    })
});