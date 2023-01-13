import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Cmp} = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/')
        }
    })
  return (
    <div>
      <Cmp/>
    </div>
  )
}

export default Protected
