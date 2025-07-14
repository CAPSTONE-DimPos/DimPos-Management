import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";


export function cn ( ...inputs: ClassValue[] )
{
  return twMerge( clsx( inputs ) );
}


export const formatPrice = ( price: number ): string =>
{
  return new Intl.NumberFormat( "vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  } ).format( price );
};


export const formatCurrency = formatPrice;


export const formatDate = ( dateStr: string ): string =>
{
  const date = new Date( dateStr );
  return date.toLocaleDateString( "vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  } );
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

export const getImagePreviewUrl = ( file: File ): Promise<string> =>
{
  return new Promise( ( resolve ) =>
  {
    const reader = new FileReader();
    reader.onload = ( e ) => resolve( e.target?.result as string );
    reader.readAsDataURL( file );
  } );
};
