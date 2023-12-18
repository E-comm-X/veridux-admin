import ButtonUI from "./ButtonUI";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default function TablesStats() {
  return (
    <div className=" mt-8">
      <div className="flex items-center mb-4">
        <div className="flex lg:flex-row gap-4 items-center">
          <div className="mr-4">
            <p className="font-semibold text-xl">Vendor</p>
            <hr className="rounded-md w-ful border-[#006FCF] border-2" />
          </div>
          <p className="font-semibold text-lg text-[#00000082] mr-4">Users</p>
          <p className="font-semibold text-lg text-[#00000082]">Products</p>
        </div>
        <div className="ml-auto " data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">
          <ButtonUI text="Export">
            <FileDownloadIcon />
          </ButtonUI>
        </div>
      </div>
      <BasicTable />

    </div>
  );
}
