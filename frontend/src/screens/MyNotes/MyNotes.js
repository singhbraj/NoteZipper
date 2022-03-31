import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import notes from "../../data/notes";
import Notes from "../../data/notes";



function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <span
       style={{cursor:"pointer"}}
        onClick={decoratedOnClick}
      >
        {children}
      </span>
    );
  }

const MyNotes = () => {
  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) {
    }
  };



  return (
    <MainScreen title="Welcome back Braj Kishor Singh.... ">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pinter",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <CustomToggle eventKey="0">
                  {note.title}
                </CustomToggle>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
