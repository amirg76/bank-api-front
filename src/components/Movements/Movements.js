import "./Movements.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import moment from "moment";
const rows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];
// tracking_Id: 1111,
// action: "העברה",
// amount: 50,
// date: newDate(),
// transfer_acc: 5241,
// status: "פלוס",
const Movements = ({ accountMov }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [accountData, SetAccountData] = useState(accountMov);
  useEffect(() => {
    SetAccountData(accountMov);
    console.log(accountMov);
  }, [accountMov]);
  const dateWithoutTime = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">מס</TableCell>
            <TableCell className="tableCell">סוג תנועה</TableCell>
            <TableCell className="tableCell">סכום</TableCell>
            <TableCell className="tableCell">תאריך</TableCell>
            <TableCell className="tableCell">חשבון לתנועה</TableCell>
            <TableCell className="tableCell">סטאטוס</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accountData
            ? accountData.tracking_Mov.map((mov) => (
                <TableRow key={mov.tracking_Id}>
                  <TableCell className="tableCell">{mov.tracking_Id}</TableCell>
                  <TableCell className="tableCell">{mov.action}</TableCell>
                  <TableCell className="tableCell">{mov.amount}</TableCell>

                  <TableCell className="tableCell">
                    {dateWithoutTime(mov.date)}
                  </TableCell>
                  <TableCell className="tableCell">
                    {mov.transfer_acc}
                  </TableCell>
                  <TableCell className="tableCell">
                    <span className={`status ${mov.status}`}>{mov.status}</span>
                  </TableCell>
                </TableRow>
              ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Movements;
