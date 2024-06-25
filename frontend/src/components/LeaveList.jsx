import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeaves, updateLeave } from '../redux/actions/leaveActions';

const LeaveList = () => {
  const dispatch = useDispatch();
  const leaves = useSelector(state => state.leave.leaves);

  useEffect(() => {
    dispatch(getLeaves());
  }, [dispatch]);

  const handleApprove = (id) => {
    dispatch(updateLeave(id, 'Approved'));
  };

  const handleReject = (id) => {
    dispatch(updateLeave(id, 'Rejected'));
  };

  return (
    <div>
      <h1>Leave List</h1>
      <ul>
        {leaves.map(leave => (
          <li key={leave.id}>
            {leave.reason} - {leave.status}
            <button onClick={() => handleApprove(leave.id)}>Approve</button>
            <button onClick={() => handleReject(leave.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveList;
