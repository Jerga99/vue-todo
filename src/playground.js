/* eslint-disable */




export default function() {
  console.log('Hello World!!!!!!')

  // 2 VARIABLES
  // var firstName = "Filip" // string
  // var age = 28 // number
  // var isMale = true // boolean
  // var dontKnow = null // unknow value
  // var a

  // var person = {
  //   name: 'Filip',
  //   lastName: 'Jerga'
  // }

  // Create all types of variables of your choice
  // Check their types with "typeof"
  // 2 VARIABLES

  var person = {
    name: 'Filip',
    lastName: 'Jerga'
  }

  var person1 = {
    name: 'John',
    lastName: 'Snow'
  }

  function printUserInfo(user) {
    debugger
    console.log('Consoling log out person informations!')
    console.log('Hello ' + user.name + ' ' + user.lastName)
  }

  printUserInfo(person)
  printUserInfo(person1)


}










