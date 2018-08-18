
class Driver{
  constructor(name, signupDate){
    this.name = name;
    this.signupDate = signupDate;
  }

  startDate(dateString){
    return new Date(dateString);
  }
}