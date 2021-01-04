//http://www.omdbapi.com/?i=tt3896198&apikey=e4ae7b4c

// function fetchMovie() {
//   fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e4ae7b4c')
//     .then(res => res.json())
//     .then(json => console.log(json));
//   }

const fetchMovie = async () => {
  const res = await fetch('http://www.omdbapi.com/?s=ram&apikey=e4ae7b4c');
  const json = await res.json();
  
  console.log(json);
}

  fetchMovie();