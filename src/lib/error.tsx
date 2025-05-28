import type { BaseResponse } from "@/types/response.type";
import { toast } from "sonner";

export const handleApiError = ( error: any ): BaseResponse<String> | null =>
{
    let handledError: BaseResponse<String> | null = null;
    if ( error.response )
    {
        const { status, data } = error.response;
        if ( status === 401 )
        {
            handledError = {
                status: status,
                message: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
                data: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
            };
        }
        if ( status === 403 )
        {
            handledError = {
                status: status,
                message: "Bạn không có quyền truy cập vào tài nguyên này.",
                data: "Bạn không có quyền truy cập vào tài nguyên này.",
            };
        }

        if ( data && data.status && data.message && data.data )
        {
            handledError = {
                status: data.status,
                message: data.message,
                data: data.data,
            };
        } else
        {
            handledError = {
                status: status,
                message: data?.message || "Một lỗi không xác định đã xảy ra.",
                data: data?.message || "Một lỗi không xác định đã xảy ra.",
            };
        }
    } else if ( error.request )
    {
        handledError = {
            status: 0,
            message: "Không nhận được phản hồi từ máy chủ.",
            data: "Không nhận được phản hồi từ máy chủ.",
        };
    } else
    {
        handledError = {
            status: 0,
            message: "Lỗi không xác định: " + error.message,
            data: "Lỗi không xác định: " + error.message,
        };
    }

    // Show toast notification with the error message
    toast(
        <div className="flex flex-col">
            <span className="font-medium text-red-600">{ handledError.message }</span>
            <span className="text-sm text-muted-foreground">{ handledError.data }</span>
        </div>
    )

    return handledError;
};