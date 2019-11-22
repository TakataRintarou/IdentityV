document.addEventListener('click', (e) => {
    const element = e.target

    if (!element.classList.contains('scroll')) {
        return;
    }

    // aタグのデフォルトの挙動をキャンセル
    e.preventDefault()

    document.querySelector(element.hash).scrollIntoView({
        behavior: 'smooth'
    })


})