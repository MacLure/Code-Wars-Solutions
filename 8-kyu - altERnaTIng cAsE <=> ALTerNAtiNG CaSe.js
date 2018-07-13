String.prototype.toAlternatingCase = function () {
    var output = '';
    for (var i=0; i<this.length; i++) {
      if (this[i].toLowerCase() === this[i]) {
        output = output + this[i].toUpperCase();
      } else if (this[i].toUpperCase() === this[i]) {
        output = output + this[i].toLowerCase();
      } else {
        output = output + this[i];
      }
    }
    return output;
  }
  