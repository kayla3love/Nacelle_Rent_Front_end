const PrintUtil = {}

PrintUtil.printContent = function(dom){
    let newWin = window.open("");
    newWin.document.write(dom);
    newWin.document.close();
    newWin.print();
    newWin.close();
}
export default PrintUtil