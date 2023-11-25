import React from 'react';
import './AllFeatures.css';

const AllFeatures = () => {
    return (
        <div className="features text-white">
        <div className="all-features-img  container pb-5">
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="part-1-img text-white">
                    </div>
                    <h4 className="pt-2">For Office</h4>
                </div>
                <div className="col-md-3">
                        <div className="part-2-img text-white">
                                
                        </div>
                        <h4 className="pt-2">For Houses</h4>
                </div>
                <div className="col-md-3">
                        <div className="part-3-img text-white">
                            
                        </div>
                        <h4 className="pt-2">For Apartments</h4>
                </div>
                <div className="col-md-3">
                        <div className="part-4-img text-white">
                            
                        </div>
                        <h4 className="pt-2">For Garage</h4>
                </div>
            </div>

        </div>
        </div>
    );
};

export default AllFeatures;