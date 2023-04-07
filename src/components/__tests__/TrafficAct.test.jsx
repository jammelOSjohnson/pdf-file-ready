// Import necessary dependencies (if any)
import { render, screen } from "@testing-library/react";
import TrafficAct from "../TrafficAct/TrafficAct";
import ActProvider, {
  RoadTrafficActContext,
} from "../../Context/RoadTrafficActContext";

// Create a test suite
describe("<ActProvider />", () => {
  // Create a test case for rendering the component
  test("renders TrafficAct component", () => {
    // Render the component
    render(
      <ActProvider>
        <RoadTrafficActContext>
          <TrafficAct />
        </RoadTrafficActContext>
      </ActProvider>
    );

    // Assert if the component is rendered
    const element = screen.getByText("Road Traffic Act");
    expect(element).toBeInTheDocument();
  });

  // Create a test case for testing the columns data
  test("renders columns data", () => {
    // Create the expected columns data for testing
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

    // Render the component
    render(<TrafficAct />);
    const columnHeaderElements = screen.getAllByRole("columnheader");

    // Assert if the expected columns data is rendered
    columnHeaderElements.forEach((header, index) => {
      const columnName = columns[index].label;
      expect(header).toHaveTextContent(columnName);
    });
  });

  // Create a test case for testing the options data
  test("renders options data", () => {
    // Create the expected options data for testing
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

    // Render the component
    const { container } = render(<TrafficAct />);

    // Assert if the expected options data is rendered
    expect(container.querySelector(".mtable")).toHaveAttribute(
      "data-filter-type",
      options.filterType
    );
    expect(container.querySelector(".mtable")).toHaveAttribute(
      "data-search",
      options.search.toString()
    );
    expect(container.querySelector(".mtable")).toHaveAttribute(
      "data-selectable-rows",
      options.selectableRows
    );
    expect(
      container.querySelector(
        ".mtable .MuiToolbar-root button[title='Download CSV']"
      )
    ).not.toBeInTheDocument();
    expect(container.querySelector(".mtable")).toHaveAttribute(
      "data-print",
      options.print.toString()
    );
    expect(container.querySelector(".mtable")).toHaveAttribute(
      "data-sort-order-name",
      options.sortOrder.name
    );
    expect(container.querySelector(".mtable")).toHaveAttribute(
      "data-sort-order-direction",
      options.sortOrder.direction
    );
    expect(container.querySelector(".mtable")).toHaveAttribute(
      "data-expandable-rows-header",
      options.expandableRowsHeader.toString()
    );
    expect(container.querySelector(".mtable")).toHaveAttribute(
      "data-responsive",
      options.responsive
    );
  });
});
