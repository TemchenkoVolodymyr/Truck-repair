import {styled} from '@mui/system';
import {Tabs} from '@mui/base/Tabs';
import {TabsList as BaseTabsList} from '@mui/base/TabsList';
import {TabPanel as BaseTabPanel} from '@mui/base/TabPanel';
import {buttonClasses} from '@mui/base/Button';
import {Tab as BaseTab, tabClasses} from '@mui/base/Tab';
import place from '../../../assets/slider/slider-1.jpg'
import place2 from '../../../assets/slider/slider-2.jpg'
import place3 from '../../../assets/slider/slider-3.jpg'
import equipment1 from '../../../assets/slider/equipment1.jpg'
import equipment2 from '../../../assets/slider/equipment2.jpg'
import equipment3 from '../../../assets/slider/equipment3.jpg'
import Items from "./Items/Items.tsx";


const SliderItems = () => {

    const environment: string[] = [place, place2, place3]
    const equipment: string[] = [equipment1, equipment2, equipment3]
    return (
        <>
            <Tabs defaultValue={0}>
                <TabsList>
                    <Tab value={0}>Помiщення</Tab>
                    <Tab value={1}>Обладнання</Tab>
                </TabsList>
                <TabPanel value={0}>
                     <Items  items={environment}></Items>

                </TabPanel>
                <TabPanel value={1}>
                    <Items  items={equipment}></Items>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default SliderItems;
const blue = {
    50: '#4762FF',
    100: '#4762FF',
    200: '#4762FF',
    300: '#4762FF',
    400: '#4762FF',
    500: '#4762FF',
    600: '#4762FF',
    700: '#4762FF',
    800: '#4762FF',
    900: '#4762FF',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
    ({theme}) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  // border: 1px solid ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  border-radius: 12px;
  opacity: 1;
  `,
);

const TabsList = styled(BaseTabsList)(
    ({theme}) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);