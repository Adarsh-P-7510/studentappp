import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const [data,changedata] =useState(
        {
            "name":"",
            "rollno":"",
            "admn": "",
            "college":""
        }
    )
    const inputhandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})

    }
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:8082/Add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("success")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)

            }
        ).finally()
    }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="formlabel">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">rollno</label>
                                <textarea name="rollno" id="" className="form-control" value={data.rollno} onChange={inputhandler}></textarea>
                            </div>
                            <div className="col col-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">admn</label>
                                <textarea name="admn" id="" className="form-control" value={data.admn} onChange={inputhandler}></textarea>
                            </div>
                            <div className="col col-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">college</label>
                                <textarea name="college" id="" className="form-control" value={data.college} onChange={inputhandler}></textarea>
                            </div>
                           
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readvalue}>register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent