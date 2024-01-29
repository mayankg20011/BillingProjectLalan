import { useState } from 'react';
import Layout from "../components/Layout";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Button, TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material';

export default function Home() {
  const [count, setCount] = useState(1);
  const initialObject = [{
    'billingMilestoneNumber' : 1,
    'billingMilestoneLanguage': "ABC",
    'billingMilestoneAmount' : 1,
    'taskDueDate': '',
    'originalDueDate': ''
  }]
  const obj = {
    'billingMilestoneNumber' : count,
    'billingMilestoneLanguage': "ABC",
    'billingMilestoneAmount' : 1,
    'taskDueDate': '',
    'originalDueDate': ''
  };
  const onAddData = () => {
    setCount(count + 1);
    const newObj = {...obj};
    const newdata = [...initialObject, newObj];
    console.log(newdata, "newdata")
    // const data = newdata.push(obj);
    setData(newdata);
  }
  const onDeleteData = () => {
    const dataNew = [...data];
    const deleteData = dataNew.splice(-1);
    setData(deleteData);
  }
  const [data, setData] = useState(initialObject);
  console.log(data, "data")
  return <Layout>
    <div>
      <div style={{fontSize: '20px', color: 'black', width: '500px', marginBlock: '10px'}}>Billing Milestone</div>
      {/* <TextareaAutosize style={{border: '1px solid grey', color: 'black'}} placeholder="Instructions Here"
        multiline
        rows={4}
        maxRows={4}/> */}
        <div style={{border: '1px solid grey', borderRadius: '2px', color: 'black'}}>
          <div style={{ marginLeft: '15px', marginTop: '15px'}}>Instructions</div>
          <div style={{ marginLeft: '15px'}}>Billing Milestones</div>
          <div style={{ marginLeft: '15px'}}>1) Select Project</div>
          <div style={{ marginLeft: '15px', marginBottom: '15px'}}>2) Enter number of billing milestones</div>
        </div>
      <div style={{fontSize: '20px', color: 'black', marginBottom: '20px', marginTop: '10px'}}>Billing Milestones (BM)</div>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Project</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={'Tamara'}
    label="Select Project"
    // onChange={handleChange}
  >
    <MenuItem value={"Tamara"}>Tamara</MenuItem>
    <MenuItem value={"Tamara1"}>Tamara1</MenuItem>
    <MenuItem value={"Tamara2"}>Tamara2</MenuItem>
  </Select>
</FormControl>
<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
     <TextField
        label="Number of BMs"
        variant="outlined"
        margin="normal"
        type="number"
      />
       <Button
        style={{"color": "#ffffff", backgroundColor: "#3B81F6", marginLeft: '20px'}}
        variant="contained"
        type="submit"
        onClick={() => onAddData()}
      >
        Add Billing Milestone
      </Button>
      <Button
        style={{"color": "#ffffff", backgroundColor: "red", marginLeft: '20px'}}
        variant="contained"
        type="submit"
        onClick={() => onDeleteData()}
      >
        Delete Billing Milestone
      </Button>
      </div>
      {data.map((item) => {
        return  <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <TextField
            label="Billing Milestone Number"
            variant="outlined"
            margin="normal"
            style={{marginRight: '20px'}}
            required
            fullWidth
            type="number"
            // disabled
          />
          <TextField
            label="Billing Milestone Language"
            variant="outlined"
            margin="normal"
            style={{marginRight: '20px'}}
            required
            fullWidth
          />
          <TextField
            label="Billing Milestone Amount"
            variant="outlined"
            margin="normal"
            type="number"
            required
            fullWidth
          />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', width: '50%'}}>
            <TextField
              label="Task Due Date"
              variant="outlined"
              margin="normal"
              type="date"
              style={{marginRight: '20px'}}
              value={new Date()}
              required
              fullWidth
            />
            <TextField
              label="Original Due Date"
              variant="outlined"
              margin="normal"
              type="date"
              
              value={new Date()}
              required
              fullWidth
            />
          </div>
      </div>
      })}
       <div style={{ position: 'absolute', right: 20}}>
          <TextField
            label="Billing Milestone Total"
            variant="outlined"
            margin="normal"
            type="number"
            disabled
            required
            // fullWidth
          />
          </div>
      <Button
        style={{"color": "#ffffff", marginTop: '50px', backgroundColor: "#3B81F6"}}
        variant="contained"
        type="submit"
      >
        Submit Form
      </Button>
    </div>
  </Layout>;
}
