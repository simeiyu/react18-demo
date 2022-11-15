import React from 'react'
import { Link, Outlet } from "react-router-dom"

// export default () => <Outlet />

// export const Default = () => <><h2>Explore</h2><Link to='/explore/scene'>scene</Link></>
export default () => <><h2>Explore</h2><Link to='/scene'>scene</Link></>
export const Scene = () => <h2>Scene</h2>
