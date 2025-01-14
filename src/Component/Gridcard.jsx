
const Gridcard = () => {
  const posts = [
    {
      id: 1,
      title: "Bold, bright, animated, mobile: the top design trends right now",
      date: "April 17, 2019",
      image:
        "https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/blog-14-100x120.jpg", // Replace with actual image paths
    },
    {
      id: 2,
      title: "15 books every designer needs to read",
      date: "April 17, 2019",
      image:
        "https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/blog-14-100x120.jpg",
    },
    {
      id: 3,
      title: "Tooting your own horn: tales of impostor syndrome",
      date: "April 17, 2019",
      image:
        "https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/blog-14-100x120.jpg",
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 md:p-12">
      <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Section */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/report-8-1200x700.jpg" // Replace with your image path
              alt="Blog Header"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Blog Content */}
          <article>
            <p className="text-red-500 font-semibold text-sm">April 20</p>
            <h1 className="text-2xl md:text-4xl font-bold my-4">
              Journey through the mountains
            </h1>
            <p className="text-gray-300 mb-4">
              We woke up to prepare for the trip back to Lagos. Breakfast was
              yam and sauce, yam and egg, and coffee and chocolate drink.
            </p>
            <p className="text-gray-300 mb-4">
              Once we had eaten and everyone was set, we were on board and set
              out at about 6 am. Our route was via Ondo town, Ore, Ogunpalu,
              Edo, Ogbemudia farms, Benin, Sagamu, Lagos.
            </p>
            <p className="text-gray-300 mb-4">
              Heading out, we stopped to fill up at the NNPC station in Ore and
              then set off.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-4">
              Journey took us through to the life
            </h2>
          </article>
          <div className="w-full flex  flex-col-reverse lg:flex-row">
            <div className=" w-full">
              <p className="text-gray-300 mb-4 ">
                In looking for alternative routes, as a sharp guy, i left my
                visor open lo and behold my first fly in the helmet experience
                when on the highway. Its a not a funny something o, I was
                perturbed and almost overwhelmed with the buzzing in the helmet
                and had to make an emergency stop to save myself.
              </p>
              <p className="text-gray-300">
                {" "}
                Of course my guardians were there to sort me out FD and Maestro.
                Once i sorted out the helmet we rolled off and caught up with
                the others “they had waited further on” and we continued out of
                Osogbo through to Ede (nice breezy and fun ride).
                bg-calltoaction{" "}
              </p>
            </div>

            {/* Secondary Image */}
            <div className="overflow-hidden rounded-lg  border w-full mb-4 lg:mb-0 lg:w-[50%] h-fit">
              <img
                src="https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/report-8-1200x700.jpg" // Replace with your image path
                alt="Journey Image"
                className="w-full lg:h-[35vh]  object-cover"
              />
            </div>
          </div>
          <p className="text-gray-300 ">
            While filtering through the traffic, a pedestrian crossing without
            any care ran into Dicta’s bike and broke the right side mirror ( I
            could see fire coming out of RC’s nose and ears fortunately Kanu
            rode up diffusing the situation).
          </p>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Search Box */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Search</h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
            />
          </div>

          {/* Recent Posts */}
          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.id} className="flex items-start space-x-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-white font-bold hover:text-red-500 transition duration-300">
                      {post.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 h-1 bg-red-500"></div>
          </div>

          {/* Categories */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Uncategorized(14)
                </a>
              </li>
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">
                Tag 1
              </span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">
                Tag 2
              </span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">
                Tag 3
              </span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">
                Tag 4
              </span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">
                Tag 5
              </span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">
                Tag 6
              </span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">
                Tag 7
              </span>
            </div>
          </div>
        </aside>
      </div>
      <div className="max-w-[820px]  ">
        {/* Text Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <p className="text-xl font-bold text-gray-800 flex">
            <a className="text-yellow-500 font-extrabold lg:text-9xl">&quot;</a>
            THE REST OF THE JOURNEY THROUGH TO LAGOS WAS COOL. LUCKY FOR US
            TRAFFIC WAS LIGHT AND WE MADE VERY GOOD TIME. WE ENDED THE JOURNEY
            AT THE CALDRON IN AJAHSA WITH THANKS TO THE ALMIGHTY FOR JOURNEY MERCIES&quot;
          </p>
        </div>

        {/* Image Gallery */}
        <div className="lg:flex lg:flex-wrap  gap-4 mt-6">
          <img
            src="https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/report-3-o6rt2muowtszeotvsfixmqdyh2eb9wxa0mgmrfvdf6.jpg"
            alt="Bike 1"
            className="lg:w-[35%] h-fit rounded-lg shadow-md object-cover "
          />
          <img
            src="https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/blog-6-o6rt2fc20fvssue46fz5a2r84htcfy96dyaisdocxe.jpg"
            alt="Bike 2"
            className="lg:w-[63%] rounded-lg shadow-md object-cover"
          />
          <img
            src="https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/blog-6-o6rt2fc20fvssue46fz5a2r84htcfy96dyaisdocxe.jpg"
            alt="Bike 3"
            className="lg:w-[63%] rounded-lg shadow-md object-cover"
          />
          <img
            src="https://demo2.wpopal.com/lexrider/wp-content/uploads/elementor/thumbs/report-3-o6rt2muowtszeotvsfixmqdyh2eb9wxa0mgmrfvdf6.jpg"
            alt="Bike 4"
            className="lg:w-[35%]  rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Additional Content */}
        <div className="mt-6 ">
          <p className="text-gray-500">
            There was a point where I was overtaking a trailer on the rather
            rough side of the road and right then the road suddenly went
            rougher; written man was doing 60, so you increase your speed get
            past the trailer and bring your bike onto the road...
          </p>
        </div>

        {/* Previous Post Link */}
        <div className="mt-10 border-t-2 border-gray-500  ">
          <a href="#" className="text-red-500 font-bold hover:text-red-700">
            Previous Post
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gridcard;
