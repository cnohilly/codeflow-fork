import React, { useState } from 'react';
import { Col, Row, Card, Form, Button } from 'react-bootstrap';

const ProjectForm = () => {
  // displaying project form
  const [displayProjectForm, setDisplayProjectForm] = useState(false);
  
  return (
    // project form card
    <Col>
      <Card className="dark-card-bg text-light shadow mb-4">
        <Card.Body>
          {/* Toggle project form */}
          {!displayProjectForm ? 
            <Button 
              variant="primary" 
              type="button" 
              className="rounded-pill fw-semibold"
              onClick={() => setDisplayProjectForm(!displayProjectForm)}
            >
              <i className="bi bi-plus-lg me-1"></i>
              Create Project
            </Button>
           : 
            <Form>
              {/* project title input */}
              <Form.Group className="mb-3" controlId="formProjectTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Title" 
                  className="bg-dark text-light"
                />
              </Form.Group>

              {/* Look up Tagify or Bootstrap Tags Input to manage tag input field*/}
              {/* project tag input */}
              <Form.Group className="mb-3" controlId="formProjectTags">
                <Form.Label>Tags</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Tags" 
                  className="bg-dark text-light"
                />
              </Form.Group>

              {/* project description textarea */}
              <Form.Group className="mb-3" controlId="formProjectDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                  as="textarea" 
                  placeholder="Description" 
                  rows={4} 
                  className="bg-dark text-light"
                />
              </Form.Group>

              <Row xs={1} md={2}>
                {/* project deployed link input */}
                <Form.Group as={Col} controlId="formDeployedLink" className="mb-3">
                  <Form.Label>Deployed Application Link</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter deployed application link"
                    className="bg-dark text-light" 
                  />
                </Form.Group>
                {/* project repo link input */}
                <Form.Group as={Col} controlId="formRepoLink" className="mb-3">
                  <Form.Label>GitHub Repository Link</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter GitHub repository link" 
                    className="bg-dark text-light"
                  />
                </Form.Group>
              </Row>

              <div className="d-flex justify-content-end mt-3">
                {/* submit button */}
                <Button 
                  variant="primary"
                  type="submit" 
                  size="sm" 
                  className="rounded-pill px-3 me-2 fw-semibold"
                >
                  Submit
                </Button>
                {/* cancel button */}
                <Button 
                  variant="danger" 
                  type="button" 
                  size="sm" 
                  className="rounded-pill px-3 fw-semibold"
                  onClick={() => setDisplayProjectForm(!displayProjectForm)}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          }
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectForm;