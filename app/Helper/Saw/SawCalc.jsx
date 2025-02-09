// Define weights for each criterion
const weights = {
  releaseYear: 0.2,
  genre: 0.3,
  director: 0.25,
  actor: 0.25,
  rating: 0.2,
  durasi: 0.15, 
};

const parseDuration = (durasi) => {
  const hours = durasi.includes("h") ? parseInt(durasi.split("h")[0]) : 0;
  const minutes = durasi.includes("m") ? parseInt(durasi.split(" ")[1]) : 0;
  return hours * 60 + minutes;
};

const getDurationScore = (minutes) => {
  if (minutes <= 120) return 5; // 1-2 hours
  if (minutes <= 180) return 4; // 2-3 hours
  if (minutes <= 240) return 3; // 3-4 hours
  if (minutes <= 300) return 2; // 4-5 hours
  return 1; // More than 5 hours
};

const getReleaseYearScore = (year) => {
  if (year >= 2021) return 5; // 2021 - 2024
  if (year >= 2015) return 4; // 2015 - 2020
  if (year >= 2011) return 3; // 2011 - 2015
  if (year >= 2001) return 2; // 2001 - 2010
  return 1; // Before 2000
};

export const calculateSawScores = (films, criteria) => {
  return films
    .map((film) => {

      const genreMatch = criteria.genre
        ? film.genre.split(", ").some((g) => g.trim() === criteria.genre)
        : false;

      const directorMatch =
        criteria.director && film.director === criteria.director ? 1 : 0;
      const actorMatch =
        criteria.actor && film.actor.split(", ").includes(criteria.actor)
          ? 1
          : 0;
      const normalizedRating = film.rating / 10; 

      const releaseYearScore = getReleaseYearScore(film.releaseYear);
      const durationMinutes = parseDuration(film.durasi);
      const durationScore = getDurationScore(durationMinutes);

      const score =
        weights.releaseYear * (releaseYearScore / 5) +
        weights.genre * genreMatch +
        weights.director * directorMatch +
        weights.actor * actorMatch +
        weights.rating * normalizedRating +
        weights.durasi * (durationScore / 5);

      return {
        ...film,
        score,
      };
    })
    .sort((a, b) => b.score - a.score); 
};
