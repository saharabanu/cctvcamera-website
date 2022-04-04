import React from 'react';
import CountUp from 'react-countup';
import './CounterUp.css';

const CounterUp = () => {
    return (
        <div className='counter-bg py-5'>
        <div className="container">
                <div className="row g-4">
                    <div className="col-md-3">
                        <div className="box">
                            <div className='counter-icon'><i className='fa fa-history'></i></div>
                            <div className="counter"><CountUp end={724} suffix="+" className="number "/></div>
                            <div className="text">Working Hours</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box">
                            <div className='counter-icon'><i className='fa fa-gift'></i></div>
                            <div className="counter"><CountUp end={508} suffix="+" className="number "/></div>
                            <div className="text">Completed Projects</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box">
                            <div className='counter-icon'><i className='fa fa-user'></i></div>
                            <div className="counter"><CountUp end={436} suffix="+" className="number "/></div>
                            <div className="text">Happy Client</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box">
                            <div className='counter-icon'><i className='fa fa-history'></i></div>
                            <div className="counter"><CountUp end={120} suffix="+" className="number "/></div>
                            <div className="text">Awards</div>
                        </div>
                    </div>
                    
                
                


            
         
        </div>
    
            
        </div>
        </div>
    );
};

export default CounterUp;