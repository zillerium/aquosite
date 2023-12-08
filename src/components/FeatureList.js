// components/FeatureList.js
import React from 'react';

const FeatureList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Each feature block */}
        <div className="col-md-4 text-center">
          <i className="bi bi-timer" style={{ fontSize: '2rem' }}></i>
          <h3>Derivatives</h3>
	  <p>We aggregrate liquidity for perpetual swaps.</p>

        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-layout-text-sidebar-reverse" style={{ fontSize: '2rem' }}></i>
          <h3>DEX</h3>
	  <p>We provide composibility for DEXs</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-display" style={{ fontSize: '2rem' }}></i>
          <h3>PLFs</h3>
          <p>We help aggregrate liquidity for lending protocols.</p>
        </div>
        {/* Repeat for the next row */}
      </div>
    </div>
  );
};

export default FeatureList;


