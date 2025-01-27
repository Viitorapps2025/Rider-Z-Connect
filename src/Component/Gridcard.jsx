//import React from "react";
import PropTypes from "prop-types";
//import Cardinfo from "../Component/Clubinfo";
//import back from "../Assets/gallery-8.jpg";

const Gridcard = ({
  title,
  date,
  author,
  introduction,
  sections = [],
  Legendary = [],
  powered = [],
  galleryImages = [],
  profileImage,
}) => {
  return (
    <div>
      {/* Club Info Section */}
      {/* <Cardinfo name={title} background={back} /> */}
      <div className="bg-gray-900 text-white p-6 md:p-12">
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              <p className="text-red-500 font-semibold text-sm"></p>
              <h1 className="text-2xl md:text-4xl font-bold my-4">
                {title}
              </h1>
              <p className="text-gray-300 mb-4">
                Author : {author}
              </p>
              <p className="text-gray-300 mb-4">
                {introduction}
              </p>

              <>
                <h2 className="text-xl font-semibold mt-6 mb-4"></h2>
                <p className="text-gray-300 mb-4"></p>
              </>
            </article>

            <div className="w-full flex flex-col-reverse lg:flex-row">
              {sections.map((section, index) => (
                <div className="w-full" key={index}>
                  <p className="text-xl font-semibold mb-4">
                    {section.title}
                  </p>
                  <p className="text-gray-300"></p>
                  {section.content}
                </div>
              ))}

              {/* Secondary Image */}
              <div className="overflow-hidden rounded-lg border w-full mb-4 lg:mb-0 lg:w-[50%] h-fit">
                <img
                  src="https://demo2.wpopal.com/lexrider/wp-content/uploads/2019/04/report-8-1200x700.jpg" // Replace with your image path
                  alt="Journey Image"
                  className="w-full lg:h-[35vh] object-cover"
                />
              </div>
            </div>
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
                {galleryImages.map((post, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <img
                      src={post}
                      alt={`Post ${index}`}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="text-white font-bold hover:text-red-500 transition duration-300">
                        {post}
                      </h4>
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
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">Tag 1</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">Tag 2</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">Tag 3</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">Tag 4</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">Tag 5</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">Tag 6</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md">Tag 7</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="">
          {/* Text Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center mt-4 max-w-[830px]">
            <p className="text-xl font-bold text-gray-800 flex">
              <a className="text-yellow-500 font-extrabold lg:text-9xl">&quot;</a>
              THE REST OF THE JOURNEY THROUGH TO LAGOS WAS COOL. LUCKY FOR US TRAFFIC WAS LIGHT AND WE MADE VERY GOOD TIME. WE ENDED THE JOURNEY AT THE CALDRON IN AJAHSA WITH THANKS TO THE ALMIGHTY FOR JOURNEY MERCIES
            </p>
          </div>

          {/* Image Gallery */}
          <div className="flex flex-wrap w-full">
            <div className="w-full lg:w-[60%] lg:flex lg:flex-wrap gap-2 mt-6 ">
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
                className="lg:w-[35%] rounded-lg shadow-md object-cover"
              />
            </div>
            {/* Legendary */}
            <div className="w-full lg:w-[40%] lg:translate-y-[25%]">
              <div className="flex flex-col divide-y sm:px-8 lg:px-8 xl:pl-8 divide-gray-700">
                <h1 className="text-yellow-500 font-semibold text-3xl pb-12">{Legendary[0]?.title}</h1>
                {Legendary[0]?.subsections?.map((legend, index) => (
                  <details key={index}>
                    <summary className="py-6 font-bold outline-none cursor-pointer text-lg">
                      {legend.title}
                    </summary>
                    <div className="px-4 pb-4 text-white">
                      <p>{legend.content}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-6">
            <h1 className="text-black text-xl font-bold">{powered.title}</h1>
            {powered.contents?.map((item, index) => (
              <div key={index}>
                <p className="text-gray-500">{item}</p>
              </div>
            ))}
          </div>

          {/* Previous Post Link */}
          <div className="mt-10 border-t-2 border-gray-500">
            <a href="#" className="text-red-500 font-bold hover:text-red-700">
              Previous Post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Gridcard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  author: PropTypes.string,
  introduction: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  Legendary: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subsections: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          content: PropTypes.string,
        })
      ),
    })
  ),
  powered: PropTypes.shape({
    title: PropTypes.string,
    contents: PropTypes.arrayOf(PropTypes.string),
  }),
  galleryImages: PropTypes.arrayOf(PropTypes.string),
  profileImage: PropTypes.string,
};

export default Gridcard;
