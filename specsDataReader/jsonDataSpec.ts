import * as data from '../testdata/jsonData.json';
//include     "resolveJsonModule":true in tsconfig.json to resolve error importing

describe("Reading data from testData/jsonData.json", function(){
    it("Fetch values", function(){
        console.log(data.customers[0].firstname)
    })
})