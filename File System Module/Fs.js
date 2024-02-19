const fs=require('fs')

// let file=fs.readFileSync('file.txt')  // read a data in file

// console.log("data -> " +file)

// fs.writeFileSync("file2.txt","Hi i am file 2") //create a file with data

// fs.appendFileSync("file2.txt"," Hi i am updated data") //update the file 

// fs.unlinkSync("file.txt")

// fs.writeFileSync("file.txt","Hi i am file ")

//Directories


let folderpath="C:\\Users\\Moulik LV\\OneDrive\\Desktop\\Node JS Scaler\\Modularity"

let foldercontent=fs.readdirSync(folderpath)

let exists=fs.existsSync(folderpath) // this gives dir is there or not

console.log("",foldercontent)

console.log(exists)