import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createLeave } from '../redux/actions/leaveActions';

const CreateLeave = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    startDate: '',
    endDate: '',
    reason: ''
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createLeave(formData));
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employeeId"
        value={formData.employeeId}
        onChange={handleChange}
        placeholder="Employee ID"
      />
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        placeholder="Reason"
      />
      <button type="submit">Apply for Leave</button>
    </form>
    </>
  );
};

export default CreateLeave;
