import { Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "../Routes"
const HandleRoutes = () => {
    return (
        <div>
            <Routes>
                {PrivateRoutes.map((item, index) => (
                    <Route path={item.path} element={<item.component />} key={index} exact={true} />
                ))}
            </Routes>
        </div >
    )
}

export default HandleRoutes