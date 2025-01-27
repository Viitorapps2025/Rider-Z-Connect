
import ClubInfo from "../Component/Clubinfo";
import CardComponent from "../Component/CardComponent";
import image from "../Assets/gallery-6.jpg";
import jsonData from "../RidingReport.json"; // Adjust the path

const GridStyle = () => {
  // Extract the data
  const cards = jsonData.RidingReport;

  return (
    <div className="overflow-hidden">
      <ClubInfo name="REPORT GRID STYLE" background={image} />
      <CardComponent cards={cards} />
    </div>
  );
};

export default GridStyle;
