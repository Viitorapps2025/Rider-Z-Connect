import { useState, useEffect } from "react";
import ClubInfo from "../Component/Clubinfo";

const Media = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Instagram User ID and Access Token
  const instagramUserId = "17841455726664134"; // Replace with your Instagram User ID
  const accessToken = "EAAHnw0Jx410BO5ZAHTYMzukvtsIMbalNgWjYZA1ZB5KCaNurwtpJXWzBsR58mkEuSQbGFC1a9LMfNrtMTDcZAhMyXMS5sEt5JpARSzklJ4H9xwMH94VQn6QeL8Fmec72injdvzD3BlTtoA01ExZBhe8WXnwGdX9nzZCJDhNLJcSLK74eOgbmjjHtsVnSaZA"; // Replace with your Instagram Access Token

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.facebook.com/${instagramUserId}/media?fields=id,media_type,media_url,thumbnail_url,timestamp&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }

        const data = await response.json();
        const fetchedPosts = data.data.map((post) => ({
          id: post.id,
          caption: post.caption || "No caption available",
          mediaUrl: post.media_url,
          mediaType: post.media_type,
          timestamp: post.timestamp,
        }));

        setPosts(fetchedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [instagramUserId, accessToken]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-md h-16 w-16 border-4 border-t-4 border-blue-500 animate-spin"></div>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=""   style={{ backgroundColor: "#1d1d1d" }}>
   
  
   
  
  
        <ClubInfo name="Gallery" background="https://www.adventurush.com/wp-content/uploads/2022/06/Overview-Image-3-1024x427.jpg" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6 mt-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="transition-transform transform hover:scale-105 hover:shadow-lg duration-500 opacity-0 animate-fade-in"
              style={{ margin: "20px", padding: "10px", border: "1px solid #ddd" }}
            >
              {post.mediaType === "IMAGE" || post.mediaType === "CAROUSEL_ALBUM" ? (
                <img
                  src={post.mediaUrl}
                  alt={post.caption}
                  style={{ width: "1080px", height: "400px" }}
                  className="mx-auto"
                />
              ) : post.mediaType === "VIDEO" ? (
                <video controls style={{ width: "1080px", height: "400px" }} className="mx-auto">
                  <source src={post.mediaUrl} type="video/mp4" />
                </video>
              ) : null}
            </div>
          ))}
        </div>
      </div>
  
  );
};

export default Media;
