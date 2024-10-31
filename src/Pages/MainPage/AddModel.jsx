import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { auth, db } from "../../DataBase/firebase";
import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import axios from 'axios';
import { toast } from 'react-toastify';
const addModel = ({dataFetch,showModel,closeModel}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)
        closeModel();
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(showModel)
    }, [showModel]);

    const [formData, setFormData] = useState([]);

    const getData = async (e) => {
        e.preventDefault();

        if(formData.groupname){
            const groupnameToCheck = formData.groupname;
            const contentDocRef = collection(db, "groups");
            const querySnapshot = await getDocs(query(contentDocRef, where("groupname", "==", groupnameToCheck)));
        
            if (!querySnapshot.empty) {
                toast.warning("Group name already exists. Please choose a different name.");
                return;
            }

            const data = {
                ...formData,
            }
            const docRef = await addDoc(contentDocRef, data);
    
            // try {
            //     const response = await axios.post(
            //         "http://localhost:5001/groupcreation-95ea3/us-central1/getData",
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
            toast.success("Group Add Successfully");
    
            handleClose();
            dataFetch();
            setFormData();
        }else{
            toast.warning("Required Field Are Missing");
        }
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
            {/* <Button className='btn-styled' variant="primary" onClick={handleShow}>
                Add Group           
            </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => getData(e)}>
                        <div>
                            <Form.Label htmlFor="groupname">Group Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="groupname"
                                name="groupname"
                                aria-describedby="passwordHelpBlock"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div className='text-end'>
                        <Button className='btn-styled mt-2' type='submit' variant="primary">
                            Add
                        </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default addModel;