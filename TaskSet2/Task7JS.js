function bind(fn, context) {
  let bindArgs = [].slice.call(arguments, 2);
  return function() { 
  let functionArgs = [].slice.call(arguments);
    return fn.apply(context, bindArgs.concat(functionArgs));
  };
}