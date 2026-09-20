import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Connect and Convert home">
      <img src="/logo.jpg" alt="" />
      <span>
        <b>
          Connect <i>&</i> Convert
        </b>
        <small>Turning Attention Into Action</small>
      </span>
    </Link>
  );
}
