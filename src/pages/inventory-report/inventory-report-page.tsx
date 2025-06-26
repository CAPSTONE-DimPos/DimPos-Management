import { Button } from "@/components/ui/button"
import { UploadCloudIcon } from "lucide-react"

type Props = {}

const InventoryReportPage = ( _: Props ) =>
{
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Báo cáo kho</h1>
                <Button variant="outline">
                    <UploadCloudIcon className="mr-2" />
                    Xuất dữ liệu
                </Button>
            </div>
        </div>
    )
}

export default InventoryReportPage