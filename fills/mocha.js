if (!globalThis.print) globalThis.print = function() { console.log.apply(this, arguments); };

const scope = [];
export const describe = (desc, run) => {
  scope.push(desc);

  beforeHooks = [];
  afterHooks = [];

  run();
};

export const it = (name, run) => {
  let pass = false, error;
  try {
    beforeHooks.forEach(x => x());
    run();
    afterHooks.forEach(x => x());
    pass = true;
  } catch (e) {
    error = e;
  }

  print(`${pass ? 'PASS' : 'FAIL'} ${scope.join(' > ')} > ${name}`);
  if (!pass) print(error);
};

let beforeHooks = [];
export const beforeEach = hook => {
  beforeHooks.push(hook);
};

let afterHooks = [];
export const afterEach = hook => {
  afterHooks.push(hook);
};