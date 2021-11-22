$(document).ready(function(){

$('#selall').on('click', function(e){
    e.preventDefault();
    $('.chkbx').prop("checked",true);
});

$('#selnone').on('click', function(e){
    e.preventDefault();
    $('.chkbx').prop("checked",false);
});

});