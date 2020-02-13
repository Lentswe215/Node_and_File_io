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

    fs.writeFile("visitor_"+ this.fullName +".json", JSON.stringify(this, null, 2), (err) => {
        if(err) {
            throw("Your information is not saved")
        }else {
        console.log("Successfully saved your information");
        }
    })
}
                                                                                                                                                                                             
 load(){
  fs.readFile("visitor_"+this.fullName+".json", (err, visitorData)=> {
      if (err) {
          throw err
          
      } else {
      visitorData = JSON.parse(visitorData)
      console.log(visitorData)
      }
  })
}
}


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

ofentse.save()
sbongile.save()
module.exports= Visitor;
