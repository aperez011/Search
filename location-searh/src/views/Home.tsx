import Header from "./NavBar";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { GetAll, PostLocation } from '../https/LocationServices';
import { useEffect, useState } from "react";

function Home() {
    const [show, setShow] = useState(false);
    const [locationName, setlocationName] = useState('');
    const [locationAddress, setlocationAddress] = useState('');
    const [locationOpenTime, setlocationOpenTime] = useState('');
    const [locationCloseTime, setlocationCloseTime] = useState('');
    const [data, setdata] = useState([{ name: '', address: '', openTime: '', closeTime: '' }]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //variable
    let location = {};
    //let data = new Array(0);

    useEffect(() => {
        getLocations();
    }, []);

    const getLocations = () => {
        try {
            GetAll().then((dat) => {
                setdata(dat.data);
                console.log(dat);
            }).catch(err => {
                alert('Login failed. Please check your credentials and try again.');
            });
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    const NewLocation = async () => {
        try {
            const resp = PostLocation({ name: locationName, address: locationAddress, openTime: locationOpenTime, closeTime: locationCloseTime });
            resp.then((dat) => {
                setdata(dat.data);
            }).catch(err => {
                alert('Login failed. Please check your credentials and try again.');
            });
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    const EditLocation = async (loc: any) => {
        console.log(data);
    };

    const RemoveLocation = async (locId: any) => {
        console.log(data);
    };

    return (
        <div>
            <Header />
            <div className="centered-div">

                <Row>
                    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="input-group-prepend">
                            <div className="text-start">
                                <h1>Locations</h1>
                            </div>
                        </div>
                        <div className="btn-group" role="group" aria-label="Add locations">
                            <Button className="button" variant="primary" type="button" onClick={handleShow}>
                                Add
                            </Button>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Open Time</th>
                                    <th>Close Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(() => {
                                    const rows = [];
                                    /*if (d == 0) {
                                        rows.push(<tr><td colSpan={6}><b>No Data ..........</b></td></tr>);
                                    }
                                    else {*/
                                    console.log(data);

                                    for (let i = 0; i < data.length; i++) {
                                        rows.push(<tr>
                                            <td>{i + 1}</td>
                                            <td>{data[i].name}</td>
                                            <td>{data[i].address}</td>
                                            <td>{data[i].openTime}</td>
                                            <td>{data[i].closeTime}</td>
                                            <td>
                                                <Button className="button" variant="primary" type="button" onClick={EditLocation}>
                                                    Edit
                                                </Button>
                                                &emsp;
                                                <Button className="button" variant="danger" type="button" onClick={RemoveLocation}>
                                                    X
                                                </Button>
                                            </td>
                                        </tr>);
                                    }
                                    //}
                                    return rows;

                                })()}
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel
                        controlId="locName"
                        label="Location Name"
                        className="mb-3">
                        <Form.Control type="text" value={locationName} onChange={(e) => setlocationName(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="address"
                        label="Address"
                        className="mb-3">
                        <Form.Control type="text" value={locationAddress} onChange={(e) => setlocationAddress(e.target.value)} />
                    </FloatingLabel>


                    <FloatingLabel
                        controlId="openTime"
                        label="Open Time"
                        className="mb-3">
                        <input type="time" className="form-control" value={locationOpenTime} onChange={(e) => setlocationOpenTime(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="closeTime"
                        label="Close Time"
                        className="mb-3">
                        <input type="time" className="form-control" value={locationCloseTime} onChange={(e) => setlocationCloseTime(e.target.value)} />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={NewLocation}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Home;