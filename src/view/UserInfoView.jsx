import React from 'react';
import './UserInfoView.css';
import cancel_black from '../asset/ic_cancel_black_24px.svg';

function UserInfoView({customer, onInfoClick}) {

    function handleInfoClick() {
        onInfoClick(customer);
    }

    return (  
        <div>      
            <div className="card-body">
                <div className="card-data">
                    <div>
                        <div> {customer.business_name} </div>
                        <div className="gray-text"> {customer.city}, {customer.province} </div>
                    </div>
                    <div className="user-buttons">
                        <button className="card-view-button" onClick={handleInfoClick}> VIEW </button>
                        <img src={ cancel_black } alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default UserInfoView;

