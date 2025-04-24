const { createClient } = require("redis");

const redisClient = createClient({
  url: "redis://localhost:6379"
});

redisClient.connect();

redisClient.on("connect", () => {
  console.log("Connected to Redis ✅");
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error ❌", err);
});

module.exports = redisClient;