import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="formlabel">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">admission no</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">parent name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">college name</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">DOB</label>
                                <input type="date" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">email</label>
                                <input type="email" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">confirm password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="col col-12 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success">register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent