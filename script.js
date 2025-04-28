// Kết nối tới iframe SoundCloud
const iframeElement = document.getElementById('sc-player');
const widget = SC.Widget(iframeElement);

const volumeSlider = document.getElementById('volume-slider');

// Play tự động sau khi iframe load
widget.bind(SC.Widget.Events.READY, function() {
    widget.setVolume(volumeSlider.value); // Set volume theo slider khi vừa vào
    widget.play();
});

// Thanh chỉnh volume
volumeSlider.addEventListener('input', function() {
    widget.setVolume(this.value);
});
