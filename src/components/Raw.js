import React, { useEffect, useState } from "react";
import { getData } from "../services/elancoServices";
import { constants } from "../shared/constants";
import Grid from "../shared/grid";

function Raw() {
  useEffect(() => {
    fetchRaw();
  }, []);
  const [rawData, setRawData] = useState([]);
  async function fetchRaw() {
    const response = await getData(constants.RAW);
    setRawData(response.data);
  }
  return (
    <div>
      <Grid
        component={"Raw"}
        rowData={rawData}
        columnDefs={constants.GRID_HEADERS}
      />
    </div>
  );
}

export default Raw;
