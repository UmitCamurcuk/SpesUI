import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'rsuite';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Typography, Button, Grid,IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Moment from 'react-moment';
import AddIcon from '@mui/icons-material/Add';

const { Column, HeaderCell, Cell } = Table;


function DynamicTable() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [tableTotalData, setTableTotalData] = useState(0);
  const url = useLocation();
  const path = url.pathname.split('/')[2]

  const navigate = useNavigate();

  const getData = async () => {
    const { data } = await axios.get(`http://127.0.0.1:5000/item/getTableItems?itemType=${path}`);
    setTableData(data);
    setTableTotalData(data.lenght)
    setLoading(false);
  };

  useEffect(() => {
    setTableData([]);
    getData();
  }, [url]);

  const handleChangeLimit = dataKey => {
    setLoading(true)
    setPage(1);
    setLimit(dataKey);
    setLoading(false)
  };

  const rowClick = rowData => {
    navigate(`/Items/ItemDetails/${rowData._id}`)
  }

  const handleCreateNewClick = () => {
    navigate(`/Items/CreateItem`)
  }


  const data = tableData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} xl={6}>
          <Typography
            gutterBottom
            variant='overline'
            ml={3}
            display="block"
            color='black'
            sx={{ fontSize: 21 }}
          >
            <strong> Item Table </strong>
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} xl={6} justifyContent='flex-end' display='flex'>
          <Typography
            gutterBottom
            variant='overline'
            ml={3}
            display="block"
            color='black'
            sx={{ fontSize: 21 }}
          >
            <Button onClick={handleCreateNewClick} color='primary' startIcon={<AddIcon />}> Create Item </Button>
          </Typography>
        </Grid>
      </Grid>


      <Table
        height={420}
        data={data}
        loading={tableData == null ? true : loading}
        onSortColumn={(sortColumn, sortType) => { console.log(sortColumn, sortType); }}
        onRowClick={rowClick}
      >
        <Column width={250}>
          <HeaderCell>Code</HeaderCell>
          <Cell dataKey="Code" />
        </Column>

        <Column width={250} sortable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="Name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Family</HeaderCell>
          <Cell dataKey="Family" />
        </Column>

        <Column width={200}>
          <HeaderCell>Updated On</HeaderCell>
          <Cell dataKey="UpdatedOn" >
            {rowData => (
              <Moment format='DD/MM/YYYY HH:mm' date={rowData.UpdatedOn} />
            )}
          </Cell>
        </Column>
        <Column width={120} flexGrow={1}>
          <HeaderCell>Created On</HeaderCell>
          <Cell dataKey='CreatedOn'>
            {rowData => (
              <Moment format='DD/MM/YYYY HH:mm' date={rowData.CreatedOn} />
            )}
          </Cell>
        </Column>
        <Column width={150} flexGrow={1}>
          <HeaderCell>Updated User</HeaderCell>
          <Cell dataKey="UpdatedUser.UserName" />
        </Column>
        <Column width={165} fixed="right">
          <HeaderCell>Actions</HeaderCell>
          <Cell>
            {rowData => (
              <div
                style={{
                  background: '#f5f5f5',
                  height: 43,
                  borderRadius: 6,
                  marginTop: -13,
                  overflow: 'hidden',
                  display: 'inline-block'
                }}
              >
                <IconButton
                  sx={{ color: '#4caf50' }}
                  aria-label='Go To Item Details'
                  onClick={() => navigate(`/ItemDetails/${rowData.ID}`)}
                  size='large'
                >
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton
                  color='primary'
                  aria-label='Edit Item'
                  onClick={() => alert()}
                  size='large'
                >
                  <ModeIcon />
                </IconButton>
                <IconButton
                  color='error'
                  aria-label='Delete Item'
                  onClick={() => alert(`ID:${rowData.ID}`)}
                  size='large'
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            )}
          </Cell>
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={tableTotalData}
          limitOptions={[10, 30, 50, 100]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
}

export default DynamicTable