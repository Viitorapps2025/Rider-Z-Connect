import { useParams } from "react-router-dom";
import PhotoCarousel from "../Component/PhotoCarousel";
import RatingContainer from "../Component/RatingContainer";
import DescriptionCard from "../Component/Descriptioncard";
import jsonData from "../breakfast.json";
import CardLayout from "../Component/Cardlayout"
const AdventurePark1 = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const expeditionData = jsonData
    .find((category) => category.category === "Expeditions")
    ?.events.find((event) => event.id === parseInt(id, 10));; // Find the matching event by ID

  if (!expeditionData) {
    return <div className="text-white">No data found for this expedition.</div>;
  }

  return (
    <div className="bg-black overflow-hidden">
      <div>
        <PhotoCarousel images={expeditionData.img || []} />
      </div>
      <div className="overflow-hidden ">
        <RatingContainer
          rating={expeditionData.rating}
          title={expeditionData.title}
          location={expeditionData.location}
          features={expeditionData.features || []}
        />
      </div>
      <div className="pt-10 lg:pr-72">
        <DescriptionCard
          title={expeditionData.title || "No Title"}
          overviewpic={expeditionData.overviewpic || ""}
          overview={expeditionData.overview || ""}
          highlights={expeditionData.highlights || []}
          startingPoint={expeditionData.startingPoint || []}
          startingdirection={expeditionData.startingdirection || ""}
          endingPoint={expeditionData.startingPoint || []}
          endingdirection={expeditionData.startingdirection || ""}
          pdfLinks={expeditionData.pdfLinks || []}
          itinerary={expeditionData.itinerary || []}
          policy={expeditionData.policy|| []}
          stayoptions={expeditionData.stayoptions || []}
          inclusions={expeditionData.inclusions || []}
          note={expeditionData.note || []}
          faqs={expeditionData.faqs || []}
          itinerarydetails={expeditionData.itinerarydetails || []}
          documentsChecklist={expeditionData.documentsChecklist || []}
          images={expeditionData.img || []}
        />
      </div>

      <div className='lg:w-[200vh] lg:mx-auto'>
      <h1 className='text-white pl-8 pt-10 font-bold text-lg'>Similar Activities</h1>

      <CardLayout/>
    </div>
    </div>
  );
};

export default AdventurePark1;
