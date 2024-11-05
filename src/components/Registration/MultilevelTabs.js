import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Container } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MultilevelTabs = () => {
  const [mainTab, setMainTab] = useState(0);  

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={mainTab} onChange={handleMainTabChange}>
          <Tab label="Personal details" />
          <Tab label="Edcuation qualifications" />
          <Tab label="Professional skills" />
        </Tabs>
      </Box>

      <TabPanel value={mainTab} index={0}>
        <Typography>Personal details</Typography>
      </TabPanel>

      <TabPanel value={mainTab} index={1}>
        <Typography>Edcuation qualifications</Typography>
      </TabPanel>

      <TabPanel value={mainTab} index={2}>
        <Typography>Professional skills</Typography>
      </TabPanel>
    </Container>
  );
};

export default MultilevelTabs;
