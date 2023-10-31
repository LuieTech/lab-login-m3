
import { getPatata } from '../services/groups-service'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PatataPage() {

  const [data, setData] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {

    getPatata()
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        if(err.response.status === 401){
          navigate("/login")
        }
      })
  }, []);

  if(!data) return <div>Loading...</div>

  return (
    <div>
      <div>Patata: {data.patata}</div>
      <div>Usuario: {data.usuario}</div>
  </div>
  )
}

export default PatataPage