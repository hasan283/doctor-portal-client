import React from 'react';
import { toast } from 'react-toastify';

const DeleteConModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
    const { name, email } = deleteDoctor;

    const handleDelete = email => {
        fetch(`https://dry-bastion-96276.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Access Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is Delete!`)
                    setDeleteDoctor(null);
                    refetch();
                }
            })
    }


    return (
        <div>

            <input type="checkbox" id="deleteModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure You want to Dr. {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(email)} className="btn btn-xs">Delete</button>
                        <label for="deleteModal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteConModal;