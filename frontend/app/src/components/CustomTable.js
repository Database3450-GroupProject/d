import Table from 'react-bootstrap/Table';
import './CustomTable.css'

const CustomTable = ({ data, columns }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.field}>{row[column.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
