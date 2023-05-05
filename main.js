$(document).ready(function() {
    $('.gallery-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
    $(".click").click(function() {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Download Successful',
            showConfirmButton: false,
            timer: 1500
        })
    })
})
var loader = document.getElementById("loader")
window.addEventListener("load", function() {
    loader.style.display = "none";
})
