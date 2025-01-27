

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      title: "In Pics: Feast your eyes on the BMW F450 GS Concept ADV showcased at the Auto Expo 2025",
      date: "Jan 18, 2025",
      author: "HT Auto Desk",
      image: "https://images.hindustantimes.com/auto/img/2025/01/18/600x338/BMW_F450_GS_Concept_1737179559067_1737179559283.jpeg", // Replace with actual image
    },
    {
      id: 2,
      title: "Bharat Mobility 2025: BMW R 1300 GS Adventure launched, priced at ₹ 22.95 lakh",
      date: "Jan 18, 2025",
      author: "Sameer Fayaz Contractor ",
      image: "https://images.hindustantimes.com/auto/img/2025/01/18/600x338/BMW_R_1300_GS_Adventure_1_1720247724353_1737181497188.jpg", // Replace with actual image
    },
    {
      id: 3,
      title: "Auto Expo 2025: 2025 BMW S 1000 RR launched with upgrades, priced at ",
      date: "Jan 18, 2025",
      author: " Sameer Fayaz Contractor ",
      image: "https://images.hindustantimes.com/auto/img/2025/01/18/400x225/s-1000-rr-2_1737175883790_1737175893417.jpg", // Replace with actual image
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="col-span-1">
          <h3 className="text-sm uppercase font-semibold tracking-widest text-red-500 mb-2">
            Latest News
          </h3>
          <h2 className="text-4xl font-extrabold leading-tight mb-6">
            Recent Posts
          </h2>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3">
            See All News
          </button>
        </div>

        {/* Posts Grid */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-md relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Post Content */}
              <h3 className="mt-4 text-lg font-bold group-hover:text-red-500">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                by{" "}
                <span className="text-white font-semibold">{post.author}</span>{" "}
                • {post.date}
              </p>
              {/* Underline */}
              <div className="mt-4 border-b-2 border-red-500 w-1/4 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      
    </section>
  );
};

export default RecentPosts;
