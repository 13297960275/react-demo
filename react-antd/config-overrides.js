const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireDefinePlugin = require('react-app-rewire-define-plugin');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: { 
            "@primary-color": "#4D87FF", 
            "@link-color": "#1890ff",
            "@success-color": "#52c41a",
            "@warning-color": "#faad14",
            "@error-color": "#f5222d",
            "@font-size-base": "14px",
            "@heading-color": "rgba(0, 0, 0, .85)",
            "@text-color": "rgba(0, 0, 0, .65)",
            "@text-color-secondary ": "rgba(0, 0, 0, .45)",
            "@disabled-color ": "rgba(0, 0, 0, .25)",
            "@border-radius-base": "4px",
            "@border-color-base": "#d9d9d9",
            "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, .15)",
        },
    })(config, env);
    config = rewireDefinePlugin(config, env, {
        __DEV__: false
    });
    return config;
};