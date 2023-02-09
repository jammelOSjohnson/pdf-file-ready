import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MUIDataTable from "mui-datatables";

function TrafficAct() {
  const columns = [
    {
      name: "cons",
      label: "CONS#",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "description",
      label: "DESCRIPTION",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "fineAmt",
      label: "FINE AMOUNT",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "points",
      label: "POINTS",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "mca",
      label: "MCA",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "sec_of_regs",
      label: "SECTION OF RTA/REGULATIONS",
      options: {
        filter: false,
        sort: true,
      },
    },
  ];

  const rows = [
    {
      cons: 1,
      description: "disc",
      fineAmt: "10,000",
      points: "10",
      mca: "ah",
      sec_of_regs: "reg",
    },
  ];

  const options = {
    filterType: "dropdown",
    search: true,
    selectableRows: "none",
    download: false,
    downloadOptions: {
      filterOptions: {
        useDisplayedColumnsOnly: true,
        useDisplayedRowsOnly: false,
      },
    },
    print: false,
    sortOrder: {
      name: "dateCreated",
      direction: "desc",
    },
  };
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <MUIDataTable
            title="Road Traffic Act"
            data={rows}
            columns={columns}
            options={options}
          />
        </Box>
      </Container>
    </>
  );
}

export default TrafficAct;
