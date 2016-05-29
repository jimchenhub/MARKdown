(function(){
    var win = nw.Window.get(), 
    winMaximize = false;

    angular.module('markdown.directives',[])
    // 最小化窗口
    .directive('markdownMinisize', [function(){
        return function(scope, elem){
            $(elem[0]).on('click', function(){
                win.minimize();
            });
        };
    }])
    //最大化与还原窗口
    .directive('markdownMaxToggle', [function(){
        return function(scope, elem){
            win.on('maximize', function () {
                winMaximize = true;
                $(elem[0]).find('i').removeClass('glyphicon-fullscreen').addClass('glyphicon-resize-small');
            });
            win.on('restore', function () {
                winMaximize = false;
                $(elem[0]).find('i').removeClass('glyphicon-resize-small').addClass('glyphicon-fullscreen');
            });
                    //切换窗口状态
            $(elem[0]).on('click', function () {
                if (winMaximize) {
                    win.restore();
                }
                else {
                    win.maximize();
                }
            });
        };
    }])
    //关闭窗口
    .directive('markdownClose', [function(){
        return function(scope, elem){
            $(elem[0]).on('click', function(){
                nw.Window.get().close();
            });
        };
    }]);
})();