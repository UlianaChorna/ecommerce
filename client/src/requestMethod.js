import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTZhNWIyYTVlZmMzNTdiZGZjZTA5ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODg2NDMwMDQsImV4cCI6MTY4ODkwMjIwNH0.2QL1J-H7UqlriGH5JOiK5VO9Jq6_ywTxZP2f_d5bLkQ";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});