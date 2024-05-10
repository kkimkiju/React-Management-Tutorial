import React from "react";
import { TableRow, TableCell } from "@mui/material"; // 수정

const Customer = (props) => {
  return (
    <TableRow>
      <TableCell>{props.id}</TableCell> {/* 수정 */}
      <TableCell>
        <img src={props.image} alt="profile" width={100} /> {/* 수정 */}
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow>
  );
};

export default Customer;
