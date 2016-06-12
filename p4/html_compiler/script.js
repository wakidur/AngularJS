(function(angular){
    'use strict';
    var dragElement = angular.module('drag',[]);
        dragElement.directive('draggable',function($document){
            return function(scope,element,attr){
                var startX = 0,
                    startY = 0,
                        x = 0,
                        y = 0;
                element.css({
                    position: 'relative',
                    border : '1px solid red',
                    backgroundColor : 'lightgrey',
                    cursor : 'pointer',
                    display : 'block',
                    width : '65px'
                });
                element.on('mousedown', function(even){
                    // prevent default dragging of selected content
                    event.preventDefault();
                    startX = even.screenX - x;
                    startY = even.screenY - y;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                    
                });
                function mousemove (event) {
                    y = event.screenY - startY;
                    x = event.screenX - startX;
                    element.css({
                        top : y + 'px',
                        left : x + 'px'
                    });
                function mouseup() {
                    $document.off('mousemove', mousemove);
                    $document.off('mouseup', mouseup);
                }}
            }
        })
})(window.angular)

