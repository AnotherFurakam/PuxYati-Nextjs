"use client";
import { IPlan } from "@/interfaces/plan.interface";
import axios from "axios";
import { FC, useEffect, useState } from "react";

const AdminPlanPage: FC = () => {
  const [planes, setPlanes] = useState<IPlan[] | null>(null);

  useEffect(() => {
    axios.get("/api/plan").then(({ data }) => setPlanes(data));
  }, []);

  return (
    <main className="container py-5">
      <h1 className="display-5">Listado de Planes</h1>
      <div className="table-responsive">
        <table className="table mt-5 table-bordered text-center table-light table-hover">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Meses</th>
              <th>Juegos</th>
              <th>Información adicional</th>
            </tr>
          </thead>
          <tbody>
            {planes ? (
              planes.map((plan) => {
                return (
                  <tr key={plan.id} style={{ cursor: "default" }}>
                    <td>{plan.name}</td>
                    <td>S/. {plan.price}</td>
                    <td>{plan.month_duration}</td>
                    <td>{plan.games}</td>
                    <td>
                      <ul className="list-unstyled">
                        {plan.additional_info.map((info, k) => (
                          <li key={k} className="list-item">
                            - {info}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6}>
                  <div className="d-flex" style={{ minHeight: 500 }}>
                    <div className="spinner-border m-auto" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminPlanPage;
