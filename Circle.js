class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Method to calculate the area of the circle
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    // Method to calculate the circumference of the circle
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Create a Circle object
  const myCircle = new Circle(5); // Creating a circle with a radius of 5 units
  
  // Calculate and display the area and circumference
  console.log(`Radius: ${myCircle.radius}`);
  console.log(`Area: ${myCircle.calculateArea()}`);
  console.log(`Circumference: ${myCircle.calculateCircumference()}`);
  