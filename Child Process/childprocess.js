const cp=require("child_process")

// cp.execSync("calc")

cp.execSync("start chrome google.com") //it start chrome directly

console.log("output",cp.execSync("node demo.js").toString())