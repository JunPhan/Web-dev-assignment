function isEmail(inputEmail){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
}
function validatePassword(inputPassword){
    return inputPassword.length < 8;
}
$(document).ready(function(){
    var i = 1;

    //Kiem tra Ho
    var txtHo = $("#txtHo");
    var tbHo = $("#tbHo");

    function KiemTraHo(){
        if(txtHo.val()  == ""){
            tbHo.html("* Không được để trống");
            return false;
        }
        tbHo.html("");
        return true;
    }
    txtHo.blur(KiemTraHo);

    //Kiem tra Ten
    var txtTen = $("#txtTen");
    var tbTen = $("#tbTen");

    function KiemTraTen(){
        if(txtTen.val()  == ""){
            tbTen.html("* Không được để trống");
            return false;
        }
        tbTen.html("");
        return true;
    }
    txtTen.blur(KiemTraTen);

    //Kiem tra Email

    
    $("#txtEmail").change(function(){
        var email = $(this).val().trim();
        // alert('email = ${JSON.stringify(Email)}')

        if(!isEmail(email)){
            $("#tbEmail").html("* Nhập email sai hãy nhập lại");
        }else{
            $("#tbEmail").html("")
        }
    });

    var txtEmail = $("#txtEmail");
    var tbEmail = $("#tbEmail");

    function KiemTraEmail(){
        if(txtEmail.val() == ""){
            tbEmail.html("* Không được để trống");
            return false;
        }
        tbEmail.html("");
        return true;
    }
    txtEmail.blur(KiemTraEmail)

    //Test NameAccount

    var txtNameAccount = $("#txtNameAccount");
    var tbNameAccount = $("#tbNameAccount");
    function KiemTraTenTaiKhoan(){
        if(txtNameAccount.val()  == ""){
            tbNameAccount.html("* Không được để trống");
            return false;
        }
        tbNameAccount.html("");
        return true;
    }
    txtNameAccount.blur(KiemTraTenTaiKhoan);

    //KiemTraPass

    $("#txtPass").change(function(){
        var password = $(this).val().trim();
        // alert('password = ${JSON.stringify(password)}')
        if(validatePassword(password)){
            $("#tbPass").html("Nhập mật khẩu trên 8 ký tự");
        }else{
            $("#tbPass").html("")
        }
    });

    // var txtPass = $("#txtPass");
    // var tbPass = $("#tbPass");

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