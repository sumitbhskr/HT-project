"use server"
import fs from "fs/promises"
export const SubmitAction = async (e) => {

    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("herry.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`)
    
}