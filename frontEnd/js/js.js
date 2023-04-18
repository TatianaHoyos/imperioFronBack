function validarCampoVacio(longitudCampo,mensaje) {
    if(longitudCampo <1)
    {
       Swal.fire({
         icon: 'warning',
         title:'Oops',
         text: mensaje
       });
       return true;
    }
}

function login(){
    var formData = {
        correo:$("#emailLogin").val(),
        password:$("#passwordLogin").val(),
      };

      console.log(JSON.stringify(formData))
    
    if (validarCampoVacio($("#passwordLogin").val().length ,'Por favor ingrese una contraseña')) {
        return false;
    }

    if (validarCampoVacio($("#emailLogin").val().length ,'Por favor ingrese un email')) {
        return false;
    }

    $.ajax({
        type: "POST",
        url:"http://localhost:8080/api/login",
        "headers": {
            "Content-Type": "application/json"
          },
          "data": JSON.stringify(formData),
          success: onExito,
          error: onError
    });
}

function onExito(data){
    console.log(data)

}
function onError(error){
    console.log(error)
}