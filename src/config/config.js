const config = {
    production: {
        port: 1234,
    },
    development: {
        port: 5000,
    }
};

module.exports = config[process.env.node_env || 'development'];
