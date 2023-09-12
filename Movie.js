class Movie {
    constructor(name) {
      this.name = name;
      this.rating = 0;
    }
  
    // Method to display the movie's rating
    displayRating() {
      console.log(`Rating of ${this.name}: ${this.rating}`);
    }
  
    // Method to update the movie's rating
    updateRating(newRating) {
      if (newRating >= 0 && newRating <= 10) {
        this.rating = newRating;
        console.log(`Rating of ${this.name} updated to ${this.rating}`);
      } else {
        console.log("Invalid rating. Please provide a rating between 0 and 10.");
      }
    }
  }
  
  // Create movie instances
  const movie1 = new Movie("Movie 1");
  const movie2 = new Movie("Movie 2");
  
  // Display initial ratings
  movie1.displayRating();
  movie2.displayRating();
  
  // Update ratings
  movie1.updateRating(8);
  movie2.updateRating(7.5);
  
  // Display updated ratings
  movie1.displayRating();
  movie2.displayRating();
  
