import "./BookTicketsimg.css";

const BookTicketsimg = ({imageUrls}) => {
  const image6=imageUrls;
  return ( 
  <div className="">
  <div className="banner-item" >
    <h2 className="booktexting">Book Tickets in advance <br />
     for the lowest cost</h2>
  </div>
    <img className="booktickets" src={image6} alt="booktickets" />
  </div>);
};

export default BookTicketsimg;
