const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');
const base = require('web-automation-base').Environments;

exports.config = merge(wdioConf.config, {

    updateJob: false,
    viewport: 'xsmall',
    specs: [
        // './test/*_test.js'
        './test/homepage_test.js'
    ],
    capabilities: [{
        os: 'Windows',
        os_version: '7',
        browser: 'Chrome',
        browser_version: '56.0',
        acceptSslCerts: true,
        'browserstack.local': true,
        'browserstack.debug': true,
        localIdentifier: 'web-automation-wcm-landers',
        build: 'webdriver-browserstack'
    }, {
        os: 'Windows',
        os_version: '10',
        browser: 'Firefox',
      //  browser_version: '47.0',
        acceptSslCerts: true,
        'browserstack.local': true,
        'browserstack.debug': true,
        localIdentifier: 'web-automation-wcm-landers',
        build: 'webdriver-browserstack'
    },
    {
        os: 'Windows',
        os_version: '10',
        browser: 'Edge',
        browser_version: '15.0',
        resolution: '1024x768',
        acceptSslCerts: true,
        'browserstack.local': true,
        'browserstack.debug': true,
        localIdentifier: 'web-automation-wcm-landers',
        build: 'webdriver-browserstack'
    },
    {
        os: 'OS X',
        os_version: 'Sierra',
        browser: 'Safari',
        browser_version: '10.1',
        resolution: '1024x768',
        acceptSslCerts: true,
        'browserstack.local': true,
        'browserstack.debug': true,
        localIdentifier: 'web-automation-wcm-landers',
        build: 'webdriver-browserstack'
    },
    {
        os: 'Windows',
        os_version: '10',
        browser: 'IE',
        browser_version: '11.0',
        resolution: '1024x768',
        acceptSslCerts: true,
        'browserstack.local': true,
        'browserstack.debug': true,
        localIdentifier: 'web-automation-wcm-landers',
        build: 'webdriver-browserstack'
    }
    ],

    beforeSuite() {
        if (process.env.VIEWPORT != null) {
            const viewport = base.setViewports(process.env.VIEWPORT);
            browser.setViewportSize({ width: viewport[0], height: viewport[1] });
        }
    }
});
