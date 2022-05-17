import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConModal from './DeleteConModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctor', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('Access Token')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h2 className="text-xl">Manage Doctors: {doctors.length}</h2>

            <div className="overflow-x-auto mt-12">
                <table className="table w-full text-center">
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) => <DoctorRow key={doctor._id} doctor={doctor} index={index} refetch={refetch} setDeleteDoctor={setDeleteDoctor}></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteConModal deleteDoctor={deleteDoctor} refetch={refetch} setDeleteDoctor={setDeleteDoctor}></DeleteConModal>}
        </div>
    );
};

export default ManageDoctors;