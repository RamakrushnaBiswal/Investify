import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    axios
      .get("http://localhost:3000/allpositions")
      .then((res) => {
        setPositions(res.data);
      })
      .catch((err) => {
        setError("Failed to fetch positions. Please try again later.");
        console.error(err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((stock) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={stock.id || stock.name}> {/* Use a unique key */}
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg?.toFixed(2) || "0.00"}</td>
                    <td>{stock.price?.toFixed(2) || "0.00"}</td>
                    <td className={profClass}>
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={dayClass}>{stock.day || "N/A"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Positions;