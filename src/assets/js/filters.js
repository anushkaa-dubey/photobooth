function applyFilter(imageElement, filter) {
    imageElement.style.filter = filter;
}

function resetFilter(imageElement) {
    imageElement.style.filter = 'none';
}

function getAvailableFilters() {
    return [
        'none',
        'grayscale(100%)',
        'sepia(100%)',
        'blur(5px)',
        'brightness(150%)',
        'contrast(200%)',
        'invert(100%)',
        'hue-rotate(90deg)',
        'saturate(200%)'
    ];
}

export { applyFilter, resetFilter, getAvailableFilters };