import React from 'react';
import './AllFeatures.css';

const AllFeatures = () => {
    return (
        <div className="bg-dark text-white">
        <div className="all-features-img  container pb-5">
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="part-1-img text-white">
                    </div>
                    <h3 className="">For Office</h3>
                </div>
                <div className="col-md-3">
                        <div className="part-2-img text-white">
                                
                        </div>
                        <h3>For Houses</h3>
                </div>
                <div className="col-md-3">
                        <div className="part-3-img text-white">
                            
                        </div>
                        <h3>For Apartments</h3>
                </div>
                <div className="col-md-3">
                        <div className="part-4-img text-white">
                            
                        </div>
                        <h3>For Garage</h3>
                </div>
            </div>

        </div>
        </div>
    );
};

export default AllFeatures;