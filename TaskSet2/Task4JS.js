function fmap(a, gen) {
  return function() {
    return a(gen.apply(this, arguments))
  }
}