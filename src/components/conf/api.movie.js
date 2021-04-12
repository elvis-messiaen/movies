import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzRmYzJlMWJhOTczY2ZlZDU0ZmQzMDBjNGVjZjgzMiIsInN1YiI6IjVmZjgyMjBjMzM2ZTAxMDAzZDdiNTg0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oucW8CQESwqZ02WjLcJP5WXicYcuU5lsBLzF8vWADW4'
  return req;
})

export default apiMovie;
