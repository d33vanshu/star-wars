let movies_div = document.getElementById("movies");
var timerId;
const searchMovies = async () => {
  let query = document.getElementById("query").value;
  let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
  let data = await res.json();
  return data.results;
};

const throttleFunction = () => {
  // 1. User made first request (ave)
  // 2. Making an API request
  // 3. User typed more letters (aveng)
  // 4. Make an API requst aven, aveng ...

  // with setTimeout, continuous requests (making it after 2 sec)

  // 5. Use setTimeout to delay a request

  // valid timerid
  if (timerId) {
    return false;
  }

  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 500);
  //   console.log(timerId);
};
const appendMovies = (d) => {
  movies_div.innerHTML = null;
  d.forEach(({ name, gender, birth_year }) => {
    let div = document.createElement("div");
    div.className = "search-content";
    let h5 = document.createElement("h5");
    h5.innerHTML = name;
    let p_gend = document.createElement("p");
    p_gend.className = "gender";
    p_gend.innerHTML = gender;
    let p_birth = document.createElement("p");
    p_birth.className = "birth";
    p_birth.innerHTML = birth_year;
    div.append(h5, p_gend, p_birth);
    movies_div.append(div);
  });
};
const main = async () => {
  let movies = await searchMovies();
  appendMovies(movies);
};
