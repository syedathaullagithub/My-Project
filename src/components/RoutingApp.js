import React from 'react'

export default function RoutingApp() {
    return (
        <div>
             <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}
