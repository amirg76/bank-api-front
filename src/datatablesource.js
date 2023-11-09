import { Link } from "react-router-dom";
export const userColumns = [
  // { field: "id", headerName: "'מס", width: 70 },
  { field: "personal_id", headerName: "תז", width: 70 },
  {
    field: "f_name",
    headerName: "שם פרטי",
    width: 100,
    editable: true,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <input></input>
    //       {params.row.f_name}
    //     </div>
    //   );
    // },
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "l_name",
    headerName: "שם משפחה",
    width: 100,
    editable: true,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "phone",
    headerName: "טלפון",
    width: 100,
    editable: true,
  },
  {
    field: "address",
    headerName: "כתובת",
    width: 100,
    editable: true,
  },
  {
    field: "city",
    headerName: "עיר",
    width: 100,
    editable: true,
  },
  {
    field: "email",
    headerName: "אימייל",
    width: 150,
    editable: true,
  },
  {
    field: "cash",
    headerName: "עובר ושב",
    width: 100,
  },
  {
    field: "credit",
    headerName: "קרדיט",
    width: 100,
  },
  {
    field: "account",
    headerName: "חשבונות",
    width: 200,
    editable: true,

    renderCell: (params) => {
      return params.row.account.map((account) => {
        return (
          <Link key={account} to={"/accounts/account/" + account}>
            {account},
          </Link>
        );
      });
    },
  },

  // {
  //   field: "age",
  //   headerName: "Age",
  //   width: 100,
  // },
  {
    field: "status",
    headerName: "סטטוס",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

const handleAccountClick = (account) => {
  localStorage.setItem("account", account);
};

export const accountColumns = [
  // { field: "id", headerName: "'מס", width: 70 },
  { field: "accountNum", headerName: "מס חשבון", width: 150 },
  {
    field: "cash",
    headerName: "עובר ושב",
    width: 150,
    editable: true,
  },
  {
    field: "credit",
    headerName: "קרדיט",
    width: 150,
    editable: true,
  },
  {
    field: "minusInterest",
    headerName: "ריבית",
    width: 230,
    editable: true,
  },
];
//temporary data

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
