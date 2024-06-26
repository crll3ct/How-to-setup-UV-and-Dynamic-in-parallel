self.__dynamic$config = {
    prefix: "/service/",
    encoding: "xor",
    mode: "production",
    logLevel: 3,
    bare: {
        version: 2,
        path: "/bare/",
    },
    tab: {
        title: "Service",
        icon: null,
        ua: null,
    },
    assets: {
        prefix: "/dynamic/",
        files: {
            handler: "dynamic.handler.js",
            client: "dynamic.client.js",
            worker: "dynamic.worker.js",
            config: "dynamic.config.js",
            inject: null,
        },
    },
};
