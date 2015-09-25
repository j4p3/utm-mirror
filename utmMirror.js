$.fn.utmMirror = function () {
  if (window.location.search) {
    var sep = this.attr('href').includes('?') ? '&' : '?';
    this.attr('href', this.attr('href') + sep + window.location.search.substring(1));
  }
}