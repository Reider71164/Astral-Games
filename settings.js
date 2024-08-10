function handlePanicAction() {
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicURL = localStorage.getItem('panicURL');

    document.addEventListener('keydown', function (event) {
        if (event.key === savedPanicKey) {
            // Redirect to panic URL
            if (savedPanicURL) {
                window.location.href = savedPanicURL;
            } else {
                console.error('Panic URL is not set.');
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    handlePanicAction();
});
