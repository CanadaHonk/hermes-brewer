# hermes-brewer
Run (simple) Mocha tests in Hermes using a tiny Mocha and Chai (poly/*)fill.

## Running a Mocha test
1. Add test to `tests/`, replace imports with fills dir (`mocha` -> `../fills/mocha.js`, etc)
2. Run with Node to check (`node tests/yourTest.js`)
3. Run `esbuild --bundle tests/yourTest.js > out.js`
4. `hermes out.js`
5. Profit

`tests/` are included as example from spitroast.