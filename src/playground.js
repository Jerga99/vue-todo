/* eslint-disable */




export default function() {
  // console.log('Hello World!!!!!!')

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

  // var person = {
  //   name: 'Filip',
  //   lastName: 'Jerga'
  // }

  // var person1 = {
  //   name: 'John',
  //   lastName: 'Snow'
  // }

  // function printUserInfo(user) {
  //   debugger
  //   console.log('Consoling log out person informations!')
  //   console.log('Hello ' + user.name + ' ' + user.lastName)
  // }

  // printUserInfo(person)
  // printUserInfo(person1)

  // var hours = 23
  // var seconds = hours * 60 * 60
  // console.log(seconds)


  function transformHoursToSeconds(hours) {
    return hours * 60 * 60
  }

  // var result = transformHoursToSeconds(19)
  // console.log(result)

  function printSomething(something) {
    console.log(something)
  }

  // 36000
  printSomething(transformHoursToSeconds(10))
  // Annonymous functon

  // Hello world
  // Hello Filip, Good job with coding!
  printSomething((function() {
    console.log('Hello world')
    return 'Hello Filip, Good job with coding!'
  }()))

  // {a: 1, b: 2}
  printSomething({a: 1, b: 2})


  function countPersonBirthYear(personAge) {
     var currentYear = 2019
     var birthYear = currentYear - personAge
     return birthYear
  }

  var resolvedYear = countPersonBirthYear(33)
  console.log(resolvedYear)

}



// TODO: Create function called "countPersonBirthYear"
// specify 1 param: personAge
// in function body resolve person year of birth from passed age
// return year of birth from function
// call function "countPersonBirthYear" and assign returned value to
// variable called "resolvedYear"
// console.log out resolvedYear






















