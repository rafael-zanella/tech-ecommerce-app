import React from 'react';
import { DefaultButton } from './Button.styled';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  mode?: 'primary' | 'secondary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  mode = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <DefaultButton
      mode={mode}
      size='large'
      backgroundColor={backgroundColor}
    >
      {label}
    </DefaultButton>
  );
};
