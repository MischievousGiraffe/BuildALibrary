class Media {
  constructor(title) {
    this._title = title;
    this._ratings = []
    this._isCheckedOut = true;
    //this._songTitles = songTitle;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum,rating) => currentSum + rating);
    return ratingsSum/this.ratings.length;
  }

  addRating(inputValue) {
    this.ratings.push(inputValue);
  }

}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    }

    getAuthor() {
      return this._author;
    }

    getPages() {
      return this._pages;
    }
}

class Movie extends Media {
  constructor(director, title, runTime, movieCast) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }

  getDirector() {
    return this._director;
  }

  getrunTime() {
    return this._runTime;
  }

  getMovieCast() {
    return this._movieCast;
  }

}

/*Testing Phase, book
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());
*/

//Testing Phase, Movie
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

