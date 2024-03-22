import axios from "axios";
import { ref } from "vue";

const movieNowPlaying = ref(null);
const movieUpcoming = ref(null);
const moviePopular = ref(null);

// Now Playing
async function fetchNowPlaying() {
  const response = await axios.get('http://127.0.0.1:8000/api/movies/getNowPlaying');
  if(response.status == 200) {
    movieNowPlaying.value = response.data;
    return true;
  }
  return false;
}

function getNowPlaying() {
  if(movieNowPlaying.value) {
    return movieNowPlaying.value;
  }
  return null;
}

// Up Comming
async function fetchUpcoming() {
  const response = await axios.get('http://127.0.0.1:8000/api/movies/getUpcoming');
  if(response.status == 200) {
    movieUpcoming.value = response.data;
    return true;
  }
  return false;
}

function getUpcoming() {
  if(movieUpcoming.value) {
    return movieUpcoming.value;
  }
  return null;
}

// Get popular
async function fetchPopular() {
  const response = await axios.get('http://127.0.0.1:8000/api/movies/getPopular');
  if(response.status == 200) {
    moviePopular.value = response.data;
    return true;
  }
  return false;
}

function getPopular() {
  if(moviePopular.value) {
    return moviePopular.value;
  }
  return null;
}

// Lấy id video trailer
function extractYouTubeId(url) {
  let videoId = '';
  const pattern = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(pattern);
  if (match) {
    videoId = match[1];
  }
  return videoId;
}

async function fetchWeekday() {
  const response = await axios.get('http://127.0.0.1:8000/api/movies/getWeekday');
  if(response.status == 200) {
    return response.data;
  }
  return null;
}

async function fetchShowTimeByWeekdayMovie(idMovie, idWeekday) {
  const response = await axios.get(`http://127.0.0.1:8000/api/movies/getShowtimeMovieId/${idWeekday}/${idMovie}`);
  if(response.status == 200) {
    return response.data;
  }
  return null;
}

async function fetchAllShowtime(idWeekday) {
  const response = await axios.get(`http://127.0.0.1:8000/api/movies/getShowtime/${idWeekday}`);
  if(response.status == 200) {
    // console.log(response.data.hasOwnProperty('null'));
    if(response.data) return response.data;
    return null;
  }
  return null;
}

export function useMovie() {
  return { 
    fetchAllShowtime,
    getPopular,
    fetchPopular,
    fetchShowTimeByWeekdayMovie,
    fetchWeekday,
    extractYouTubeId,
    getNowPlaying,
    fetchNowPlaying, 
    getUpcoming,
    fetchUpcoming
  }
}