// import path
import path from "path";

// created entry for ./lib/app.js
// that is bundled into /dist/bundle.js
export default {
    entry : "./lib/app.js",
    output : {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    }
}
