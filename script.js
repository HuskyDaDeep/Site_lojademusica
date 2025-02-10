function filterInstruments(type) {
    const instruments = document.querySelectorAll('.instrument');
    instruments.forEach(instrument => {
        if (type === 'all' || instrument.classList.contains(type)) {
            instrument.classList.remove('hidden');
        } else {
            instrument.classList.add('hidden');
        }
    });
}
function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');}