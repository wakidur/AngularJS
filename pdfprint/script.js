/* 
    23-july-2016
 */
function printTrigger(elementId) {
    var getMyFrame = document.getElementById(elementId);
        getMyFrame.focus();
        getMyFrame.contentWindow.print();
}


