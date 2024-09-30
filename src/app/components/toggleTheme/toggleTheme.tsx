import React, { useState } from 'react';
import { SwitchWrapper, Switch, Circle, IconWrapper } from './styles';

interface ToggleButtonProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleTheme, isDarkMode }) => {
  const [isMoving, setIsMoving] = useState(false);

  const handleToggle = () => {
    setIsMoving(true);
    setTimeout(() => {
      toggleTheme();
      setIsMoving(false);
    }, 120); 
  };

  return (
    <SwitchWrapper onClick={handleToggle}>
      <Switch isDarkMode={isDarkMode}>
        <Circle isDarkMode={isDarkMode}>
          <IconWrapper isDarkMode={isDarkMode}>
            {isDarkMode ? '🌙' : '☀️'}
          </IconWrapper>
        </Circle>
      </Switch>
    </SwitchWrapper>
  );
};

export default ToggleButton;
