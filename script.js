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

const ratings = document.querySelectorAll('.rating')

const initRatings = () => {
    let ratingActive, ratingValue
    const initRatingVars = (rating) => {
        ratingActive = rating.querySelector('.rating__active')
        ratingValue = rating.querySelector('.rating__value')
    }

    const setRatingActiveWidth = (index = ratingValue.innerHTML) => {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    const setRating = (rating) => {
        const ratingItems = rating.querySelectorAll('.rating__item')
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', (e) => {
                initRatingVars(rating)
                setRatingActiveWidth(ratingItem.value)
            })
            ratingItem.addEventListener('mouseleave', (e) => {
                setRatingActiveWidth()
            })
            ratingItem.addEventListener('click', (e) => {
                initRatingVars(rating)

                if (rating.dataset.ajax) {
                    setRatingValue(ratingItem.value, rating)
                } else {
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth()
                }
            })
        }
    }

    const initRating = (rating) => {
        initRatingVars(rating)
        setRatingActiveWidth()

        if(rating.classList.contains('rating_set')) {
            setRating(rating)
        }
    }

    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating)
    }

}

if (ratings.length > 0) {
    initRatings();
}

const submitComment = document.querySelector('.submit__comment')
const commentName = document.querySelector('.comment__name')
const commentText = document.querySelector('.comment__text')
const comments = document.querySelector('.comments')
let id = 0
submitComment.addEventListener('click', () => {
    if (commentText.value != '' & commentName.value != '') {
        id = id + 1
        comments.innerHTML += `
        <div class="comment" id='${id}'>
        <h4>${commentName.value}</h4>
        <p>${commentText.value}</p>
        </div>`
    }
})