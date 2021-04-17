import React, { useEffect } from 'react';
import { APICall } from '../util';
import UsersCard from './UsersCard';
import './UsersListView.css';

import LoadingGif from '../asset/loading.gif';

const UsersListView = () => {
    const [customers, setCustomers] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    useEffect(() => { 
        async function fetchCustomers() {
            setCustomers(await APICall());
            setLoaded(true);  
        }

        fetchCustomers();
    }, []);
    
    return (    
        <div>
          { !loaded ? (
            <div className="loading">
              <img src={LoadingGif} alt="Loading..." />
            </div>
          ) : (
            <div>
                <UsersCard customers={customers} />
            </div>
          )}
        </div>
      );
  };

  export default UsersListView;