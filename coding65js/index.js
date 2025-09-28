// import fs from "fs/promises"
// import fsn from "fs"
// import path from "path"

// const basepath = "c:\\users\\iitia\\Downloads\\sigma Web Devlopment Course\\sigma-Web-Dev-Course\\video 93"

// let files = await fsn.readdir(basepath)

// for (const item of files) {
//     console.log("running for ",item)
//     let ext = item.split(".")[ item.split(".").length - 1]
//     if (ext != "js" && ext != "json" && item.split(".").length >1) {

//         if(fsn.existsSync(path.join(basepath, ext))) {
//         //move the file to this directory if its not a js or json file
//         fs.rename(path.join(basepath, item), path.join(basepath,ext, item))
//         }
//         else {
//              fs.mkdir(ext) 
//              fs.rename(path.join(basepath, item), path.join(basepath,ext, item))
        
//         }
//     } 
// }


import fs from "fs/promises";
import fsSync from "fs";
import path from "path";

const basepath = "C:\\Users\\DELL\\Downloads\\sigma Web Devlopment Course\\sigma-Web-Dev-Course\\video 93";

try {
  // read directory (promise API)
  const items = await fs.readdir(basepath);

  for (const item of items) {
    const fullPath = path.join(basepath, item);

    // skip if it's a directory (we only want files)
    const stat = await fs.stat(fullPath);
    if (stat.isDirectory()) {
      // console.log("Skipping directory:", item);
      continue;
    }

    // get extension (without the leading dot)
    const extWithDot = path.extname(item); // e.g. ".js"
    if (!extWithDot) continue; // no extension, skip

    const ext = extWithDot.slice(1); // "js", "png", etc.

    // ignore js and json
    if (ext === "js" || ext === "json") continue;

    const targetDir = path.join(basepath, ext);

    // create target dir if not exists (use fsSync.existsSync for sync check)
    if (!fsSync.existsSync(targetDir)) {
      await fs.mkdir(targetDir, { recursive: true });
    }

    // move the file (rename)
    const targetPath = path.join(targetDir, item);
    await fs.rename(fullPath, targetPath);
    console.log(`Moved ${item} -> ${path.join(ext, item)}`);
  }
  console.log("Done.");
} catch (err) {
  console.error("Error:", err);
}
