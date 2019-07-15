import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

function AddLogModal() {
  const [msg, setMsg] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const handleSubmit = () => {
    if (msg === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      console.log(msg, tech, attention);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='msg'
              value={msg}
              onChange={e => setMsg(e.target.value)}
            />
            <label htmlFor='msg' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Sara Wilson'>Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={handleSubmit}
          className='modal-close waves-effect waves-green btn blue'
        >
          Enter
        </a>
      </div>
    </div>
  );
}

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default AddLogModal;
