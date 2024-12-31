const student = {
  age: 23,
  roll: 5,
  subject: ['math', 'english', 'physics', 'chemistry'],
  'is Money': 20000,
  result: {
    gpa: 4,
    mertit: 'top',
    cgpa: {
      hsc: 5.00,
      ssc: {
        science: {
          gpa: 5.00,
          arts: {
            gpa: 4.5
          }
        }
      }
    }
  }
}
student.result.cgpa.ssc.science.gpa = 3.75;
console.log(student.result.cgpa.ssc.science.gpa)