import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adddata, deletedata, updatedata } from '../features/Counterslice';

export default function Counter() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editId, setEditId] = useState(null);
  const [gender, setGender] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [priorty, setPriorty] = useState();

  const count = useSelector((state) => state.Counterkey);
  const dispatch = useDispatch();

  const addrecord = () => {
    if (editId) {
      dispatch(updatedata({ id: editId, name, age, gender, isChecked, priorty }));
      setEditId(null);
    } else {
      dispatch(adddata({ id: Date.now(), name, age, gender, isChecked, priorty }));
    }
    setName('');
    setAge('');
    setGender('');
    setIsChecked(false);
  };

  const deleterecord = (id) => {
    dispatch(deletedata(id));
  };

  const editdata = (e) => {
    setName(e.name);
    setAge(e.age);
    setGender(e.gender);
    setIsChecked(e.isChecked);
    setEditId(e.id);
    setPriorty(e.priority);
  };

  return (
    <>
      <div className="container">
        <h1>Task manager</h1>
        <div className="form-section">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />



          <input
            type="number"
            placeholder="Enter age"
            value={age}
            className="form-input"
            onChange={(e) => setAge(e.target.value)}
          />
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            status
          </label>
          <select
            onChange={(e) => setPriorty(e.target.value)}
            className="form-input"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button className="form-button" onClick={addrecord}>
            {editId ? 'Update' : 'Add'}
          </button>
        </div>

        <div className="table-section">
          {count && count.students.length > 0 ?
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {count.students.map((e, i) => {
                  return <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.gender}</td>
                    <td>{e.isChecked ? 'Complete' : 'Pending'}</td>
                    <td>{e.priorty}</td>
                    <td>
                      <button onClick={() => deleterecord(e.id)} className='delete'>Delete</button>
                      <button onClick={() => editdata(e)} className='edit'>Edit</button>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
            :
            <p>No records found.</p>
          }
        </div>
      </div>
    </>
  );
}
