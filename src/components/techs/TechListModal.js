import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

function TechListModal({ tech: { techs, loading }, getTechs }) {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technitian List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
}

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    tech: state.tech
  };
}

export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);
