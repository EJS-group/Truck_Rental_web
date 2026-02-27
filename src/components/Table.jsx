import React from "react";

const Table = ({ bookings }) => {
  const hasBookings = bookings && bookings.length > 0;

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr className="table_row">
            <th className="table_header">
              ID
            </th>
            <th className="table_header">
              Truck Type<b>*</b>
            </th>
            <th className="table_header">
              Pick-up<b>*</b>
            </th>
            <th className="table_header">
              Drop-off<b>*</b>
            </th>
            <th className="table_header">
              Pick-up Date<b>*</b>
            </th>
            <th className="table_header">
              Drop-off Date<b>*</b>
            </th>
            <th className="table_header">
              Email<b>*</b>
            </th>
            <th className="table_header">
              Phone Number<b>*</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {!hasBookings ? (
            <tr>
              <td className="table_empty" colSpan="8">
                No bookings yet. Once you confirm a booking, it will appear
                here.
              </td>
            </tr>
          ) : (
            bookings.map((booking, idx) => (
              <tr key={idx} className="table_body_row">
                <td className="table_data">{idx + 1}</td>
                <td className="table_data">{booking.truckType}</td>
                <td className="table_data">{booking.pickUp}</td>
                <td className="table_data">{booking.dropOff}</td>
                <td className="table_data">{booking.pickTime}</td>
                <td className="table_data">{booking.dropTime}</td>
                <td className="table_data">{booking.email}</td>
                <td className="table_data">{booking.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;