const fs = require("fs");

fs.writeFileSync("data.txt", "Hi i am dipanshu");

const d = fs.writeFile("data.json", json.stringify(obj), (err) =>
  console.log(err)
);

const data = fs.readFileSync("data.json", { enconding: "UTF-8" }, (err, data) =>
  console.log(data)
);
console.log(data);

fs.rm("data.json", (err) => {
  console.log(err);
});

const removeFilePromisified = util.promisify(fs.rm);

try {
  const d = removeFilePromisified("data.json");
} catch {
  console.log(err);
}
// path module
// const path = require("path");

// //give current directory/folder
// console.log(__dirname);
// //give top level parent directory
// console.log(path.resolve());
// console.log(path.dirname("index.js")); // same as "__dirname" functionality
// console.log(path.extname("index.js"));
// console.log(path.relative("index.js", "C:\Users\Lenovo\Desktop\Devtown Fswd\fswd-devtown\utils.js"));
// console.log(path.join(path.resolve(), "index.js"));

// os module
// const os = require("os");

// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.version());
// console.log(os.release());
// console.log(os.arch());
// console.log(os.cpus());

// // console.log(module);

// // const a = 10;
// // const b = 20;

// // add(a, b);

// const val = require("./utils.js");

// val();
// // console.log(val.add(10, 20));
// // console.log(val.mul(10, 20));

// const os = require("os");
// console.log(os.uptime());
