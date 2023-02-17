import React from "react";
import Table from "react-bootstrap/Table";
function Grid({ component, rowData, columnDefs }) {
  return (
    <div>
      <br></br>
      <h3>{component}</h3>
      {rowData && rowData.length && rowData.length > 0 ? (
        <h5>Overall Records : {rowData.length}</h5>
      ) : null}
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columnDefs.length > 0 &&
              columnDefs.map((header, index) => (
                <>
                  <th key={index}>{header}</th>
                </>
              ))}
          </tr>
        </thead>
        <tbody>
          {rowData && rowData.length && rowData.length > 0 ? (
            rowData.map((item) => (
              <>
                <tr>
                  <td>{item.ConsumedQuantity}</td>
                  <td>{item.Cost}</td>
                  <td>{item.Date}</td>
                  <td>{item.InstanceId}</td>
                  <td>{item.MeterCategory}</td>
                  <td>{item.ResourceGroup}</td>
                  <td>{item.ResourceLocation}</td>
                  <td>{item.Tags.environment}</td>
                  <td>{item.UnitOfMeasure}</td>
                  <td>{item.Location}</td>
                  <td>{item.ServiceName}</td>
                </tr>
              </>
            ))
          ) : (
            <>
              <tr>
                <td colSpan={11}>No Data Found</td>
              </tr>
            </>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Grid;
