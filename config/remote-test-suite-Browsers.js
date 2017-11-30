const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');
const base = require('web-automation-base').Environments;

exports.config = merge(wdioConf.config, {

    updateJob: false,
    viewport: 'xsmall',
    specs: [
        // './test/*_test.js'
        './test/cttcm-1111.js'
    ],
    commonCapabilities: {
        name: 'Web-Automation-Header',
        'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
        acceptSslCerts: true,
        'browserstack.local': true,
        'browserstack.debug': true,
        build: 'WebdriverIO-Browserstack'
    },
    capabilities: [{
        os: 'Windows',
        os_version: '7',
        browser: 'Chrome',
        browser_version: '56.0',
    },
    {
        os: 'Windows',
        os_version: '10',
        browser: 'Firefox',
        browser_version: '56.0',
    },
    {
        os: 'Windows',
        os_version: '10',
        browser: 'Edge',
        browser_version: '15.0',
    },
    {
        os: 'OS X',
        os_version: 'Sierra',
        browser: 'Safari',
        browser_version: '10.1',
    },
    {
        os: 'Windows',
        os_version: '10',
        browser: 'IE',
        browser_version: '11.0',
    }
    ],


    beforeSuite() {
        if (process.env.VIEWPORT != null) {
            const viewport = base.setViewports(process.env.VIEWPORT);
            browser.setViewportSize({ width: viewport[0], height: viewport[1] });
        }
    }
});

exports.config.capabilities.forEach(caps => {
    for (const i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
