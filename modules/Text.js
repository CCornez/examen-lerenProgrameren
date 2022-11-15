function Text(str) {
  this.str = str;
}

Text.prototype.left = function (nr) {
  return this.str.slice(0, nr);
};
Text.prototype.right = function (nr) {
  return this.str.slice(this.str.length - nr, this.str.length);
};
Text.prototype.charCount = function () {
  return this.str.length;
};
Text.prototype.charCount = function () {
  return this.str.split(' ').length;
};
Text.prototype.vowelCount = function () {
  return this.str.match(/[aeiou]/gi)?.length || 0;
};
Text.prototype.capitalsCount = function () {
  return this.str.match(/[A-Z]/g)?.length || 0;
};
Text.prototype.append = function (append) {
  return new Text(this.str + append);
};
Text.prototype.prepend = function (prepend) {
  return new Text(prepend + this.str);
};

export default Text;
