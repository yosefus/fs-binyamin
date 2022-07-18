const
   express = require("express"),
   app = express(),
   fs = require("fs")


app.get("/users", (req, res) => res.send("user"))

app.use((req, res, next) => {
   try {
      let logs = []
      if (fs.existsSync("root/loger.json"))
         logs = require("./root/loger.json")

      logs.push({ url: req.originalUrl, date: Date.now() })
      fs.writeFileSync("root/loger.json", JSON.stringify(logs))
   } catch (error) {

   }
   next()
})

app.listen(3001, () => console.log("somthing"))