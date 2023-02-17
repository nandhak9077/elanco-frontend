import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { getData, getDataByName } from "../services/elancoServices";
import { constants } from "../shared/constants";
import Grid from "../shared/grid";
function Applications() {
  useEffect(() => {
    fetchApplications();
  }, []);
  const [applications, setApplications] = useState([]);
  const [application, setApplication] = useState([]);
  async function fetchApplications() {
    const response = await getData(constants.APPLICATIONS);
    setApplications(response.data);
  }
  async function fetchApplication(params) {
    const response = await getDataByName(params, constants.APPLICATIONS);
    setApplication(response.data);
  }
  return (
    <div>
      <Form.Select
        aria-label="Default"
        onChange={(e) => {
          if (e.target.value) {
            fetchApplication(e.target.value);
          }
        }}
      >
        <option value="">Choose Applications</option>
        {applications && applications.length > 0
          ? applications.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))
          : null}
      </Form.Select>

      <Grid
        component={"Applications"}
        rowData={application}
        columnDefs={constants.GRID_HEADERS}
      />
    </div>
  );
}

export default Applications;
