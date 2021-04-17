import React from 'react';
import Modal from 'react-modal';
import './UserModal.css';
import clear_black from '../asset/ic_clear_black_24px.svg';

const customStyles = {
  overlay: {
    backgroundColor       : 'rgba(0, 0, 0, 0.5)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '53rem',
    boxShadow             : '5px 5px 5px #656565'
  }
};

function UserModal({customer, isOpen, onClose}){

    const lastDeliveryDate =
        (isNaN(customer.customer_info.last_delivery_date))
        ? new Date(customer.customer_info.last_delivery_date)
        : null;

    const mayOrders = 
        (lastDeliveryDate) && ((lastDeliveryDate.getMonth() + 1) === 5) 
        ? customer.customer_info.orders_this_month 
        : 0;

    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}
        >
        
        <div>
            <div className="headerTitle">
                <div> {customer.business_name} </div>
                <div className="close-button">
                    <img src={ clear_black } alt="" onClick={onClose} />
                </div>
            </div>

            <hr className="full-hr" />

            <div className="userInfo">

                <div className="column">
                    <div className="title"> LOCATION <hr className="partial-hr" /> </div>       
                    <div className="value"> {customer.city}, {customer.province} </div>
                    
                    <div className="title"> PRODUCT CATALOG <hr className="partial-hr" /> </div>                       
                    <select className="value" disabled defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled hidden>Select a catalog</option>
                    </select>

                    <div> <button className="button button-send-catalog"> SEND CATALOG </button> </div>

                    <div className="title"> AVERAGE ORDER <hr className="partial-hr" /> </div>
                    <div className="value"> ${customer.customer_info.buyer_average_order.toFixed(2)} </div>

                    <div className="title"> MAY SALES  <hr className="partial-hr" /> </div>
                    <div className="value"> $0.00 </div> {/* Rule not defined for this field */}
                </div>

                <div className="column">
                    <div className="title"> PHONE <hr className="partial-hr" /> </div>       
                    <div className="value"> {customer.phone || "N/A"} </div>
                    
                    <div className="title"> LAST DELIVERY <hr className="partial-hr" /> </div>  
                    <div className="value"> { console.log(lastDeliveryDate) } { (lastDeliveryDate) ? lastDeliveryDate.toLocaleDateString("en-CA") : "N/A" } </div>      

                    <div> <button className="button button-add-note"> ADD NOTE </button> </div>

                    <div className="title"> MAY ORDERS <hr className="partial-hr" /> </div>
                    <div className="value"> { mayOrders }</div>

                    <div className="title"> TOTAL SALES  <hr className="partial-hr" /> </div>
                    <div className="value"> ${(customer.customer_info.orders_this_month * customer.customer_info.buyer_average_order).toFixed(2)} </div> 
                </div>
            </div>
        </div>

        <br />
        <div className="footer">When someone interacts with your Local Line store, we'll track it here. To get started, send your product catalog to one of your customers or log an order on their behalf.</div>

        </Modal>
    );
}

export default UserModal;