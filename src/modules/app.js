(function(global){
    var markdown = global.markdown = angular.module('markdown', ['ui.router', 'markdown.directives', 'markdown.studio']);
    var fs = require('fs'),
        baseModuleDir = './src/modules/';
        
    markdown.storeDir =  nw.App.dataPath; // data storage path

    // 引入模块,模块内js文件会被自动加载到页面中
    // 无需将模块的js直接写在index.html中引入
    markdown.regModule = function (name, reqModule) {
        markdown[name] = angular.module('markdown.' + name, reqModule || []);
        markdown[name].moduleName = name;
        //模块存储数据的目录
        markdown[name].dataPath = markdown.storeDir + '/' + markdown[name].moduleName;
        fs.readdirSync(baseModuleDir + name).forEach(function (file) {
            if (~file.indexOf('.js')) {
                document.write('<script src="modules/' + name + '/' + file + '"></script>');
            }
        });
     };

     // 引入模块
     markdown.regModule('studio');

     // routes
     markdown.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/studio");
     }]);

})(this);