import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CirclePlusIcon } from "lucide-react"

type Props = {}

const RolePage = ( _: Props ) =>
{
    return (
        <div className="px-8 py-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Danh sách Vai trò</h1>
                <Button>
                    <CirclePlusIcon className="h-6 w-6" />
                    Tạo mới vai trò
                </Button>
            </div>
            <Card className="bg-white shadow-sm gap-3">
                <CardHeader>
                    <div>
                        <CardTitle className="text-lg font-semibold">Quản lý vai trò</CardTitle>
                        <CardDescription className="text-sm text-sidebar-label">
                            Hỗ trợ cửa hàng thiết lập và kiểm soát các vai trò của toàn bộ nhân viên trong cửa hàng.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>

                </CardContent>
            </Card>
        </div>
    )
}

export default RolePage