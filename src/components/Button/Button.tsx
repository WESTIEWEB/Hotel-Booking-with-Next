import { FC, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    text: string;
}>;

const Button: FC<ButtonProps> = ({
    onClick,
    className,
    disabled,
    type,
    text
}) => {
  return (
    <button 
        className={className} 
        disabled={disabled}
        onClick={onClick}
        type={type}
    >
        {text}
    </button>
  )
}

export default Button
