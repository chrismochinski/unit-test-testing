import userReducer from './user.reducer.js'; 

describe('User reducer tests', () => { //this is just for you to see in terminal
    test('The default value is an empty object.', (done) => { // KEEP THIS DESCRIPTIVE AND STRAIGHTFORWARD - not jargon - QA team and MGR will read
        let action = {};
        let output = userReducer(undefined, action)
        expect(typeof output).toBe('object'); //expect will give you a pass or fail
        // expect(output).toBeDefined();
        done();
        //DO MORE TESTS!
    }) 
});

