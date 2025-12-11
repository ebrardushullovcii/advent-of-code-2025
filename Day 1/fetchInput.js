const https = require("https");

function fetchInput() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "adventofcode.com",
      path: "/2025/day/1/input",
      method: "GET",
      headers: {
        Cookie:
          "session=53616c7465645f5f729ed79e9d3758606342e9b9fcae677765c3444584f08a8d6a6cce3db4927d15d7683b2d5593d869b4a91e94be2098aa43dad87bd36d8f5d",
      },
    };

    const req = https.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("statusCode=" + res.statusCode));
      }

      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        resolve(data);
      });
    });

    req.on("error", (e) => {
      reject(e);
    });

    req.end();
  });
}

module.exports = fetchInput;
