import { describe, it, expect} from 'vitest'
import { sum } from '../src/sum'

describe('sum', () => {

it('add two numbers', () => {

    expect(sum(2,3)).toBe(5);

    }) 
})