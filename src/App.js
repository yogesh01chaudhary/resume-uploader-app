import React from "react";
import {
  Grid,
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
  FormGroup,
  Checkbox,
  Stack,
  Alert,
} from "@mui/material";
// import {  DatePicker } from "@mui/lab";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { styled } from "@mui/material/styles";
const App = () => {
  const Input = styled("input")({ display: "none" });
  //states
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState(null);
  const [st, setSt] = useState("");
  const [gender, setGender] = useState();
  const [pjl, setPjl] = useState([]);
  const [pimage, setPimage] = useState("");
  const [rdoc, setRdoc] = useState("");
  const [error, setError] = useState({ status: false, msg: "", type: "" });
  const getPjl = (e) => {
    // setPjl(...pjl, e.target.value);
    // let data = pjl;
    // data.push(e.target.value);
    // setPjl(data);
    const { value, checked } = e.target;
    console.log(`${value}is ${checked}`);
    if (checked) {
      setPjl([...pjl, value]);
    } else {
      setPjl(pjl.filter((e) => e !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    // console.log(data);
    data.append("name", name);
    data.append("email", email);
    data.append("dob", dob);
    data.append("st", st);
    data.append("gender", gender);
    data.append("pjl", pjl);
    data.append("pimage", pimage);
    data.append("rdoc", rdoc);
    console.log(data);
    if (name && email) {
      console.log(data.get("name"));
      console.log(data.get("email"));
      console.log(data.get("dob"));
      console.log(data.get("st"));
      console.log(data.get("gender"));
      console.log(data.get("pjl"));
      console.log(data.get("pimage"));
      console.log(data.get("rdoc"));
      setError({
        status: true,
        msg: "Resume Uploaded Successfully",
        type: "success",
      });
      resetForm();
    } else {
      setError({ status: true, msg: "All Fields Required", type: "error" });
    }
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setDob(null);
    setSt("");
    setGender("");
    setPjl([]);
    setPimage("");
    setRdoc("");
    document.getElementById("resume-form").reset();
  };
  return (
    <div>
      <h1>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ backgroundColor: "error.light", padding: 2 }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{ fontWeight: "bold", color: "white" }}
          >
            Resume Uploader
          </Typography>
        </Box>
        <Grid container justifyContent="center">
          <Grid item xs={5}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ p: 3 }}
              id="resume-form"
            >
              <TextField
                id="name"
                name="name"
                required
                fullWidth
                margin="normal"
                label="Name"
                autoFocus
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                id="email"
                name="email"
                required
                fullWidth
                margin="normal"
                label="Email Address"
                autoFocus
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Box mt={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date of Birth"
                    value={dob}
                    onChange={(newValue) => setDob(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <FormControl fullWidth margin="normal">
                <InputLabel id="state-select-label">State</InputLabel>
                <Select
                  labelId="state-select-label"
                  id="state-select"
                  value={st}
                  label="st"
                  onChange={(e) => {
                    setSt(e.target.value);
                  }}
                >
                  <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                  <MenuItem value="Uttar Prdesh">Uttar Pradesh</MenuItem>
                  <MenuItem value="UttaraKhand">Uttarakhand</MenuItem>
                  <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                  <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                  <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <FormLabel id="gender-radio"> Gender</FormLabel>
                <RadioGroup row name="gender" aria-labelledby="gender-radio">
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">Preferred Job Location</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Delhi"
                    value="Delhi"
                    onChange={(e) => getPjl(e)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Noida"
                    value="Noida"
                    onChange={(e) => getPjl(e)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Bangalore"
                    value="Bangalore"
                    onChange={(e) => getPjl(e)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Pune"
                    value="Pune"
                    onChange={(e) => getPjl(e)}
                  />
                </FormGroup>
              </FormControl>
              <Stack direction="row" alignItems="center" spacing={4}>
                <label htmlFor="profile-photo">
                  <Input
                    accept="image/*"
                    id="profile-photo"
                    type="file"
                    onChange={(e) => setPimage(e.target.files[0])}
                  />
                  <Button variant="contained" component="span">
                    Upload Photo
                  </Button>
                </label>

                <label htmlFor="resume-file">
                  <Input
                    accept="doc/*"
                    id="resume-file"
                    type="file"
                    onChange={(e) => setRdoc(e.target.files[0])}
                  />
                  <Button variant="contained" component="span">
                    Upload File
                  </Button>
                </label>
              </Stack>

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
                color="error"
              >
                Submit
              </Button>
              {error.status ? (
                <Alert severity={error.type}>{error.msg}</Alert>
              ) : (
                ""
              )}
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ backgroundColor: "info.light", padding: 1 }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                List Of Candidates
              </Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple-table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">DOB</TableCell>
                    <TableCell align="center">State</TableCell>
                    <TableCell align="center">Gender</TableCell>
                    <TableCell align="center">Location</TableCell>
                    <TableCell align="center">Avatar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">{email}</TableCell>
                    <TableCell align="center">{dob}</TableCell>
                    <TableCell align="center">{st}</TableCell>
                    <TableCell align="center">{gender}</TableCell>
                    <TableCell align="center">
                      {/* {pjl.map((value, i) => ({ value, i }))} */}
                      {pjl}
                    </TableCell>
                    <TableCell align="center">
                      <Avatar src="#" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </h1>
    </div>
  );
};

export default App;
