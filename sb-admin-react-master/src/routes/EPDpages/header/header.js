import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

const title = 'Elektronisch patiëntendossier';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Elektronisch patiëntendossier</PageHeader>
        </div>
      </div>
    </div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;