import React, { useState, useMemo } from "react";

const Table = ({ bookings }) => {
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "ascending" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sortedBookings = useMemo(() => {
    let sortableItems = bookings ? [...bookings] : [];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [bookings, sortConfig]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedBookings.slice(start, start + itemsPerPage);
  }, [sortedBookings, currentPage]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? " ↑" : " ↓";
    }
    return "";
  };

  const totalPages = Math.ceil((bookings?.length || 0) / itemsPerPage);
  const hasBookings = paginatedData.length > 0;

  return (
    <section className="table-section">
      <div className="container">
        <div className="table-container">
          <h2>Recent Bookings</h2>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr className="table_row">
                  {[
                    { label: "ID", key: "id" },
                    { label: "Name", key: "name" },
                    { label: "Truck Type", key: "truckType" },
                    { label: "Pick-up", key: "pickUp" },
                    { label: "Drop-off", key: "dropOff" },
                    { label: "Pick-up Date", key: "pickTime" },
                    { label: "Drop-off Date", key: "dropTime" },
                    { label: "Email", key: "email" },
                    { label: "Phone Number", key: "phone" },
                  ].map((column) => (
                    <th
                      key={column.key}
                      className="table_header"
                      onClick={() => requestSort(column.key)}
                      style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                    >
                      {column.label}{getSortIndicator(column.key)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {!hasBookings ? (
                  <tr className="table_row">
                    <td className="table_data" colSpan="9" style={{ textAlign: "center" }}>
                      No bookings yet.
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((booking, idx) => (
                    <tr key={idx} className="table_row">
                      <td className="table_data">{booking.id}</td>
                      <td className="table_data">{booking.name}</td>
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

          {totalPages > 1 && (
            <div className="pagination" style={{ marginTop: "20px", textAlign: "center" }}>
              <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>
                Previous
              </button>
              <span style={{ margin: "0 15px" }}>Page {currentPage} of {totalPages}</span>
              <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Table;
