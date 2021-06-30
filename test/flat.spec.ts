import flat from "../flat"

declare global {
    interface Array<T> {
        customFlat(): Array<any>  
    }
}


describe(
    "Open/close sidebar state",
    () => {

        beforeEach(() => {
            Array.prototype.customFlat = flat
        })

        const toTest = (msg: string, toTest: Array<any>) => { 
            it(msg, () => {
                expect(toTest.customFlat()).toEqual(toTest.flat())
            });
        }

        toTest("If empty return empty array",[]);

        toTest("If contain \"1\" should return [\"1\"]",['1']);

        toTest("If no nested array should return the array", ['1', 2]);

        toTest(
            "If the array contain only 1 nested array containing one element it should return the element on an array",
            [['1']]);

        toTest(
            "If an array contain 1 nested array who contain 1 nested array contain one element should return the nested array with one element",
            [[['1']]]);

        toTest(
            "If an array contain 2 nested array who contain 1 nested array contain one element should return the nested array with one element",
            [[['1']], [[1]]]);

        
        toTest(
            "If an array contain 2 nested array who contain 1 nested array contain 2 element should return the nested array with one element",
            [[['1', 2]], [[1, 2]]]);
        
        toTest(
            "If an array contain 2 nested array who contain 2 nested array contain 1 element should return the nested array with one element",
            [ [['1'], [2]], [[1], [2]] ]
        );

        toTest("Test input from the spec", [[1,2], [3,4], [5,6], [7,8]])


        toTest("Big test", [[1,2], [3,4], [5,6], [7,8], [1,2], [3,4], [5,6], [7,8], [[[1,2], [3,4], [5,6], [7,8]]]])

       }
)
