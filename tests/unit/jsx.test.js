import {describe, expect, test} from "@jest/globals";

describe('jsx tester' , () => {
    test('should return <h1>hello</h1> when hello', () => {
        expect(`<h1>hello</h1>`).toBe(`<h1>hello</h1>`)
    })
})
