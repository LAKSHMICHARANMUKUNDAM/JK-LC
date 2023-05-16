import { Navigate, Route, Routes } from "react-router-dom";
import MSLReferenceList from "../pages/mslReferenceList";
import ClaimantList from "../pages/claimantList";

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route element={<MSLReferenceList />} path="msl-reference-list"/>
                <Route element={<ClaimantList />} path="claimant-list"/>
                <Route element={<Navigate replace to="/msl-reference-list"/>} path="*" />
            </Routes>
        </>
    )
}

export default AppRoutes;