import React, { useEffect, useState } from "react"

import { useLocation } from 'react-router-dom';
import AddStudents from '../SubPage/AddStudents';
import { auth, db } from "../../DataBase/firebase";
import {
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { ToastContainer } from 'react-toastify';
import { FaUserGroup } from "react-icons/fa6";
import NoData from "../../assets/images/No data-pana.png";
import { IoCloseOutline } from "react-icons/io5";

const TableContent = ({ id, name, checkStatus, dynamicColor }) => {

    const [groupListData, setGroupListData] = useState([]);

    const getData = async () => {
        const contentDocRef = query(collection(db, "student_list"),
            where("refId", "==", id),

        );
        const contentDocSnapshot = await getDocs(contentDocRef);
        let data = contentDocSnapshot?.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        setGroupListData(data);
    }

    useEffect(() => {
        getData();
    }, [id])

    const dataFetch = () => {
        getData();
    }

    const mobileopt = (e) => {
        e.preventDefault();
        checkStatus();
    }
    return (
        <>

            {id !== "" ? (
                <>
                    <nav class="padding w-100 d-flex justify-content-between ">
                        {/* <div className="d-flex justify-content-between"> */}
                        <div className="d-flex align-items-center gap-2 ">
                            <div className="icon-center" style={{background:dynamicColor}}>
                                <FaUserGroup size={25} color="white"/>
                            </div>
                            <div>
                                <h4 className="m-0"> {name}</h4>
                            </div>
                        </div>

                        <div className="p-2" onClick={(e) => mobileopt(e)}>
                            <IoCloseOutline size={25} />
                        </div>
                        {/* </div> */}
                    </nav>
                    <div className="class-overflow">
                        <div className="">
                            <div className="mt-0 marginsetall">
                                <div className="pt-5">
                                    <AddStudents id={id} dataFetch={dataFetch} />
                                </div>
                                <div className="mt-3">
                                    <div>
                                        <div class="">
                                            <table class="responsive-table">
                                                <thead class="responsive-table__head">
                                                    <tr class="responsive-table__row">
                                                        <th class="responsive-table__head__title responsive-table__head__title--name">S/No

                                                        </th>
                                                        <th class="responsive-table__head__title responsive-table__head__title--status">Student Name</th>
                                                        <th class="responsive-table__head__title responsive-table__head__title--types">Email</th>
                                                        <th class="responsive-table__head__title responsive-table__head__title--update">Phone Number</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="responsive-table__body">
                                                    {groupListData.length !== 0 ? (
                                                        <>
                                                            {groupListData?.map((item, index) => {
                                                                return (
                                                                    <tr class="responsive-table__row">
                                                                        <td class="responsive-table__body__text responsive-table__body__text--name">
                                                                            {index + 1}
                                                                        </td>
                                                                        <td class="responsive-table__body__text responsive-table__body__text--status">{item?.studentName}</td>
                                                                        <td class="responsive-table__body__text responsive-table__body__text--types">{item?.studentEmail}</td>
                                                                        <td class="responsive-table__body__text responsive-table__body__text--update">{item?.studentPhone}</td>
                                                                    </tr>
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
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* 
                    <nav class="padding w-100">
                        <h2><FaUserGroup size={25} /> Group</h2>
                    </nav> */}
                    <div class="chat-container padding mt-5">
                        <img src={NoData} alt="nodata" />
                        <h2>No Data Found</h2>
                        <p>Please Create Group !</p>
                    </div>
                </>
            )}

        </>
    );
}

export default TableContent;