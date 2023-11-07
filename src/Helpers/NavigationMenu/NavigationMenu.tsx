import {IHeaderProps} from "../../Components/Header/Header.tsx";
import {useRovingIndex} from "../useRovingIndex.tsx";
import * as React from "react";
import {useEffect} from "react";
import {getServices} from "../../Requests/GetServices.ts";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import HomeRounded from "@mui/icons-material/HomeRounded";
import {NavLink} from "react-router-dom";
import {AboutMenu} from "../AboutMenuModal.tsx";
import {AdmissionsMenu, IServices} from "../../Components/Header/NavItems/ServiceItemsModal/ServiceItemsModal.tsx";

export default function NavigationMenu({setOpen} : IHeaderProps) {
    const {targets, getTargetProps, setActiveIndex, focusNext, focusPrevious} =
        useRovingIndex();
    const [services, setServices] = React.useState<IServices[] | []>([])

    useEffect(() => {
        getServices(setServices)
    }, [])


    return (
        <Box sx={{zIndex: 2}}>
            <List
                role="menubar"
                orientation="horizontal"
                sx={{
                    '--List-radius': '8px',
                    '--List-padding': '4px',
                    '--List-gap': '8px',
                    '--ListItem-gap': '0px',
                }}
            >
                <ListItem role="none">
                    <ListItemButton
                        role="menuitem"
                        {...getTargetProps(0)}
                        component="a"
                        href="#navigation-menu"
                    >
                        <ListItemDecorator>
                            <HomeRounded/>
                        </ListItemDecorator>
                        <NavLink to={'/'}>Головна</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem role="none">
                    <AboutMenu
                        onMouseEnter={() => {
                            setActiveIndex(1);
                            targets[1].focus();
                        }}
                        focusNext={focusNext}
                        focusPrevious={focusPrevious}
                        {...getTargetProps(1)}
                        services={services}
                    />
                </ListItem>
                <ListItem role="none">
                    <AdmissionsMenu
                        onMouseEnter={() => {
                            setActiveIndex(2);
                            targets[2].focus();
                        }}
                        focusNext={focusNext}
                        focusPrevious={focusPrevious}
                        setOpen={setOpen}
                        {...getTargetProps(2)}
                    />
                </ListItem>
            </List>
        </Box>
    );
}