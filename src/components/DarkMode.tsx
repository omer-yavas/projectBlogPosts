import { useContext } from 'react';
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { UiContext } from '../context/uiContext';
import './darkmode.scss';

const DarkMode = () => {
  const uiConfig = useContext(UiContext);
  return (
    <div className="themeBox">
      <BsSun className="icon" />
      <label className="switch">
        <input type="checkbox" onChange={() => uiConfig.changeTheme()} />
        <span className="slider round" />
      </label>
      <BsMoon className="icon" />
    </div>
  );
};

export default DarkMode;
