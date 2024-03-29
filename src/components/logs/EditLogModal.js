import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

import M from 'materialize-css/dist/js/materialize.min.js';

function EditLogModal({ current, updateLog }) {
  const [msg, setMsg] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMsg(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const handleSubmit = () => {
    if (msg === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      updateLog({
        id: current.id,
        message: msg,
        attention,
        tech,
        date: new Date()
      });
      M.toast({ html: `Log updated by ${tech}` });

      // Clear Fields
      setMsg('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
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
            {/* <label htmlFor='msg' className='active'>
              Log Message
            </label> */}
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

function mapStateToProps(state) {
  return {
    current: state.log.current
  };
}

export default connect(
  mapStateToProps,
  { updateLog }
)(EditLogModal);
