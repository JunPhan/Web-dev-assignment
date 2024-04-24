function isEmail(inputEmail){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
}
function validatePassword(inputPassword){
    return inputPassword.length < 8;
}
$(document).ready(function(){
    $("#Email").change(function(){
        var email = $(this).val().trim();
        // alert('email = ${JSON.stringify(Email)}')
        if(!isEmail(email)){
            $("#Emailerror").html("Nhập email sai hãy nhập lại");
        }else{
            $("#Emailerror").html("")
        }
    });
    $("#Password").change(function(){
        var password = $(this).val().trim();
        // alert('password = ${JSON.stringify(password)}')
        if(validatePassword(password)){
            $("#PassError").html("Nhập mật khẩu sai hãy nhập lại");
        }else{
            $("#PassError").html("")
        }
    });
});