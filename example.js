"use strict"

let fs = require('fs')

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, VisitorAssistedBy){
        this.fullName = fullName,
        this.age = age,
        this.dateOfVisit = dateOfVisit,
        this.timeOfVisit = timeOfVisit,
        this.comments = comments,
        this.VisitorAssistedBy = VisitorAssistedBy
    }

    saveData= { save() {
        let visitorData = JSON.parse(this, null, 2)
        le
    }
}
}