import test from 'ava'
import { adderFn } from '../src/app.js'

test('adder', (t) => {
  const actual = adderFn(5, 1)
  t.is(actual, 6)
})
