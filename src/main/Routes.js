import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Bar from '../components/Bar'
import MixedBarLine from '../components/MixedBarLine'

export default props => 
    <Switch>
        <Route exact path='/bar' component={Bar} />
        <Route exact path='/mixedbarline' component={MixedBarLine} />
    </Switch>