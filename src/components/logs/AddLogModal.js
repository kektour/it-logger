import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

import M from 'materialize-css/dist/js/materialize.min.js';

function AddLogModal({ addLog }) {
  const [msg, setMsg] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const handleSubmit = () => {
    if (msg === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      addLog({ message: msg, tech, attention, date: new Date() });
      M.toast({ html: `Log added by ${tech}` });

      // Clear Fields
      setMsg('');
      setTech('');
      setAttention(false);
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
              <TechSelectOptions />
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(
  null,
  { addLog }
)(AddLogModal);
