import { useEffect, useState } from "react";
import Table from "./Table";

function ParentComponent() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await fetch("http://localhost:5000/bookings");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      <Table bookings={bookings} />
    </>
  );
}

export default ParentComponent;