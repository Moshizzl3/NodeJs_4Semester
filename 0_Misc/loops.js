const barbieMovies = [
  { name: "Swan Lake", year: 2001 },
  { name: "Princess and the pauper", year: 2007 },
  { name: "Fairies", year: 2004 },
];

const RatedbarbieMovies = barbieMovies.map((b) => {
  b.rating = 10;
  return b;
});

console.log(RatedbarbieMovies);

const newMovieArr = barbieMovies
  .filter((movie) => movie.year > 2005)
  .reduce((a, b) => a.year + b.year);

console.log(newMovieArr);
