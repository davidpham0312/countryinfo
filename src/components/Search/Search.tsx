import { TextField } from "@mui/material"
export const Search = ({handleChange} : any) => {
  return (
    <TextField
        variant="filled"
        type="text"
        onChange={handleChange}
        label="Search by country name..."
    />
  )
}