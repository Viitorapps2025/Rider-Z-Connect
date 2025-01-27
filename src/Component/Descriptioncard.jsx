import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaFilePdf,
  FaDirections,
} from "react-icons/fa";
import PhotoCarousel from "./PhotoCarousel";
import ReviewStrip from "./Review";
//import { i } from "framer-motion/client";


const DescriptionCard = ({
  images,
  title,
  overviewpic,
  overview,
  highlights = [],
  startingPoint = [],
  endingPoint = [],
  startingdirection,
  endingdirection,
  policy = [],
  pdfLinks = [],
  itinerary = [],
  stayoptions = [],
  note = [],
  faqs = [],
  documentsChecklist=[]
}) => {
  const [expandedSections, setExpandedSections] = useState({
    highlights: false,
    itinerary: false,
    note: false,
    faqs: false,
    stayoptions: false,
  });

  const [daysExpanded, setDaysExpanded] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleDay = (index) => {
    setDaysExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((day) => day !== index)
        : [...prev, index]
    );
  };
  
  console.log('Data flow checking',pdfLinks,images)

  return (
    <div className="max-w-4xl mx-auto bg-[#333333] text-white rounded-lg shadow-lg p-6 mb-5">
      {/* Overview Image */}
      <div className="w-full h-96 bg-black rounded-t-lg overflow-hidden">
        <img
          src={overviewpic}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overview Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400">{overview}</p>
      </div>

      {/* Highlights */}
      <ExpandableSection
        title="Highlights"
        isExpanded={expandedSections.highlights}
        onToggle={() => toggleSection("highlights")}
      >
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              {highlight}
            </li>
          ))}
        </ul>
      </ExpandableSection>

      {/* Itinerary */}
      <ExpandableSection
        title="Itinerary"
        isExpanded={expandedSections.itinerary}
        onToggle={() => toggleSection("itinerary")}
      >
        {itinerary.map((day, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg cursor-pointer mb-4"
            onClick={() => toggleDay(index)}
          >
            <div className="flex items-center gap-3">
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-md">
                Day {day.day || index + 1}
              </span>
              <span className="ml-2">{day.title}</span>
              <span className="ml-auto flex items-center">
                {daysExpanded.includes(index) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>
            {daysExpanded.includes(index) && (
              <div className="mt-4 space-y-2">
                {day.activity?.map((activity, actIndex) => (
                  <p key={actIndex} className="text-gray-300">
                    {activity}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </ExpandableSection>

      {/* Stay Options */}
      <ExpandableSection
        title="Stay Options"
        isExpanded={expandedSections.stayoptions}
        onToggle={() => toggleSection("stayoptions")}
      >
        <ul className="space-y-2">
          {stayoptions.map((option, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              {option}
            </li>
          ))}
        </ul>
      </ExpandableSection>

      {/* Notes */}
      <ExpandableSection
        title="Notes"
        isExpanded={expandedSections.note}
        onToggle={() => toggleSection("note")}
      >
        <ul className="space-y-2">
          {note.map((item, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </ExpandableSection>

      {/* Photo Carousel */}
      <h1 className="text-xl text-white font-bold mt-4 mb-4">Gallery</h1>
  
        <PhotoCarousel images={images}/>

      {/* Starting Point */}
      <Section title="Starting Point">
        <div>
          {startingPoint.map((point, index) => (
            <p key={index} className="text-gray-400">
              {point}
            </p>
          ))}
          {startingdirection && (
            <div className="mt-2 flex items-center">
              <span>Directions:</span>
              <a
                href={startingdirection}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-yellow-500"
              >
                <FaDirections />
              </a>
            </div>
          )}
        </div>
      </Section>

      {/* Ending Point */}
      <Section title="Ending Point">
        <div>
          {endingPoint.map((point, index) => (
            <p key={index} className="text-gray-400">
              {point}
            </p>
          ))}
          {endingdirection && (
            <div className="mt-2 flex items-center">
              <span>Directions:</span>
              <a
                href={endingdirection}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-yellow-500"
              >
                <FaDirections />
              </a>
            </div>
          )}
        </div>
      </Section>

       {/* Itinerary */}
       <ExpandableSection
        title="Policy"
        isExpanded={expandedSections.policy}
        onToggle={() => toggleSection("policy")}
      >
        {policy.map((day, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg cursor-pointer mb-4"
            onClick={() => toggleDay(index)}
          >
            <div className="flex items-center gap-3">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-md">
            {day.policyid || `Policy ${index + 1}`}
          </span>
              <span className="ml-2">{day.title}</span>
              <span className="ml-auto flex items-center">
                {daysExpanded.includes(index) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>
            {daysExpanded.includes(index) && (
              <div className="mt-4 space-y-2">
                {day.activity?.map((activity, actIndex) => (
                  <p key={actIndex} className="text-gray-300">
                    {activity}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </ExpandableSection>

      {/* Attachments */}
      <Section title="Attachments">
      <div className="flex flex-wrap gap-4">
  {pdfLinks.length > 0 ? (
    pdfLinks.map((link, index) => (
      <a
        key={index}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
      >
        <FaFilePdf className="text-yellow-500 text-4xl mr-4" />
        <span>{link.title || "Trip Details"}</span>
      </a>
    ))
  ) : (
    <p>No attachments available.</p>
  )}
</div>


      </Section>


      {/* FAQs */}
      <ExpandableSection
        title="FAQs"
        isExpanded={expandedSections.faqs}
        onToggle={() => toggleSection("faqs")}
      >
        {faqs.map((day, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg cursor-pointer mb-4"
            onClick={() => toggleDay(index)}
          >
            <div className="flex items-center gap-3">
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-md">
                {day.day || index + 1}
              </span>
              <span className="ml-2">{day.question}</span>
              <span className="ml-auto flex items-center">
                {daysExpanded.includes(index) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>
            {daysExpanded.includes(index) && (
              <div className="mt-4 space-y-2">
                <p> {day.answer}</p>
              </div>
            )}
          </div>
        ))}
      </ExpandableSection>

      <ExpandableSection
        title="Documents to Carry"
        isExpanded={expandedSections.documentsChecklist}
        onToggle={() => toggleSection("documentsChecklist")}
      >
        <ul className="space-y-2">
          {documentsChecklist.map((item, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              {item}
            </li>
          ))}
        </ul>

       
      </ExpandableSection>

      <ReviewStrip/>

    </div>
  );
};

const ExpandableSection = ({ title, isExpanded, onToggle, children }) => (
  <div className="p-4 border-y-2 border-gray-500">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onToggle}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
    </div>
    {isExpanded && <div className="mt-4">{children}</div>}
  </div>
);

const Section = ({ title, children }) => (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

DescriptionCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  overviewpic: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string),
  stayoptions: PropTypes.arrayOf(PropTypes.string),
  note: PropTypes.arrayOf(PropTypes.string),
  documentsChecklist:PropTypes.arrayOf(PropTypes.string),
  startingPoint: PropTypes.arrayOf(PropTypes.string),
  endingPoint: PropTypes.arrayOf(PropTypes.string),
  startingdirection: PropTypes.string,
  endingdirection: PropTypes.string,
  pdfLinks: PropTypes.arrayOf(
    PropTypes.shape({
      
      title: PropTypes.string,
      link: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  itinerary: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      title: PropTypes.string,
      activity: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
  policy: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
};

export default DescriptionCard;
