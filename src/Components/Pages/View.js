import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const View = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="bg-info justify-content-evenly d-flex text-center p-2">
                    <div>
                        <h4>Student Data</h4>
                    </div>
                    <div className=''>
                        <Link to='/' className='btn btn-warning text-white'>BacK TO HomE</Link>
                    </div>
                </div>
            </div>
            <div className='row mt-2 py-2 bg-secondary p-1'>
                <div className="col-2 text-center">
                    <span className='text-white'>01</span>
                </div>
                <div className="col-3 text-center">
                    <span className='text-white'>al noor istiak</span>
                </div>
                <div className="col-4 text-center">
                    <span className='text-white'>istiak@gmail.com</span>
                </div>
                <div className="col-3 text-center">
                    <span>
                        <Link to='view' className='text-warning mx-3'>
                            <RemoveRedEyeIcon />
                        </Link>
                    </span>
                    <span>
                        <Link to='edit' className='text-warning'>
                            <CreateIcon />
                        </Link>
                    </span>
                    <span className='text-danger'>
                        <DeleteIcon />
                    </span>
                </div>
            </div>
            
        </>
    );
};

export default View;