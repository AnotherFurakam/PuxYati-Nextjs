"use client";
import userPlanService from "@/services/user-plan.service";
import axios from "axios";
import { useEffect, type FC, useState } from "react";

interface pageProps {}

const AdminDashboradPage: FC<pageProps> = ({}) => {
  const [ganancia, setGanancia] = useState(0);
  const [users, setUsers] = useState(0);
  const [planes, setPlanes] = useState(0);

  useEffect(() => {
    axios
      .get("/api/user-plan")
      .then(({ data }) => setGanancia(data.totalGanancias));

    axios.get("/api/user/count").then(({ data }) => setUsers(data.quantity));

    axios.get("/api/plan/count").then(({ data }) => setPlanes(data.quantity));
  }, []);
  return (
    <main className="container d-flex flex-column px-5 py-4 px-md-0">
      <h1 className="display-4">Dashboard</h1>
      <div className="row h-25 my-auto m-0 gap-4">
        <div className="col-md bg-success p-3 rounded-4 d-flex flex-column gap-4">
          <p className="text-white fs-3 text-center m-0">
            Usuarios registrados
          </p>
          <span className="text-white fs-1 mx-auto">{users === 0 ? 'Cargando...' : users}</span>
        </div>
        <div className="col-md bg-primary p-3 rounded-4 d-flex flex-column gap-4">
          <p className="text-white fs-3 text-center m-0">Ganancia total</p>
          <span className="text-white fs-1 mx-auto">{ganancia === 0 ? 'Cargando...' : `S/. ${ganancia}`}</span>
        </div>
        <div className="col-md bg-warning p-3 rounded-4 d-flex flex-column gap-4">
          <p className="text-white fs-3 text-center m-0">Planes disponibles</p>
          <span className="text-white fs-1 mx-auto">{planes === 0 ? 'Cargando...' : planes}</span>
        </div>
      </div>
    </main>
  );
};
export default AdminDashboradPage;
