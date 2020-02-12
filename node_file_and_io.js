let fs = require('fs');

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, VisitorAssistedBy){
        this.fullName = fullName,
        this.age = age,
        this.dateOfVisit = dateOfVisit,
        this.timeOfVisit = timeOfVisit,
        this.comments = comments,
        this.VisitorAssistedBy = VisitorAssistedBy
 
    }
    
    
save() {
    let writeData={
    read: fs.writeFile("visitor_"+this.fullName+".json", JSON.stringify(this, null , 2), function response(err,success) {
        if(err){l
            throw "Information not saved"
        }else{
           success;
        }
        
        })
}
}
                                                                                                                                                                                             
load() {

    let readData ={

  write: fs.readFile("visitor_"+this.fullName+".json", (err, jsonString)=>{
      if (err) {
          console.log("File read failed:", err)
          return
      }
      jsonString = JSON.parse(jsonString)
      console.log("File data:", jsonString)
  })
    }
    }
}

let romeo = new Visitor("Romeo Mamonong", 25, "12 January 2020", "13:23", "The visit was perfect", "Kurtlin Hendricks") 
romeo.save()
module.exports= Visitor;
