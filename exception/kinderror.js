class KindError extends Error {
  constructor(value, ...params) {
    super(...params);
    this.value = value;
    this.name = "kindError";
  }
}
module.exports = KindError;
