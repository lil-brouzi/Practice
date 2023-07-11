const dropboxes = document.querySelectorAll('.dropbox__title')
const dropboxContent = document.querySelector('.dropbox__content')
const triangle = document.querySelector('.triangle')
    
dropboxes.forEach((dropbox) => {
    dropbox.addEventListener('click', () => {
        let content = dropbox.nextElementSibling
        content.classList.toggle('active')
        dropbox.classList.toggle('active')
        if (content.classList.contains('active')){
        }
    })
});