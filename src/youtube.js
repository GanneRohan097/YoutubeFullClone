import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";
export const fetchTrendingVideos = async () =>{
    try{
        const res = await axios.get(`${BASE_URL}/videos`, {
            params: {
                part: "snippet,statistics",
                chart: "mostPopular",
                maxResults: 12,
                regionCode: "IN",
                key: API_KEY,
            },
        });
        return res.data.items;
    } catch(err){
        console.log(API_KEY);
        console.error("Error in fetching videos");
  console.error("FULL ERROR:", err);
  console.error("RESPONSE:", err.response);
        return [];
    }
}
export const searchVideos = async (query) => {
    try {
        const res = await axios.get(`${BASE_URL}/search`, {
            params: {
                part: "snippet",
                q: query,
                type: "video",
                maxResults: 12,
                regionCode: "IN",
                key: API_KEY,
            },
        });
        return res.data.items;
    } catch (err) {
        console.error("Error searching videos:", err.response);
        return [];
    }
};