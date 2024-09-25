import {auth} from "../middlewares/auth.middleware.js"

describe('auth', function(){
    it("should exist", function(){
        expect(auth).toBeDefined()
    })
    it("should be a function", function(){
        expect(auth).toBe('function')
    })
})