function partial(fn,...partSave) {
  alert(...partSave);
  return function (...newArgs) {
      return fn(...partSave, ...newArgs);
  };
}