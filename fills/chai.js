export const expect = a => {
  const to = {
    equal: b => {
      if (a !== b) throw new Error(`Expected ${a} == ${b}`);
    },
  };

  const not = {
    equal: b => {
      if (a === b) throw new Error(`Expected ${a} != ${b}`);
    },
  };

  Object.defineProperty(to, 'undefined', {
    get: function() {
      if (a !== undefined) throw new Error(`Expected ${a} to be undefined`);
    }
  })

  Object.defineProperty(not, 'undefined', {
    get: function() {
      if (a === undefined) throw new Error(`Expected ${a} to not be undefined`);
    }
  });

  return {
    to: {
      ...to,
      be: to
    },

    not: {
      to: {
        ...not,
        be: not
      }
    }
  };
};