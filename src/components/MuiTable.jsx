import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
const MuiTable = () => {
  return <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
    <Table aria-label="simple-table" stickyHeader>
        <TableHead >
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Second Name</TableCell>
                <TableCell align="center">Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {tableData.map((ele)=>{
                return <TableRow sx={{'&:last-child td, &:last-child th':{border:0}}}>
                    <TableCell>{ele.id}</TableCell>
                    <TableCell>{ele.first_name}</TableCell>
                    <TableCell>{ele.last_name}</TableCell>
                    <TableCell align="center">{ele.email}</TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>

  </TableContainer>;
};

export default MuiTable;

const tableData = [{
    "id": 1,
    "first_name": "Abner",
    "last_name": "Matzl",
    "email": "amatzl0@yelp.com",
    "gender": "Male",
    "ip_address": "116.214.96.220"
  }, {
    "id": 2,
    "first_name": "Tab",
    "last_name": "Tours",
    "email": "ttours1@yellowbook.com",
    "gender": "Male",
    "ip_address": "16.107.57.6"
  }, {
    "id": 3,
    "first_name": "Zack",
    "last_name": "Kane",
    "email": "zkane2@friendfeed.com",
    "gender": "Male",
    "ip_address": "205.143.241.176"
  }, {
    "id": 4,
    "first_name": "Aubine",
    "last_name": "Whyte",
    "email": "awhyte3@yahoo.com",
    "gender": "Female",
    "ip_address": "235.179.147.158"
  }, {
    "id": 5,
    "first_name": "Bev",
    "last_name": "Pedycan",
    "email": "bpedycan4@uol.com.br",
    "gender": "Female",
    "ip_address": "85.177.232.131"
  }, {
    "id": 6,
    "first_name": "Erna",
    "last_name": "Cantua",
    "email": "ecantua5@cafepress.com",
    "gender": "Female",
    "ip_address": "200.30.1.222"
  }, {
    "id": 7,
    "first_name": "Joyann",
    "last_name": "Horder",
    "email": "jhorder6@sina.com.cn",
    "gender": "Female",
    "ip_address": "235.53.14.187"
  }, {
    "id": 8,
    "first_name": "Garreth",
    "last_name": "Grube",
    "email": "ggrube7@symantec.com",
    "gender": "Polygender",
    "ip_address": "207.16.229.172"
  }, {
    "id": 9,
    "first_name": "Ced",
    "last_name": "Deacock",
    "email": "cdeacock8@nifty.com",
    "gender": "Male",
    "ip_address": "181.229.133.133"
  }, {
    "id": 10,
    "first_name": "Charin",
    "last_name": "Yvon",
    "email": "cyvon9@narod.ru",
    "gender": "Female",
    "ip_address": "197.14.80.182"
  }]