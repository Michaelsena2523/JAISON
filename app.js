const btn = document.getElementById("btn"); 

function llamarFuncion(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "USTED ESTRA VERIFICADO POR LA SOSACION DE PAJARO ALEXIS PEREZ MUCHAS GRACIAS",
        showConfirmButton: false,
        timer: 5000
      });
}



btn.addEventListener("click", ()=> {
    llamarFuncion()
})