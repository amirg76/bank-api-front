import "./AccountTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { accountColumns } from "../../datatablesource";
import { API } from "../../Api/BankApi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AccountTable = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserRows = async () => {
      try {
        const { data } = await API.get("/accounts/get-all-accounts");
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserRows();
  }, []);

  const putUpdateTableDb = async (updateObj) => {
    try {
      const { data } = await API.put("/accounts/update-table", updateObj);
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    const filterData = data.filter((dataItem) => {
      return dataItem.accountNum === id;
    });

    console.log(filterData);
    try {
      const { data } = await API.delete("/accounts/delete-account", {
        params: {
          accountNum: filterData[0].accountNum,
        },
      });
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCommit = (cellData) => {
    console.log(cellData);
    const updateArray = data.map((record) => {
      if (record.accountNum === cellData.id) {
        const updateObj = { ...record, [cellData.field]: cellData.value };
        putUpdateTableDb(updateObj);
        return updateObj;
      } else {
        return { ...record };
      }
    });
    setData(updateArray);
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "פעולות",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.accountNum)}
            >
              מחק
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.accountNum)}
            >
              עדכן
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        הוסף חשבון חדש
        <Link to="/accounts/new-account" className="link">
          הוסף חדש
        </Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={accountColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(data) => data.accountNum}
        onCellEditCommit={handleCommit}
      />
    </div>
  );
};

export default AccountTable;
