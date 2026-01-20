import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import VideoCard from "./VideoCard";
import {
  YOUTUBE_SEARCH_RESULTS_API,
  YOUTUBE_VIDEOS_BY_ID_API,
} from "../utils/constants";

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      try {
        setLoading(true);

        // 1️⃣ Search API
        const searchRes = await fetch(YOUTUBE_SEARCH_RESULTS_API + query);
        const searchJson = await searchRes.json();

        const videoIds = searchJson?.items
          ?.map((item) => item.id?.videoId)
          .filter(Boolean)
          .join(",");

        if (!videoIds) {
          setVideos([]);
          return;
        }

        // 2️⃣ Videos API (WITH KEY)
        const videosRes = await fetch(YOUTUBE_VIDEOS_BY_ID_API + videoIds);
        const videosJson = await videosRes.json();

        setVideos(videosJson?.items || []);
      } catch (err) {
        console.error("Error fetching search results:", err);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) {
    return <div className=" p-2 md:p-4">Loading results...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-base md:text-lg font-semibold mb-4">
        Results for <span className="text-blue-600">{query}</span>
      </h1>

      <div className="flex flex-wrap gap-2 md:gap-6 justify-center ">
        {videos.map((video) => (
          <VideoCard key={video.id} info={video} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
