import React from 'react';
import './CameraBanner.css';

const CameraBanner = () => {
    return (
        <div className='banner2'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <div className='ban-info'>
                            <img className="w-50" src="https://n.foxdsgn.com/custo/wp-content/uploads/elementor/thumbs/Background-copy-ol1u1vismpo7z0u81kp8a9axya91d9yk3l3dw06tvg.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='text-start ban-info '>
                            <h3>
                                We Will Make Your Home <br /> And Business <span className='text-danger'>Completely <br /> Safe.</span></h3>
                            <p>We believe in the value that our functions add to a business. We feel that this specialist part of HR is often unrecognised for its contribution to the profitability and success of a business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CameraBanner;