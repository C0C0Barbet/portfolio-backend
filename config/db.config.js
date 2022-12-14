/*

max: maximum number of connection in pool
min: minimum number of connection in pool
acquire: maximum time, in milliseconds, that a connection can be idle before being released
idle: maximum time, in milliseconds, that pool will try to get connection before throwing error
*/

module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "0608",
    DB: "portfoliodb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};