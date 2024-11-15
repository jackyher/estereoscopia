document.addEventListener("DOMContentLoaded", function() {
    const sliderImages = document.querySelectorAll(".slider-img");

    sliderImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            // Quitar la clase 'active' de todas las imágenes
            sliderImages.forEach(image => image.classList.remove("active"));
            
            // Agregar la clase 'active' a la imagen clickeada
            img.classList.add("active");
        });
    });
});
