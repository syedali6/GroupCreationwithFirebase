import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { auth, db } from "../../DataBase/firebase";
import {
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
} from "firebase/firestore";
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

const AddStudents = ({ id, dataFetch }) => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loader, setLoader] = useState(false);
    const getData = async (e) => {
        e.preventDefault();
        setLoader(true);
        if (formData.studentEmail && formData.studentName && formData.studentPhone) {
            const studentEmailToCheck = formData.studentEmail.toLowerCase();
            const studentNameToCheck = formData.studentName.toLowerCase();
            const contentDocRef = collection(db, "student_list");

            const querySnapshot = await getDocs(contentDocRef);

            let emailExists = false;
            let nameExists = false;
            let numberExists = false;
            querySnapshot.forEach((doc) => {
                const studentData = doc.data();
                if (studentData.studentEmail.toLowerCase() === studentEmailToCheck) {
                    emailExists = true;
                }
                if (studentData.studentName.toLowerCase() === studentNameToCheck) {
                    nameExists = true;
                }
                if (studentData.studentPhone === formData.studentPhone) {
                    numberExists = true;
                }
            });

            if (emailExists) {
                toast.warning("A student with this email already exists.");
                return;
            }
            if (nameExists) {
                toast.warning("A student with this name already exists.");
                return;
            }
            if (numberExists) {
                toast.warning("A student with this number already exists.");
                return;
            }

            // Proceed with adding the new student
            const data = {
                ...formData,
                studentEmail: studentEmailToCheck,
                studentName: studentNameToCheck,
                refId: id,
            };
            const docRef = await addDoc(contentDocRef, data);

            toast.success("Member Added Successfully");

            // Uncomment to send data to the backend if needed

            // try {
            //     const response = await axios.post(
            //         "http://localhost:5001/groupcreation-95ea3/us-central1/getStudentData",
            //         data,
            //         {
            //             headers: {
            //                 "Content-Type": "application/json"
            //             }
            //         }
            //     );
            //     const Data = response.data;
            //     toast.success(Data.message);
            // } catch (error) {
            //     console.error("Error posting data:", error);
            // }

            handleClose();
            dataFetch();
            setFormData([]); // Clear form
        } else {
            toast.warning("Required fields are missing");
        }

        setLoader(false);


    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <>
            <Button className='btn-styled' onClick={handleShow}>
                Add Members
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Members</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => getData(e)}>
                        <div>
                            <Form.Label htmlFor="studentName">Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="studentName"
                                name="studentName"
                                aria-describedby="passwordHelpBlock"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <Form.Label htmlFor="studentEmail">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="studentEmail"
                                name="studentEmail"
                                aria-describedby="passwordHelpBlock"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <Form.Label htmlFor="studentPhone">Phone Number</Form.Label>
                            <Form.Control
                                type="number"
                                id="studentPhone"
                                name="studentPhone"
                                aria-describedby="passwordHelpBlock"
                                onChange={(e) => handleChange(e)}
                                required
                                maxLength={10}
                                pattern="\d{0,10}"
                            />
                        </div>

                        <div className='text-end'>
                            {!loader && (

                                <Button className='btn-styled mt-2' type='submit' variant="primary">
                                    Add
                                </Button>
                            )}

                            {loader && (
                                <Button className='btn-styled mt-2' variant="primary">
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    Loading...
                                </Button>
                            )}
                        </div>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}
export default AddStudents;