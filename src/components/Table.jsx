import React from 'react';

const Table = ({ bookings }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table_row">
            <th className="table_header">ID</th>
            <th className="table_header">Truck Type<b>*</b></th>
            <th className="table_header">Pick-up<b>*</b></th>
            <th className="table_header">Drop-off<b>*</b></th>
            <th className="table_header">Pick-up Date<b>*</b></th>
            <th className="table_header">Drop-off Date<b>*</b></th>
            <th className="table_header">Email<b>*</b></th>
            <th className="table_header">Phone Number<b>*</b></th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 ? (
            <tr><td colSpan="8" style={{
              textAlign: "center",
              padding: "12px",
              fontSize: "1.6rem",
              fontWeight: 600,
              marginBottom: "1.2rem"
            }}>No bookings yet.</td></tr>
          ) : (
            bookings.map((booking, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #ddd" }}>
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