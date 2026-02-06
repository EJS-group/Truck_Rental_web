
import Tata from "../components/Tata";
import BookTruck from "../components/BookTruck";
import PickTruck from "../components/PickTruck";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Table from "../components/Table";
import { useState } from "react";


function Home() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  return (
    <>
      <Tata />
      <BookTruck addBooking={addBooking} />
      <Table bookings={bookings} />
      <PickTruck /> 
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
