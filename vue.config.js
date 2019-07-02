module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        // Note does not work with alias removal either
        // config.resolve.alias.store.delete('@');
    },
    runtimeCompiler: true,
};
