function changevalue(){
    var d=document.getElementById("croptype");
    var displayvalue = d.options[d.selectedIndex].value;
    document.getElementById("Value").value=displayvalue;
}