import * as React from "react";
import {useRovingIndex} from "./useRovingIndex.tsx";
import {ClickAwayListener} from "@mui/base/ClickAwayListener";
import ListItemButton from "@mui/joy/ListItemButton";
import {NavLink} from "react-router-dom";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import {Popper} from "@mui/base/Popper";
import List from "@mui/joy/List";
import style from "../Components/Header/NavItems/ServiceItemsModal/ServiceItemsModal.module.scss";
import Items from "../Components/Header/NavItems/Items/Items.tsx";
import {IServices} from "../Components/Header/NavItems/ServiceItemsModal/ServiceItemsModal.tsx";

type AboutMenuProps = {
    focusNext: () => void;
    focusPrevious: () => void;
    onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
    services: IServices[]
};
export const AboutMenu = React.forwardRef(
    (
        {focusNext, focusPrevious, services, ...props}: AboutMenuProps,
        ref: React.ForwardedRef<HTMLAnchorElement>,
    ) => {
        const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
        const {targets, setActiveIndex} = useRovingIndex({
            initialActiveIndex: null,
            vertical: true,
            handlers: {
                onKeyDown: (event, fns) => {
                    if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
                        event.preventDefault();
                    }
                    if (event.key === 'Tab') {
                        setAnchorEl(null);
                        fns.setActiveIndex(null);
                    }
                    if (event.key === 'ArrowLeft') {
                        setAnchorEl(null);
                        focusPrevious();
                    }
                    if (event.key === 'ArrowRight') {
                        setAnchorEl(null);
                        focusNext();
                    }
                },
            },
        });

        const open = Boolean(anchorEl);
        const id = open ? 'about-popper' : undefined;
        return (
            <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                <div onMouseLeave={() => setAnchorEl(null)}>
                    <ListItemButton
                        aria-haspopup
                        aria-expanded={open ? 'true' : 'false'}
                        ref={ref}
                        {...props}
                        role="menuitem"
                        onKeyDown={(event) => {
                            props.onKeyDown?.(event);
                            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                                setAnchorEl(null);
                            }
                            if (event.key === 'ArrowDown') {
                                event.preventDefault();
                                targets[0]?.focus();
                                setActiveIndex(0);
                            }
                        }}
                        onFocus={(event) => setAnchorEl(event.currentTarget)}
                        onMouseEnter={(event) => {
                            props.onMouseEnter?.(event);
                            setAnchorEl(event.currentTarget);
                        }}
                        sx={(theme) => ({
                            ...(open && theme.variants.plainHover.neutral),
                        })}
                    >
                        <NavLink to={'services'}>Послуги</NavLink> <KeyboardArrowDown/>
                    </ListItemButton>
                    <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
                        <List
                            role="menu"
                            aria-label="About"
                            variant="outlined"
                            sx={{
                                my: 2,
                                boxShadow: 'md',
                                borderRadius: 'sm',
                                '--List-radius': '8px',
                                '--List-padding': '4px',
                                '--ListDivider-gap': '4px',
                                '--ListItemDecorator-size': '32px',
                                'color': 'dodgerblue',
                                width: 1500,
                            }}
                        >
                            <div className={style.items}>
                                <Items services={services}></Items>
                            </div>
                        </List>
                    </Popper>
                </div>
            </ClickAwayListener>
        );
    },
);