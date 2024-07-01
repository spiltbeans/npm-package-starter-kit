import { jest } from "@jest/globals"

import { world } from "../src/index"

describe("testing world function", () => {
    it("console should say hello", () => {
        const consoleSpy = jest.spyOn(console, "log")
        world()
        expect(consoleSpy).toHaveBeenCalledWith("hello")
    })
})
