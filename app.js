/*
    DOMContentLoaded sirve 
    para controlar que primero 
    se cargue Todo el documento HTML por ultimo javascript
*/ 

/*

*/ 

// alert:S 0genera o muestra un mensaje emergente
   // alert("Holis");
   
   /*document.addEventListener("DOMContentLoaded", function(){
    // esta es una zona segura de javascript nativo
    //console.log(document.getElementById("txtNnombre".value));
});

*/


/*
//añadiendo evento click al boton mostrar
const btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function(){
    //alert("hice click");
    //console.log('haciendo click');
    const nombres = document.getElementById("txtNombre").value;
    const apellidos = document.getElementById("txtApellido").value;
    const cedulas = document.getElementById("txtCedula").value;
    const direccion = document.getElementById("txtDireccion").value;
    console.log(' nombres '+nombres+' apellidos '+apellidos+' cedulas '+cedulas+' direccion '+direccion);
    alert(' nombres '+nombres+' apellidos '+apellidos+' cedulas '+cedulas+' direccion '+direccion);

});*/

//jquery
//zona segura 
$(function(){
    //para recuperar datos del id
    const nombres = $('#txtNombre').val();
    //cambiar/asignar
    $('#txtNombre').val('otro nombre');


    //añadir evento al boton
    $('#btnEnviar').on('click', function(){
        //cuando hiciste click 
        alert('hiciste click');
        //encadenamiento de caracteres
        $('#btnEnviar').removeClass('btn-primary');
        $('#btnEnviar').addClass('btn-warning');

        //recuperar los valores del formulario
        const nombre = $('#txtNombre').val();
        const apellido = $('#txtApellido').val();
        const cedula = $('#txtCedula').val();
        if(!nombre.trim()){
            alert('Complete este');
            $('#txtNombre').css('border-color', 'red').focus();
            return;
        }

        if(!apellido.trim()){
            alert('Complete este');
            $('#txtApellido').css('border-color', 'red');
            return;
        }

        if(!cedula.trim()){
            alert('Complete este');
            $('#txtCedula').css('border-color', 'red');
            return;
        }
        alert('Buenísimo');
    });
});
