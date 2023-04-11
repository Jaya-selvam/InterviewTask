import React, { useState } from "react";
import "./App.css";

function useCaseOne() {
  const [tableValue, setTableValue] = useState([
    {
      tableName: "interview.geography_columns",
      uniqueName: "",
      columnName: "city_name",
      cityName: "Mumbai",
    },
  ]);

  const [inputValue, setInputValue] = useState({
    tableName: "",
    uniqueName: "",
    columnName: "",
    cityName: "",
  });

  const onChangeTableData = (input, addIndex) => {
    let list = [];
    tableValue.map((data, index) => {
      if (index === addIndex) {
        list.push({ ...data, cityName: input });
      } else {
        list.push(data);
      }
    });
    setTableValue(list);
  };
  return (
    <div>
      <div>React Development/ Use Case 1</div>
      <div>
        <div>Screen 1</div>
        <div>
          <div>
            <input
              value={inputValue?.tableName}
              placeholder="Table Name"
              onChange={(e) =>
                setInputValue({ ...inputValue, tableName: e.target.value })
              }
            />
          </div>
          <div>
            <input
              value={inputValue?.uniqueName}
              placeholder="Unique Column"
              onChange={(e) =>
                setInputValue({ ...inputValue, uniqueName: e.target.value })
              }
            />
          </div>
          <div>
            <input
              value={inputValue?.columnName}
              placeholder="Column Name"
              onChange={(e) =>
                setInputValue({ ...inputValue, columnName: e.target.value })
              }
            />
          </div>
          <div>
            <button
              onClick={() => {
                setTableValue([...tableValue, inputValue]);
                setInputValue({
                  tableName: "",
                  columnName: "",
                  uniqueName: "",
                  cityName: "",
                });
              }}
            >
              Manual Update
            </button>
          </div>
        </div>
      </div>

      <div>
        <div>Screen 2</div>
        <div>
          <table className="Center">
            <tr>
              <th className="tableHead">Table Name</th>
              <th className="tableHead">Unique Column</th>
              <th className="tableHead1">Distinct Value</th>
              <th className="tableHead2">User Input</th>
            </tr>
            {tableValue.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data?.tableName}</td>
                  <td>{data?.columnName}</td>
                  <td>{data?.cityName}</td>
                  <td>
                    <input
                      onChange={(e) => onChangeTableData(e.target.value, index)}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default useCaseOne;
