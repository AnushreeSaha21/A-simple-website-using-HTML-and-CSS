const reviews = document.querySelectorAll('.review');
let currentReview = 0;

function showReview(index) {
    reviews.forEach((review, i) => {
        if (i === index) {
            review.style.display = 'inline-block';
        } else {
            review.style.display = 'none';
        }
    });
}

function nextReview() {
    currentReview++;
    if (currentReview >= reviews.length) {
        currentReview = 0;
    }
    showReview(currentReview);
}

function prevReview() {
    currentReview--;
    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }
    showReview(currentReview);
}

// Show the initial review
showReview(currentReview);
