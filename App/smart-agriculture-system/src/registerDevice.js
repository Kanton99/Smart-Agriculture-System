import { devices } from "./query";
import { genChart } from "./genGraphs";

export async function registerDevice(){
    let device = prompt("Enter device id","")

    if(device != null){
        if(!(devices.includes(device))){
            devices.push(device)
            localStorage.setItem("devices",JSON.stringify({"devices":devices}))
            await genChart()
            window.location.reload()
        }
    }
}