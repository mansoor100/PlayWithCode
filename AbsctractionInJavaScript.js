
function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000;
    this.getEmpDetails = function () {
      console.log("Name: " + this.name + " | " + "Age: " + this.age);
      empFinalSalary();
    };
  
    let empFinalSalary = function () {
      let finalSalary = baseSalary + monthlyBonus;
      console.log("Final Salary: " + finalSalary);
    };
  }
  
  const emp1 = new Employee("ali", 30, 2000);
  
  emp1.getEmpDetails();
  