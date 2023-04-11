import React, { useState } from "react";
import "./App.css";

function useCaseTwo() {
  const [tableValue, setTableValue] = useState([
    {
      webURL: "www.yubi.com",
      status: true,
    },
  ]);

  const [inputValue, setInputValue] = useState({
    webURL: "",
    status: true,
  });

  return (
    <div>
      <div>React Development/ Use Case 2</div>
      <div>
        <div>
          <div>
            <input
              value={inputValue?.webURL}
              placeholder="Enter Web URL"
              onChange={(e) =>
                setInputValue({ ...inputValue, webURL: e.target.value })
              }
            />
          </div>
          <div>
            <button
              onClick={() => {
                setTableValue([...tableValue, inputValue]);
                setInputValue({
                  webURL: "",
                  status: true,
                });
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div>
        <div>Screen 2</div>
        <div>
          <table className="Center">
            <tr>
              <th className="tableHead">Website</th>
              <th className="tableHead">Status</th>
            </tr>
            {tableValue.map((data, index) => {
              return (
                <tr key={index}>
                  <td>
                    <a href={data?.webURL}>{data?.webURL}</a>
                  </td>
                  <td>
                    <button className={data?.status ? "Button" : "Button1"}>
                      button
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default useCaseTwo;
