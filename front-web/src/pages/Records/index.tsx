import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RecordsResponse } from './types';
import './styles.css';
import { formatDate } from './helpers';
import Pagination from './Pagination/index';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:8080';
const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
  const [activePage, setActivePage] = useState(0);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
      .then((response) => setRecordsResponse(response.data));
  }, [activePage]);

  const handlePageChange = (index: number) => {
    setActivePage(index);
  };

  return (
    <div className="page-container">
      <div className="filters-container records-actions">
        <Link to="/charts">
          <button className="action-filters">Ver Gráfico</button>
        </Link>
      </div>

      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map(
            ({ id, moment, name, age, gameTitle, gamePlatform, genreName }) => (
              <tr key={id}>
                <td>{formatDate(moment)}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td className="text-secondary">{gamePlatform}</td>
                <td>{genreName}</td>
                <td className="text-primary">{gameTitle}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        totalPages={recordsResponse?.totalPages}
        goToPage={handlePageChange}
      />
    </div>
  );
};

export default Records;
