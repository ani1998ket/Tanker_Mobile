function loadScript(path){
    let scriptTag = document.createElement("SCRIPT");
    scriptTag.type = "text/javascript";
    scriptTag.src = path;
    scriptTag.async = false;
    document.body.appendChild(scriptTag);
}