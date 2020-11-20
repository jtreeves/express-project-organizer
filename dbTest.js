const db = require('./models')

// db.category.create({
//   name: 'node'
// }).then(function(category) {
//   console.log(category.id)
// })

// db.project.findOne({
//     where: { id: 1 },
//     include: [db.category]
//   }).then(function(project) {
//     // by using eager loading, the project model should have a categories key
//     console.log(project.categories)
  
//     // createCategory function should be available to this model - it will create the category then add it to the project
//     project.createCategory({ name: 'express' }).then(function(category) {
//       console.log(category.id)
//     })
//   })

// db.category.create({
//     name: 'sql'
// }).then((createdCategory) => {
//     db.project.findAll().then((project) => {
//         project[0].addCategory(createdCategory)
//         project[1].addCategory(createdCategory)
//     })
// })

// db.category.findOne().then((cat) => {
//     cat.getProjects().then((projects) => {
//         console.log(projects);
//     })
// })

// THIS NEEDS TO BE FILLED IN BASED ON WHAT WE DID IN CODEALONG
// db.project.findOne({
//     where: {
//         id: 1
//     }
// }).then((project) => {
//     project.getCategories().then((cats) => {

//     })
// })