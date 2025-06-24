import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import type { TBrand } from '@/schema/brand.schema'
import { Edit } from 'lucide-react'

type Props = {
    initialData: TBrand
}

const DetailCard = ( { initialData }: Props ) =>
{
    return (
        <Card className="lg:col-span-2 bg-white shadow-sm gap-3">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="text-lg font-semibold">Thông tin cơ bản</CardTitle>
                    <CardDescription className="text-sm text-sidebar-label">
                        Nhập mô tả
                    </CardDescription>
                </div>
                <Button variant="default" >
                    <Edit className="mr-2 h-4 w-4" />
                    Chỉnh sửa
                </Button>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                    <p className="text-sm font-medium text-foreground mb-2">Tên thương hiệu</p>
                    <Input value={ initialData.name } disabled={ true } className="bg-background disabled:opacity-90" />
                </div>
                <div className="md:col-span-1">
                    <p className="text-sm font-medium text-foreground mb-2">Email</p>
                    <Input value={ initialData.email } disabled={ true } className="bg-background disabled:opacity-90" />
                </div>
                <div className="md:col-span-1">
                    <p className="text-sm font-medium text-foreground mb-2">Điện thoại</p>
                    <Input value={ initialData.phone } disabled={ true } className="bg-background disabled:opacity-90" />
                </div>
                <div className="md:col-span-1">
                    <p className="text-sm font-medium text-foreground mb-2">Địa chỉ</p>
                    <Input value={ initialData.address } disabled={ true } className="bg-background disabled:opacity-90" />
                </div>
                <div className="md:col-span-1">
                    <p className="text-sm font-medium text-foreground mb-2">Mã Thương Hiệu</p>
                    <Input value={ initialData.code } disabled={ true } className="bg-background disabled:opacity-90" />
                </div>
            </CardContent>
        </Card>
    )
}

export default DetailCard