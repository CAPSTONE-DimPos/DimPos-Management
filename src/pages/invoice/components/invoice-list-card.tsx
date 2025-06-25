import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit } from "lucide-react"

type Props = {}

const InvoiceListCard = ( _: Props ) =>
{
    return (
        <Card className="bg-white shadow-none border-none gap-3">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="text-lg font-semibold">Danh sách mẫu hoá đơn</CardTitle>
                    <CardDescription className="text-sm text-sidebar-label">
                        Nhập mô tả
                    </CardDescription>
                </div>
                <Button variant="default" >
                    <Edit className="mr-2 h-4 w-4" />
                    Tạo mẫu hoá đơn mới
                </Button>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default InvoiceListCard