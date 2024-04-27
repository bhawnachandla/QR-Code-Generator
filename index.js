// 1. Use the inquirer npm package to get user input.


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"


inquirer
    .prompt([
        {   message:"Type URL Here",
            name:"url"
        }
    ])

    .then((answers)=>{
        const url = answers.url;
        console.log("Entered URL:",url);
        var qr_svg=qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
          });
    })

    .catch((error)=>{
    if(error.isTtyError){
        // prompt could'nt rendered in current environment
    }
    else{
        // something went wrong
    }
});



