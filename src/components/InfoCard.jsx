import "../InfoCard.css";

const InfoCard = ({ title, image, text }) => {
  return (
    <div className='info-card'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default InfoCard;
