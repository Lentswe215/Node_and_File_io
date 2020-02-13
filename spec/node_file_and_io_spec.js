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
    
    it("should check if save() has been called and is defined", ()=>{
        

        expect(ofentse.save).toBeDefined()
    })

    it("should check if save() has been called and is defined", ()=>{
        
        ofentse.load()
        sbongile.load()
        expect(ofentse.load).toBeDefined()
    })

    it("should read Ofentse Sambo data", ()=>{
        let fs = require("fs");
        let ofentse = new Visitor("Ofentse Sambo")
        fs.readFile("visitor_"+ofentse.fullName+".json", (err, data)=>{
      if (err) {
        throw err;
      } else {
        let visitorData = JSON.parse(data)
       expect(visitorData.fullName).toBe("Ofentse Sambo")
       expect(visitorData.age).toBe(25)
       expect(visitorData.dateOfVisit).toBe("22 September 2019")
       expect(visitorData.timeOfVisit).toBe("12:54")
       expect(visitorData.comments).toBe("Everything was just fine and the stuff was friendly")
       expect(visitorData.VisitorAssistedBy).toBe("Teboho Lekhalo")
            }
        })
    })
})

   

    // describe("")


