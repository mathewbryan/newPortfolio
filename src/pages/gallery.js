import React, {Component} from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation"
import NavigationButton from "../components/navigationButton"
import ImageTiles from "../components/gallery"

class Gallery extends Component {
    constructor(){
        super()
    }
    render(){
    return(
        <div>
            <NavigationButton />
            <ImageTiles />
        </div>

    )
}

}

export default Gallery