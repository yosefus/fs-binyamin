const fs = require("fs")

// check + write folders
if (!fs.existsSync("root"))
   fs.mkdirSync("root")

// console.log(fs.existsSync("root/LOG.json"));

// write files
fs.writeFileSync("root/name.txt", "my name is avi גגג")

// add to file
fs.appendFileSync("root/name.txt", "\nand you are not")

// read file
const text = fs.readFileSync("root/name.txt", { encoding: "utf-8" })
// console.log(text);

// read files in folder
const files = fs.readdirSync("root")
console.log(files);

// delete files
// files.forEach(file => fs.unlinkSync(`root/${file}`))

// delete folders
// fs.rmdirSync("root")

fs.writeFileSync("root/log.json", JSON.stringify({ error: "some error" }))
const x = require("./root/log.json")
console.log(x);

fs.renameSync("root/log.json", "root/LOG.json")

