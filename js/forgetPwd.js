function isEmail(inputEmail){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
}
$(document).ready(function(){

    //Kiem tra NameAccount
    
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
    txtEmail.blur(KiemTraEmail);
});