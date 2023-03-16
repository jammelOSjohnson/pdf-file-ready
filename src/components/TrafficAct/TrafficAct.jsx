import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import { useAct } from "../../Context/RoadTrafficActContext";
import "./TrafficAct.css";

function TrafficAct() {
  var { value } = useAct();
  var { fetchCons, trafficLaws } = value;
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
        sort: false,
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
        sort: false,
      },
    },
    {
      name: "sec_of_regs",
      label: "SECTION OF RTA/REGULATIONS",
      options: {
        filter: false,
        sort: false,
      },
    },
  ];

  const [rows, setRows] = useState([]);

  useEffect(() => {
    try {
      if (trafficLaws.length === 0) {
        fetchCons(value);
      } else {
        let tempRows = [];
        trafficLaws.map((item) => {
          //console.log(item);
          tempRows.push(item);
          return;
        });
        setRows(tempRows);
      }
    } catch (err) {
      console.log(err);
    }
  }, [trafficLaws]);

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
      name: "cons",
      direction: "asc",
    },
    expandableRowsHeader: false,
    responsive: "standard",
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <MUIDataTable
            title="Road Traffic Act"
            data={rows}
            columns={columns}
            options={options}
            className="mtable"
          />
        </Box>
      </Container>
    </>
  );
}

export default TrafficAct;
