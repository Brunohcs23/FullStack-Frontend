import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomeScreen from "../pages/Home/HomeScreen"
import ImageDetailsScreen from "../pages/ImageDetails/ImageDetailsScreen"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={HomeScreen} />
                <Route exact path={"/image/:id"} component={ImageDetailsScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router