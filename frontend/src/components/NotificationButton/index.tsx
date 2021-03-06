import axios from 'axios';
import { toast } from 'react-toastify';

import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
  id:  number;
}

function NotificationButton( {id} : Props) {
  
  function handleClick (id: number){
    axios(`${BASE_URL}/sales/${id}/notification`).then( response => {
      toast.info("SMS enviado com sucesso");
    });
  }

  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(id)}>
      <img src={icon}></img>
    </div>
  )
}

export default NotificationButton;