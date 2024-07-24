const btn = document.getElementById("btn"); 

function llamarFuncion(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "USTED ESTRA VERIFICADO POR LA SOSACION DE PAJARO JAISON SENA",
        showConfirmButton: false,
        timer: 5000
      });
}



btn.addEventListener("click", ()=> {
    llamarFuncion()
})