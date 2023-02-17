import React from "react";
import Nav from "react-bootstrap/Nav";
function Dashboard() {
  return (
    <>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link href="/raw">Raw</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/applications">Applications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resources">Resources</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Dashboard;
