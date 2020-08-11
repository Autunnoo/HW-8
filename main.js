class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.studentMarks = [5, 4, 4, 5];
    this.dismissStatus = false;
  }
  get marks() {
    if (this.dismissStatus) return null;
    else return this.studentMarks;
  }
  set marks(mark) {
    if (this.dismissStatus) return null;
    else this.studentMarks.push(mark);
  }
  dismiss() {
    this.dismissStatus = true;
  }
  recover() {
    this.dismissStatus = false;
  }
  getInfo() {
    return console.log(`Студент ${this.course} курсу ${this.university} ${this.fullName}`
    );
  }
  getAverageMark() {
    return (this.studentMarks.reduce((a, b) => a + b, 0) /this.studentMarks.length);
  }
}
const student = new Student('Вищої Школи Психотерапії м.Одеса', '3', 'Иван Иванов');
student.getInfo();
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
student.dismiss();
student.recover();


class BudgetStudent extends Student{
  constructor(university, course, fullName){
    this.stepen = 1400;
    intervalLimit((stepen) => stepen), 1000
  }
}
const budgStud = new BudgetStudent('Вищої Школи Психотерапії м.Одеса', '1', 'Иван Иван');




