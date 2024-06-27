let previewContainer = document.querySelector('.complaints-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.chip-container .chip').forEach(chip =>{
    chip.onclick = () =>{
        previewContainer.style.display ='flex';
        let name = chip.getAttribute('data-name');
        previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
            preview.classList.add('active');
        }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display ='none';
    };
});