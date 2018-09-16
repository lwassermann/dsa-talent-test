import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <section>
        <Link to="/talent">Talent challenge</Link>
      </section>
    </Fragment>
  )
}
