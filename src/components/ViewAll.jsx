import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changedata] = useState(
        [
           
        ]
    )
    const fetchdata=()=>{
        axios.get("http://localhost:8082/ViewAll").then(
            (response)=>{
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally
        
    }
    useEffect(()=>{fetchdata()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <img src="https://imgs.search.brave.com/xeJUDTlWbrai42c_n3aVBQ7S-FFgKyaE3QabAc6ovEA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/OTc1NDIzOS9waG90/by91bml2ZXJzaXR5/LXN0dWRlbnQtaW4t/d2hpdGUtYmFja2dy/b3VuZC1zdG9jay1w/aG90by5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TGpGVkRm/anVzV0JqWVRObGlI/VjlEeVhmQXBQR2M4/RG1nQkdFdGZWZ1Ew/UT0" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">RollNo{value.rollno}</p>
                                                <p class="card-text">RollNo{value.college}</p>
                                                <a href="#" class="btn btn-primary">admission{value.admn}</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )


                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll