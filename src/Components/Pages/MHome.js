import { Box, Typography } from '@mui/material';
import React from 'react';
import List from './List/List';

const MHome = () => {
    return (
        <div>
            <Box textTransform="center" sx={{ bgcolor: 'secondary.main' }} className="text-center text-white py-2">
                <Typography variant='h3'>This is React Croud Operation...</Typography>
            </Box>

            {/* Data from and viever section  */}
            <div className="container">
                <div className="row my-3">
                    {/* Data form */}
                    <div className="col-lg-6 col-md-6 col-12 py-3">
                        <div className='bg-warning text-center p-2'>
                            <h4>Add Student</h4>
                        </div>
                        <div>
                            <form action="" className='p-2'>
                                <div class="mb-3">
                                    <label for="Enter-neme" class="form-label">Enter Name</label>
                                    <input type="text" class="form-control" id="Enter-neme" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="Enter-email" class="form-label">Enter Email</label>
                                    <input type="email" class="form-control" id="Enter-email" aria-describedby="emailHelp" />
                                </div>
                                <div className='text-center'>
                                    <button type="submit" class="btn btn-warning text-white">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Data viewer */}
                    <div className="col-lg-6 col-md-6 col-12 py-3">
                        <div className="bg-info text-center p-2">
                            <h4>Student Data</h4>
                        </div>
                        <div className=" ">
                            {/* header text */}
                            <div className='row'>
                                <div className="col-2 text-center">
                                    <span className='text-info text-warning'>No</span>
                                </div>
                                <div className="col-3 text-center">
                                    <span className='text-info text-warning'>Name</span>
                                </div>
                                <div className="col-4 text-center">
                                    <span className='text-info text-warning'>Email</span>
                                </div>
                                <div className="col-3 text-center">
                                    <span className='text-info text-warning'>Action</span>
                                </div>
                            </div>
                            {/* student data viewer info */}
                            <List></List>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MHome;