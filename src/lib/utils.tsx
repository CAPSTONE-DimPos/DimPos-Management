import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn ( ...inputs: ClassValue[] )
{
    return twMerge( clsx( inputs ) )
}

export const formatPrice = ( price: number ) =>
{
    return new Intl.NumberFormat( 'vi-VN', {
        style: 'currency',
        currency: 'VND'
    } ).format( price );
};

export const copyToClipboard = async ( text: string, label: string ) =>
{
    try
    {
        await navigator.clipboard.writeText( text );
        toast(
            <div className="flex flex-col">
                <span className="font-medium text-green-600">
                    { label } đã được sao chép.
                </span>
            </div>
        );
    } catch ( err )
    {
        toast(
            <div className="flex flex-col">
                <span className="font-medium text-red-600">
                    Không thể sao chép { label }.
                </span>
            </div>
        );
    }
};