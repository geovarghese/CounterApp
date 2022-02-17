import logo from "./logo.svg";
import "./App.css";
import Test from "./components/test";
import Dropdown from "./components/dropdown";
import { useState } from "react";
import MenuToggle from "./components/menutoggle";
import ArrowToggle from "./components/arrowtoggle";
import { motion, useCycle } from "framer-motion";
import { useMemo } from "react";
import FormTable from "./components/table";
import ChildrenStag from "./components/ChildrenStag";
import StatusPill from "./components/shared/StatusPill";
import AvatarCell from "./components/shared/AvatarCell";

const getData = () => {
  const data = [
    {
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      status: "Active",
      role: "Admin",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cody Fisher",
      email: "cody.fisher@example.com",
      title: "Product Directives Officer",
      department: "Intranet",
      status: "Active",
      role: "Owner",
      imgUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Esther Howard",
      email: "esther.howard@example.com",
      title: "Forward Response Developer",
      department: "Directives",
      status: "InActive",
      role: "Member",
      imgUrl:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
      title: "Central Security Manager",
      department: "Program",
      status: "InActive",
      role: "Member",
      imgUrl:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Kristin Watson",
      email: "kristin.watson@example.com",
      title: "Lean Implementation Liaison",
      department: "Mobility",
      status: "offline",
      role: "Admin",
      imgUrl:
        "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
      title: "Internal Applications Engineer",
      department: "Security",
      status: "Active",
      role: "Member",
      imgUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];

  return [...data, ...data, ...data];
};

function App() {
  const [selected, setSelected] = useState("Select a value");
  const [isOpen, toggleOpen] = useCycle(false, true);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        emailAccessor: "email",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Role",
        accessor: "role",
      },
    ],
    []
  );

  const data = useMemo(() => getData(), []);

  return (
    <>
      {/* <Test /> */}
      <Dropdown key="ddlBrand" selected={selected} setSelected={setSelected} />
      <br />
      <br />

      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <MenuToggle toggle={() => toggleOpen()} />

        <br />
        <br />
        <ArrowToggle toggle={() => toggleOpen()} />
      </motion.nav>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M 2 2.5 L 20 2.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M 2 9.423 L 20 9.423"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M 2 16.346 L 20 16.346"
        />
      </svg>

      <br />
      <br />
      <ChildrenStag />

      <br />
      <br />
      <div className="m-4">
        <FormTable key="tblBrand" columns={columns} data={data} />
      </div>
    </>
  );
}

export default App;
