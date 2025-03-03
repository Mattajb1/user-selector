let users = [
    //TODO INSERT DATA
]

const existingOverlay = document.getElementById("customOverlay");

if (existingOverlay) {
    existingOverlay.remove(); 
} else {
    const overlay = document.createElement("div");
    overlay.id = "customOverlay"; 
    overlay.style.cssText = `
        width: 100%;
        height: 100%;
        background-color: #15151594;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    `;
    document.body.appendChild(overlay);
}