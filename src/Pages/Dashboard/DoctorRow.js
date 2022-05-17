import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
    const { image, name, specialization, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialization}</td>
            <td>
                <label onClick={() => setDeleteDoctor(doctor)} for="deleteModal" class="btn btn-xs">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;