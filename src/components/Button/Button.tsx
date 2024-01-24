import { FC, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
    handleClick: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    text: string;
}>;

const Button: FC<ButtonProps> = ({
    handleClick,
    className,
    disabled,
    type,
    text
}) => {
  return (
    <button 
        className={className} 
        disabled={disabled}
        onClick={handleClick}
        type={type}
    >
        {text}
    </button>
  )
}

export default Button
