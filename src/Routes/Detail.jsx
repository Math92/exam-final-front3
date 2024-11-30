import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setDentist(data))
      .catch(err => console.error("Error fetching dentist:", err));
  }, [id]);

  return (
    <div className={state.theme}>
      <h1>Detail Dentist {id}</h1>
      {dentist && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-start',
          gap: '2rem',
          padding: '2rem'
        }}>
          <img 
            src="/doctor.jpg"
            alt="Doctor profile"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '4px'
            }}
          />
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{dentist.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{dentist.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{dentist.phone}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Detail;