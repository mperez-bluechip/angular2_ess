System.register(['./app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_module_1;
    return {
        setters:[
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            from;
            '@angular/platform-browser-dynamic';
            platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    }
});
//# sourceMappingURL=main.js.map