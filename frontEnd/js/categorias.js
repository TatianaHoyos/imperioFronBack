
'use strict' //atributo para indicar que se usan funciones propias de ajax y jquery

$(document).ready(function () {
    consultarCategorias();
});

function consultarCategorias() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/categorias",
        "headers": {
            "Content-Type": "application/json"
          },
        success: onExitoCategorias,
        error: onErrorCategorias
    });
}

function onExitoCategorias(data) {
    console.log(data);
    var $dropdown = $("#categorias");
    $.each(data.categorias, function () {
        $dropdown.append($("<option />").val(this.idCategoria).text(this.nombreCategoria));
    });

}
function onErrorCategorias(error) {
    console.log(error)
}


function consultarProductoCategoria(event){
    var idCategoria=$("#categorias").val();
    console.log("categoria Seleccionada: "+idCategoria);
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/producto?idCategoria="+idCategoria,
        "headers": {
            "Content-Type": "application/json"
          },
        success: onExitoProducto,
        error: onErrorProducto
    });

}

function onExitoProducto(data){
console.log(data)

$('#tablaProductos > tbody').empty();
$.each(data.productos, function(id, productos) {
    //alert('Estoy recorriendo el registro numero: ' + idx);
    var nombreCategoria="";
    if(productos.idCategoria==1){
        nombreCategoria="cervezas";
    } else if(productos.idCategoria==2){
        nombreCategoria="aguardientes";
    }else if(productos.idCategoria==3){
        nombreCategoria="wiskey";
    }

    $('#tablaProductos').append('<tr><td>' + productos.id + '</td><td>' + productos.nombre + '</td><td>'+ nombreCategoria + '</td><td>' + productos.referencia + '</td><td>' + productos.precio + '</td></tr>');
    console.log(productos.id + ' ' + productos.nombre + ' ' + productos.idCategoria + ' ' +
     productos.referencia + ' ' + productos.precio);
});

}
function onErrorProducto(error){
    console.log(error)
}