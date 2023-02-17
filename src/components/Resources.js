import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { getData, getDataByName } from "../services/elancoServices";
import { constants } from "../shared/constants";
import Grid from "../shared/grid";
function Resources() {
  useEffect(() => {
    fetchResources();
  }, []);

  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState([]);
  async function fetchResources() {
    const response = await getData(constants.RESOURCES);
    setResources(response.data);
  }
  async function fetchResource(params) {
    const response = await getDataByName(params, constants.RESOURCES);
    setResource(response.data);
  }
  return (
    <div>
      <Form.Select
        aria-label="Default"
        onChange={(e) => {
          if (e.target.value) {
            fetchResource(e.target.value);
          }
        }}
      >
        <option value="">Choose Resources</option>
        {resources && resources.length > 0
          ? resources.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))
          : null}
      </Form.Select>

      <Grid
        component={"Resources"}
        rowData={resource}
        columnDefs={constants.GRID_HEADERS}
      />
    </div>
  );
}

export default Resources;
