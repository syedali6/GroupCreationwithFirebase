import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import AddModel from "./AddModel"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { auth, db } from "../../DataBase/firebase";
import {
    collection, getDocs,
} from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { ToastContainer } from 'react-toastify';
import { IoIosSearch } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import TableContent from './TableContent';
import { IoIosArrowDropright } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";

const Index = () => {
    const [groupData, setGroupData] = useState([]);
    const [mobileVisible, setMobileVisible] = useState(false);
    const [groupList, setGroupList] = useState([]);
    const getData = async () => {

        const contentDocRef = collection(db, "groups");
        const contentDocSnapshot = await getDocs(contentDocRef);
        let data = contentDocSnapshot?.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        const contentGroupList = collection(db, "student_list");
        const contentDocSnapshotGroupList = await getDocs(contentGroupList);
        let groupList = contentDocSnapshotGroupList?.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        setGroupData(data);
        setGroupList(groupList);
    }

    useEffect(() => {
        getData();
    }, [])

    const dataFetch = () => {
        getData();
    }
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    };
    const modelOpen = (e) => {
        e.preventDefault();
        setShow(true);
    }

    const [userListId, setUserListId] = useState("");
    const [groupname, setGroupName] = useState("");
    const [dynamicCol, setDynamicCol] = useState("");

    const Trigger = (e, id, name, color) => {
        e.preventDefault();
        setUserListId(id);
        setGroupName(name);
        setMobileVisible(true);
        setDynamicCol(color);
    }

    const searchContent = async (e, searchTerm) => {
        e.preventDefault();
        if (searchTerm) {
            const filteredData = groupData.filter((item) =>
                item.groupname.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setGroupData(filteredData);
        } else {
            getData();
        }
    };

    const mobileopt = () => {
        setUserListId("");
        setMobileVisible(false);
    }
    return (
        <>
            <ToastContainer />
            {/* <div className="fullheight">
                <div className="container fullheight colourclass">
                    <div className="m-5 mt-0">
                        <div className="pt-5">
                            <AddModel dataFetch={dataFetch} showModel={show} />
                        </div>
                        <Row className="mt-3">
                            {groupData.length !== 0 ? (
                                <>
                                    {groupData?.map((item, index) => {
                                        return (
                                            <>
                                                <Col lg={3} md={3} sm={12} className="mb-2">
                                                    <Card className="card_style">
                                                        <Card.Body className="body_styles">
                                                            <div className="d-flex justify-content-between">

                                                                <Card.Title className="alignments">  <FaUserGroup size={25} /> {" "}
                                                                    {item.groupname}</Card.Title>
                                                                <Link to={`/groupDetail?sid=${item.id}`} title="Add Student"><IoMdAddCircleOutline size={25} />
                                                                </Link>

                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </>
                                        )
                                    })}
                                </>
                            ) : (
                                <>
                                    <div className="text-center p-3">
                                        No Data Found
                                    </div>
                                </>
                            )}
                        </Row>
                    </div>
                </div>
            </div> */}
{/* container p-0 mt-5 */}
            <div class="">
                <AddModel dataFetch={dataFetch} showModel={show} closeModel={handleClose} />
                <main className="mobile_optimazation">
                    <section className={`user-list ${!mobileVisible ? "" : "onclick-mobile-view"}`}>
                        <nav class="padding bg-white" >
                            <div className="d-flex align-items-center gap-2">
                                <div className="icon-center">
                                    <RiDashboardFill size={25} color="#167d88" />
                                </div>
                                <div>
                                    <h4 className="m-0">
                                        Group Creation</h4>
                                </div>
                            </div>
                        </nav>
                        <div class="search-container padding">
                            <div class="input-container">
                                <IoIosSearch size={25} />
                                <input type="text" placeholder="Search Group" onChange={(e) => searchContent(e, e.target.value)} />
                            </div>
                        </div>
                        <ul className="p-0 class-overflow">

                            <li class="padding mb-2 w-100 d-block stickyheaders">
                                <div className="boxdash " onClick={(e) => modelOpen(e)}>
                                    {/* <IoAddOutline size={30}/> */}
                                    <div>
                                        <h6 className="m-0" style={{ color: "#167d88" }}>Add Group</h6>
                                    </div>
                                </div>

                                {/* <div class="column">
                                    <div class="name">Add Group
                                    </div>
                                </div> */}
                            </li>

                            {groupData?.map((item, index) => {
                                const randomColor = () => {
                                    const codes = '0123456789ABCDEF';
                                    let color = '#';
                                    for (let i = 0; i < 6; i++) {
                                        color += codes[Math.floor(Math.random() * 16)];
                                    }
                                    return color;
                                };
                                const colors = randomColor();

                                const getGroupList = groupList.filter((groupItem)=> groupItem.refId=== item.id);
                                const groupListLength = getGroupList.length; 
                                return (
                                    <>
                                        <li class="padding groupstyles" onClick={(e) => Trigger(e, item.id, item.groupname, colors)}>
                                            <div className="icon-center" style={{ background: colors }}>
                                                <FaUserGroup size={25} color="white" />
                                            </div>
                                            <div class="column">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div class="name">
                                                        <div>
                                                            <h6>{item.groupname}</h6>
                                                        </div>
                                                        <div>
                                                            <p className="text-muted m-0 text-start">
                                                                {groupListLength} Members
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* <div class="preview">Group Created Successfully</div> */}
                                                    <div title="Add Members" ><IoIosArrowDropright size={25} color="#167d88" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </section>
                    <section className={`hide-mobile ${!mobileVisible ? "" : "onclick-mobile-show"}`}>
                        <TableContent id={userListId} name={groupname} checkStatus={mobileopt} dynamicColor={dynamicCol} />
                    </section>
                </main>
            </div>
        </>
    )
}

export default Index;