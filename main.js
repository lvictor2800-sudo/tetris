const {
    app,
    BrowserWindow
} = require("electron");

const path =
    require("path");


function createWindow() {

    const win =
        new BrowserWindow({

            width: 1100,

            height: 900,

            minWidth: 900,

            minHeight: 750,

            resizable: false,

            autoHideMenuBar: true,

            backgroundColor: "#050505",

            title: "TETRIS",

            webPreferences: {

                contextIsolation: true,

                nodeIntegration: false

            }

        });


    win.loadFile(
        path.join(
            __dirname,
            "index.html"
        )
    );

}


app.whenReady().then(
    createWindow
);


app.on(
    "window-all-closed",
    () => {

        if (
            process.platform !== "darwin"
        ) {

            app.quit();

        }

    }
);