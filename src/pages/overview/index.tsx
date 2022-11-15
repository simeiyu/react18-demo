import React from 'react'
import Summary from "./summary"
import Monitor, { Graphic, List } from "./monitor"
import Metrics from "./metrics"

export { Graphic, List }

export default () => <div className="sp-overview">
  <Summary />
  <Monitor />
  <Metrics />
</div>