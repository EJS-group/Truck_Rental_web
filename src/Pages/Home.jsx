
import Tata from "../components/Tata";
import BookTruck from "../components/BookTruck";
import PickTruck from "../components/PickTruck";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Table from "../components/Table";
import { useEffect, useState } from "react";


function Home() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

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
