function Employees(name, jobtitle, salary, status){
    this.name = name
    this.jobtitle = jobtitle
    this.salary = salary
    this.status = status
}
var Rick = new Employees("Rick", "Bagger", "11/hour", "Temporary");
var Cody = new Employees("Cody", "Manager", "55/hour", "Contract");
var Logan = new Employees("Logan", "Cashier", "25/hour", "Parttime");
var Mark = new Employees("Mark", "Retail", "15/hour", "Fulltime");

console.log(Rick, Cody, Logan, Mark)
