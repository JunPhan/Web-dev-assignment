function validatePassword(inputPassword){
    return inputPassword.length < 8;
}
$(document).ready(function(){

    //Kiem tra mat khau

    $("#NewPass").change(function(){
        var password = $(this).val().trim();
        // alert('password = ${JSON.stringify(password)}')
        if(validatePassword(password)){
            $("#PassError").html("* Nhập mật khẩu trên 8 ký tự");
            return false;
        }else{
            $("#PassError").html("");
            return true;
        }
    });

    var newpass = $("#NewPass");
    var renewpass = $("#RePassWord");
    var passerror = $("#PassError-1"); 

    function KiemTraLaiMK(){
        if(newpass.val() != renewpass.val()){
            passerror.html("* Mật khẩu không trùng khớp");
            return false;
        }
        newpass.val() == renewpass.val();
        passerror.html("");
        return true;
    }
    renewpass.blur(KiemTraLaiMK);
    // var txtPass = $("#NewPass");
    // var tbPass = $("#PassError");

    // function KiemTraPass(){
    //     if(txtPass.val() == ""){
    //         tbPass.html("* Không được để trống");
    //         return false;
    //     }
    //     tbPass.html("");
    //     return true;
    // }
    // txtPass.blur(KiemTraPass);
});