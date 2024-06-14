import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Main.css';

const Main = () => {
  const [contracts, setContracts] = useState([]);
  const origenRef = useRef('');
  const estadoRef = useRef('');
  const cuponRef = useRef('');
  const timeoutRef = useRef(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const getContracts = async () => {
    try {
      let url = 'http://localhost:3000/api/contracts';
      const params = [];
      
      if (origenRef.current.value) params.push(`origen=${origenRef.current.value}`);
      if (estadoRef.current.value) params.push(`estado=${estadoRef.current.value}`);
      if (cuponRef.current.value) params.push(`cupon=${cuponRef.current.value}`);
      
      if (params.length > 0) {
        url += `?${params.join('&')}`;
      }
      const response = await axios.get(url);
      console.log(response.data);
      if (response.data.length > 0) {
        setContracts(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContracts();
  }, []);

  const handleChange = () => {
    clearTimeout(timeoutRef.current);  //limpio el timout
    timeoutRef.current = setTimeout(() => {    //guardo el id del timeout
      getContracts();
    }, 1000);
  };

  const sortColumn = (columnName) => {
    const sortedContracts = [...contracts].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[columnName].toLowerCase() < b[columnName].toLowerCase() ? -1 : 1;
      } else {
        return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? -1 : 1;
      }
    });

    setContracts(sortedContracts);
    // Cambiar ordenación al hacer click
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <section className='contTable'>
      <table className='contracts-table'>
        <thead>
          <tr>
            <th>
            <input
                type="text"
                placeholder="ID" 
                disabled
              />
              <button onClick={() => sortColumn('id')}>&#8693;</button>
            </th>
            <th>
              <input
                type="text"
                placeholder="&#128269;  Origen"
                ref={origenRef}
                onChange={handleChange}
              />
              <button onClick={() => sortColumn('origen')}>&#8693;</button>
            </th>
            <th>
              <input
                type="text"
                placeholder="&#128269;  Estado"
                ref={estadoRef}
                onChange={handleChange}
              />
              <button onClick={() => sortColumn('estado')}>&#8693;</button>
            </th>
            <th>
              <input
                type="text"
                placeholder="&#128269;  Cupon"
                ref={cuponRef}
                onChange={handleChange}
              />
              <button onClick={() => sortColumn('cupon')}>&#8693;</button>
            </th>
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
