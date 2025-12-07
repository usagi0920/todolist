"use client"

import { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// MUI Date Pickerで使用する日付アダプター
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// ローカライズを提供するためのLocalizationProvider
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// 日付処理ライブラリ Day.js
import dayjs, { Dayjs } from "dayjs";

import styled from "styled-components";


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
];


export function ListView() {
    const [count, setCount] = useState(0) // 追加
    const handlePlusButtonClick = () =>{ // 追加
    setCount(count + 1)
    }

    const [category, setCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    const Container = styled.div`
  margin: 5px;
`;

    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
    const today = dayjs();

  return (
    <div style={{ maxWidth: 1000, margin: "40px auto"}}>
      
      <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
       <h1>カウンター</h1>
      <p style={{ fontSize: 32 }}>{count}</p>
      <div style={{ marginTop: 16 }}>
        <button onClick={handlePlusButtonClick}>プラス</button> 
      </div> 
      </div>


      <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>ToDoList</div>
      <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // '& > :not(style)': { m: 1, width: '25ch' } }}
            }}noValidate
            autoComplete="off"
        >
    <TextField id="standard-basic" label="買うものを入力" variant="standard" />

    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="category-label">種類</InputLabel>
        <Select
          labelId="category-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          label="category"
        >
          <MenuItem value="">
            <em>選択なし</em>
          </MenuItem>
          <MenuItem value={'supermarket'}>スーパー</MenuItem>
          <MenuItem value={'drugstore'}>ドラッグストア</MenuItem>
          <MenuItem value={'other'}>その他</MenuItem>
        </Select>
    </FormControl>

    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="目標日"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={today} // 今日から選択可能
          format="YYYY/MM/DD"
          views={["year", "month", "day"]}
          slotProps={{
            textField: {
            },
          }}
        />
      </LocalizationProvider>
    </Container>

    {/* <TextField id="standard-basic" label="備考" variant="standard" /> */}
    
    <Button variant="contained">登録</Button>
    </Box>

    <div style={{margin:"25px auto"}}>◯スーパーで買うもの</div>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>買うもの</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <div style={{margin:"25px auto"}}>◯薬局で買うもの</div>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>買うもの</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <div style={{margin:"25px auto"}}>◯その他雑貨</div>



    </div>
    
  )
}