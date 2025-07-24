import { configure } from "axios-hooks";
import { LRUCache } from "lru-cache";
import Axios from "axios";
import { cookies } from "next/headers";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const cache = new LRUCache({ max: 10 });

configure({ axios, cache });
