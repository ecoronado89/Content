const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {

    updateJob: false,
    viewport: 'device-small',

    specs: [
        './test/homepage_test.js',
        './test/VisaLayerModal_tests.js',
        './test/integration_tests/homepage_integration_test.js'
    ],
    capabilities: [
    //     {
    //     browserName: 'iPhone',
    //     platform: 'MAC',
    //     device: 'iPhone 6S Plus',
    //     acceptSslCerts: true,
    //     'browserstack.local': true,
    //     'browserstack.debug': true,
    //     localIdentifier: 'web-automation-wcm-landers',
    //     build: 'webdriver-browserstack'
    // },
        {
            browserName: 'iPad',
            platform: 'MAC',
            device: 'iPad Air 2',
            acceptSslCerts: true,
            'browserstack.local': true,
            'browserstack.debug': true,
            localIdentifier: 'web-automation-wcm-landers',
            build: 'webdriver-browserstack'
        }
    // , {
    //     browserName: 'android',
    //     platform: 'ANDROID',
    //     device: 'Samsung Galaxy S5',
    //     acceptSslCerts: true,
    //     'browserstack.local': true,
    //     build: 'webdriver-browserstack'
    // }
    ]
});
