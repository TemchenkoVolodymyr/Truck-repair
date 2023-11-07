import * as React from 'react';
import {Popper} from '@mui/base/Popper';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import style from './ServiceItemsModal.module.scss'
import {Dispatch, SetStateAction} from "react";
import { useNavigate} from 'react-router-dom'
import {RiWhatsappFill} from "react-icons/ri";
import {BsTelegram} from "react-icons/bs";
import {FaMapMarked} from "react-icons/fa";
import {Link} from "react-scroll";
import {useRovingIndex} from "../../../../Helpers/useRovingIndex.tsx";

export type Options = {
    initialActiveIndex: null | number;
    vertical: boolean;
    handlers?: {
        onKeyDown: (
            event: React.KeyboardEvent<HTMLAnchorElement>,
            fns: { setActiveIndex: React.Dispatch<React.SetStateAction<number | null>> },
        ) => void;
    };
};


export interface IServices {
    service: {
        price: string,
        title: string
    },
    _id: string

}



type AdmissionsMenuProps = {
    focusNext: () => void;
    focusPrevious: () => void;
    onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
    setOpen:Dispatch<SetStateAction<boolean>> | undefined,
};

export const AdmissionsMenu = React.forwardRef(
    (
        {focusNext, focusPrevious,setOpen, ...props}: AdmissionsMenuProps,
        ref: React.ForwardedRef<HTMLAnchorElement>,
    ) => {
        const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
        const navigate = useNavigate()
        const {targets, setActiveIndex, getTargetProps} = useRovingIndex({
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

        const handleClickItem = () => {
            if(setOpen){
                setOpen(true)
            }
        }
        const open = Boolean(anchorEl);
        const id = open ? 'admissions-popper' : undefined;

        const mapNavigation = () => {
            navigate('/')

            setTimeout(() => {
                const element = document.getElementById('map');
                if(element){

                    window.scrollTo({
                        top: element?.offsetTop,
                        behavior: 'smooth'
                    })
                }

            }, 300)
        }
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
                        <Link onClick={mapNavigation} to={'#'} target="_blank" rel="noopener noreferrer">Контакти</Link>
                        <KeyboardArrowDown/>
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
                                minWidth: 300,
                                '--List-radius': '8px',
                                '--List-padding': '4px',
                                '--ListDivider-gap': '4px',
                                background: 'white'
                            }}
                        >
                            <ListItem role="none">
                                <ListItemButton role="menuitem" {...getTargetProps(0)}>
                                    <ListItemContent> <Link onClick={handleClickItem} to={'/'} target="_blank" rel="noopener noreferrer">Задати
                                        питання</Link></ListItemContent>

                                    <Chip size="sm" variant="soft" color="danger">
                                        Протягом 1 години
                                    </Chip>
                                </ListItemButton>
                            </ListItem>
                            <ListDivider/>
                            <ListItem role="none">
                                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                                    <p className={style.contactItem}><RiWhatsappFill color={'green'}></RiWhatsappFill>+380671350458
                                    </p>
                                </ListItemButton>
                            </ListItem>
                            <ListItem role="none">
                                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                                    <p className={style.contactItem}><BsTelegram color={'blue'}></BsTelegram><a
                                        className={style.tel} href={"https://t.me/HomenkyTruckServer"} target="_blank"
                                        rel="noopener noreferrer">HomenkyTruckService</a></p>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                role="none"
                                endAction={
                                    <IconButton variant="outlined" color="neutral" size="sm">
                                        <FaMapMarked style={{fontSize: 25}}/>
                                    </IconButton>
                                }
                            >
                                <ListItemButton role="menuitem" {...getTargetProps(2)}>
                                    <Link onClick={mapNavigation} to={'#'} target="_blank" rel="noopener noreferrer"> Де ми знаходимся?</Link>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Popper>
                </div>
            </ClickAwayListener>
        );
    },
);

