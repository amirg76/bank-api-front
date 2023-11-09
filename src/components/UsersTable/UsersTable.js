import "./UsersTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { API } from "../../Api/BankApi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UsersTable = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserRows = async () => {
      try {
        const { data } = await API.get("/users/get-all-users");
        const filterUser = data.filter((user) => {
          return user.email !== "admin@admin.com";
        });

        setData(filterUser);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserRows();
  }, []);

  const putUpdateTableDb = async (updateObj) => {
    try {
      const { data } = await API.put("/users/update-table", updateObj);
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    const filterData = data.filter((dataItem) => {
      return dataItem.personal_id === id;
    });

    try {
      const { data } = await API.delete("/users/delete-user", {
        params: {
          personal_id: filterData[0].personal_id,
          account: filterData[0].account,
        },
      });
      // const { data } = await API.delete("/users/delete-user", {
      //   params: {
      //     personal_id: filterData[0].personal_id,
      //   },
      // });
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCommit = (cellData) => {
    console.log(cellData);
    const updateArray = data.map((record) => {
      if (record.personal_id === cellData.id) {
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
            <Link
              to={"/users/id/" + params.row.personal_id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">צפה</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.personal_id)}
            >
              מחק
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.personal_id)}
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
        הוסף משתמש חדש
        <Link to="/users/newuser" className="link">
          הוסף חדש
        </Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(data) => data.personal_id}
        onCellEditCommit={handleCommit}
      />
    </div>
  );
};

export default UsersTable;
