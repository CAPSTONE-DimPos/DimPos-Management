import { memo } from "react"

const IngredientIcon = ( { className = "", ...props } ) =>
{
    return (
        <svg className={ className } width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" { ...props }>
            <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.85 9.01 9.02 9.02C12.19 9.27 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" fill="currentColor" />
            <path d="M22.0001 8.5C22.0001 11.76 19.6001 14.45 16.4801 14.92V14.86C16.1701 10.98 13.0201 7.83 9.11008 7.52H9.08008C9.55008 4.4 12.2401 2 15.5001 2C19.0901 2 22.0001 4.91 22.0001 8.5Z" fill="currentColor" />
            <path d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.08 6.93 3.71 6.3L6.3 3.71C6.92 3.08 6.48 2 5.59 2Z" fill="currentColor" />
            <path d="M18.4097 22H20.9997C21.5497 22 21.9997 21.55 21.9997 21V18.41C21.9997 17.52 20.9197 17.07 20.2897 17.7L17.6997 20.29C17.0797 20.92 17.5197 22 18.4097 22Z" fill="currentColor" />
        </svg>
    )
}

export default memo( IngredientIcon )