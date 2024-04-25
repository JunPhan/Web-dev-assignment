function isEmail(inputEmail){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
}
function validatePassword(inputPassword){
    return inputPassword.length < 8;
}
$(document).ready(function(){

    //Kiem tra Email

    $("#Email").change(function(){
        var email = $(this).val().trim();
        // alert('email = ${JSON.stringify(Email)}')
        
        if(!isEmail(email)){
            $("#Emailerror").html("Nhập email sai hãy nhập lại");
        }else{
            $("#Emailerror").html("")
        }
    });

    var txtEmail = $("#Email");
    var tbEmail = $("#Emailerror");

    function KiemTraEmail(){
        if(txtEmail.val() == ""){
            tbEmail.html("* Không được để trống");
            return false;
        }
        tbEmail.html("");
        return true;
    }
    txtEmail.blur(KiemTraEmail)

    //Kiem tra mat khau

    $("#Password").change(function(){
        var password = $(this).val().trim();
        // alert('password = ${JSON.stringify(password)}')
        if(validatePassword(password)){
            $("#PassError").html("Nhập mật khẩu trên 8 ký tự");
        }else{
            $("#PassError").html("")
        }
    });

    var txtPass = $("#Password");
    var tbPass = $("#PassError");

    function KiemTraPass(){
        if(txtPass.val() == ""){
            tbPass.html("* Không được để trống");
            return false;
        }
        tbPass.html("");
        return true;
    }
    txtPass.blur(KiemTraPass);
});