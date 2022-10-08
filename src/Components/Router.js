import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ItemsPage from "../Pages/Item/ItemsPage";
import ItemErrorPage from "../Pages/Item/ItemErrorPage";
import GeneralLayout from "../Pages/Layouts/GeneralLayout";
import LoginPage from "../Pages/Account/LoginPage";
import ItemDetails from "../Pages/Item/ItemDetails";
import ItemCreate from "../Pages/Item/ItemCreate";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element:
            <ProtectedRoute>
                <GeneralLayout />
            </ProtectedRoute>,
        children: [
            {
                path: '/',
                element: <HomePage />,
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: "Items",
        element: 
        <ProtectedRoute>
            <GeneralLayout />
        </ProtectedRoute>,
        errorElement: <ItemErrorPage />,
        children: [
            {
                path: ":ItemType",
                element: < ItemsPage />
            },
            {
                path: "ItemDetails",
                element: <ItemDetails />,
                errorElement: <ItemErrorPage />,
                children: [
                    {
                        path: ":ItemId",
                        element: <ItemDetails />
                    }
                ]
            },
            {
                path: "CreateItem",
                element: <ItemCreate />,
                errorElement: <ItemErrorPage />,
            }
        ]
    },

    {
        path: "about",
        element: <div>About</div>,
    },
]);

