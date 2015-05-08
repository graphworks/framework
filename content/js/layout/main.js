require.config({
	waitSeconds: 100,
	paths: {
        // define libs
        "jquery": "../modules/libs/jquery-v2.1.3.min",
        
        // define plugins
		"elements": "../modules/plugins/elements.min",
        "lightbox": "../modules/plugins/lightbox.min",
        "flickerplate": "../modules/plugins/flickerplate.min"
        
	},
    
    // load order, depencies
	shim: {
        
        // load libraries first
		"jquery": { exports: "jquery" },
        
        // load plugins
        "elements": { deps:['jquery'], exports: "elements" },
        "lightbox": { deps:['jquery'], exports: "lightbox" },
        "flickerplate": { deps:['jquery'], exports: "flickerplate" }
        
	},
	deps: ["../core/app-main"]
});