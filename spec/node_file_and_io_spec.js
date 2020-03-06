let Visitor = require("../node_file_and_io");

describe("Visitor", ()=>{
    let ofentse = new Visitor("Ofentse Sambo", 
                          25, 
                          "22 September 2019", 
                          "12:54", 
                          "Everything was just fine and the stuff was friendly", 
                          "Teboho Lekhalo"
                        );
    let sbongile = new Visitor("Sbongile Vilakazi", 
                          25, 
                          "12 May 2019", 
                          "12:54", 
                          "The person who assisted me was rude", 
                          "Kurtlin Hendricks"
                        );
    
    it("should check if save() is defined", ()=>{
        

        expect(ofentse.save).toBeDefined()
    })

    it("should check if load()  is defined", ()=>{
        
        ofentse.load()
        sbongile.load()
        expect(ofentse.load).toBeDefined()
    })

    it("ahould throw file exist error", ()=> {

      expect(function() {
        ofentse.save()
      }).toThrow("File already exists")
    })
    
    it("should should throw Error", ()=> {
      let john = new Visitor("John Cena")
      
  expect(()=> {john.load()}).toThrow(Error("File doesn't exist"))
})
})

describe("Visitor", () => {
const fs = require('fs')
  let merriam = new Visitor("Merriam Montsho",
                            44, 
                            "22 December 2019", 
                            "14:24", 
                            "Everything was just fine and the stuff was friendly", 
                            "Teboho Lekhalo")
  it("should test data in JSON file", () => {
  

    fs.readFile('visitor_Merriam Montsho.json','utf-8', (err, data) => {
      
          if(err){
            throw "File doesn't exist"
        }else{
        expect(
          {
            "fullName": "Merriam Montsho",
            "age": 44,
            "dateOfVisit": "22 December 2019",
            "timeOfVisit": "14:24",
            "comments": "Everything was just fine and the stuff was friendly",
            "VisitorAssistedBy": "Teboho Lekhalo"
          }).toBe(JSON.stringify(data))
        }
      })
    })


  })

