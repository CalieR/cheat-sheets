function test() {
  return "test fn result";
}

function handleCallback(cb, arg) {
  console.log(cb(arg));
}

function hello(name) {
  return `Hello ${name}`;
}

handleCallback(hello, "calie");
handleCallback(test);
