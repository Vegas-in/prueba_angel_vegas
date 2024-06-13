import { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css'

const Main = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const getContracts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/contracts');
        console.log(response);
        setContracts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getContracts();
  }, []);

  return (
    <section className='contTable'>
      <table className="contracts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Origen</th>
            <th>Estado</th>
            <th>Cupon</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>{contract.id}</td>
              <td>{contract.origen}</td>
              <td>{contract.estado}</td>
              <td>{contract.cupon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Main;
