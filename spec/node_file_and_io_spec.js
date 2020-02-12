let Visitor = require("../node_file_and_io");

let ofentse = new Visitor("Ofentse Sambo", 25, "22 September 2019", "12:54", "I was just chilling with homies smoking marijuana", "Teboho Lekhalo");

describe("Visitor", ()=>{
    
    it("should return full name of visitor", ()=>{

        expect(ofentse.fullName).toBe("Ofentse Sambo")
        expect(ofentse.age).toBe(25)
        expect(ofentse.dateOfVisit).toBe("22 September 2019")
        expect(ofentse.timeOfVisit).toBe("12:54")
        expect(ofentse.comments).toBe("I was just chilling with homies smoking marijuana")
        expect(ofentse.VisitorAssistedBy).toBe("Teboho Lekhalo")
    })

    it("should parse the data from json file", ()=> {
        let myCall = ofentse.load();
         let  data = JSON.parse(myCall)
        expect(data).toBe({
            "fullName": "Lentswe Mamonong",
            "age": 25,
            "dateOfVisit": "12 January 2020",
            "timeOfVisit": "13:23",
            "comments": "The visit was perfect",
            "VisitorAssistedBy": "Kurtlin Hendricks"
          })
    })
 })
