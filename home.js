function toggleContent() {
    var content = document.querySelector('.trend-category');
    var btn = document.querySelector('.expand-btn');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        btn.innerHTML = 'Expand';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.innerHTML = 'Collapse';
    }
}