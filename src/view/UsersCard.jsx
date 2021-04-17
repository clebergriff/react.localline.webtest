import React from 'react';
import UserModal from './UserModal';

import UserInfoView from './UserInfoView';
import './UsersCard.css';

const UsersCard = ({customers}) => {

    const [userModalIsOpen, setUserModalIsOpen] = React.useState(false); 
    const [selectedCustomer, setSelectedCustomer] = React.useState(); 

    function handleModalClose() {
        setUserModalIsOpen(false);
    }

    function onInfoClick(customer) {
        setSelectedCustomer(customer);
        setUserModalIsOpen(true);   
    }

    return (
        <div>
            <div className="card">
                <h5 className="card-header">
                    MY CUSTOMERS
                </h5>

                {customers
                    .sort((a, b) => a.business_name > b.business_name ? 1 : -1)
                    .map((customer) => <UserInfoView key={customer.business_name} customer={customer} onInfoClick={onInfoClick} ></UserInfoView>)}

                <div className="card-footer">
                    <button> &#5176; </button>
                    <button disabled> 1 </button>
                    <button> &#5171; </button>
                </div>
            </div>
            
            <div>
                { selectedCustomer && (
                    <div>
                        <UserModal isOpen={userModalIsOpen} customer={selectedCustomer} onClose={handleModalClose}/>
                    </div>
                )}
            </div>
        </div>
    ) 
}

export default UsersCard;