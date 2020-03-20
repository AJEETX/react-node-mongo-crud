let environment = "dev";

let serverURLs = {
    "dev": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "4200",
        "MONGO_DB": 'mongodb://deployment:kaur%40123@ds331145.mlab.com:31145/secondcars'       
    }
}

let config = {
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environment].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs[environment].NODE_SERVER}`
    },
    "DB_URL": {
        "url": `${serverURLs[environment].MONGO_DB}`
    },
};

module.exports = {
    config: config
};
