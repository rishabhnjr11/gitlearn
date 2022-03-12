const fs=require("fs"); //fsmodule
const path=require("path") //pathmodule
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}
function organise(srcPath){
    if(srcPath==undefined){
        //the process.cwd() method returns the current workingdirectory of the Node.js process.
        //console.log(srcpath); //undefined 
        srcPath=process.cwd();
        //console.log(srcPath);
    }
    let organisedFiles = path.join(srcPath,"organized_files");
    // console.log('organised files folder path is ", organisedFiles);
    if(fs.existsSync(organisedFiles)==false){//organisedfiles naam ka folder exist nhi krta to ek folder 
    //bana do warna rhne do
        fs.mkdirSync(organisedFiles);
    }
    else console.log("folder already exits");

}
