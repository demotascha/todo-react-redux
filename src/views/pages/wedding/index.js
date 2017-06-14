import React from 'react';
import { connect } from 'react-redux';


export function Wedding() {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <h1 className="sign-in__heading">Wedding Page</h1>
      </div>
    </div>
  );
}

//=====================================
//  CONNECT
//-------------------------------------

export default connect(null)(Wedding);
