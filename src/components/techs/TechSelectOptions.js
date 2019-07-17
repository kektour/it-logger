import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

function TechSelectOptions({ getTechs, tech: { techs, loading } }) {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
}

TechSelectOptions.propTypes = {
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
)(TechSelectOptions);
