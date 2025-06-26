import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { TBrandMenu } from "@/schema/menu.schema";
import { format } from "date-fns";
import { CalendarIcon, Edit } from "lucide-react";

type Props = {
    isLoading: boolean
    initialData: TBrandMenu
}

const OverviewMenu = ( { initialData, isLoading }: Props ) =>
{
    return (
        <Card className='border-none shadow-none lg:col-span-2 xl:col-span-2 gap-3 my-4'>
            <CardHeader className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
                <CardTitle>Thông Tin Cơ Bản</CardTitle>
                <div className="flex justify-end">
                    <Button disabled={ isLoading } variant="default" className="w-32">
                        <Edit className="mr-2 h-4 w-4" />
                        Chỉnh sửa
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-foreground mb-2">Tên thực đơn</p>
                        <Input disabled={ true } placeholder="Nhập tên" className="bg-background disabled:opacity-90" value={ initialData.name } />
                    </div>

                    <div>
                        <p className="text-sm font-medium text-foreground mb-2">Loại thực đơn</p>
                        <Select disabled={ true } defaultValue={ initialData.type?.toString() }>
                            <SelectTrigger>
                                <SelectValue className="bg-background disabled:opacity-90" placeholder="Chọn loại" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0">Theo mùa</SelectItem>
                                <SelectItem value="1">Theo thời gian</SelectItem>
                                <SelectItem value="2">Tiêu chuẩn</SelectItem>
                                <SelectItem value="3">Khuyến mại</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </div>


                <p className="text-sm font-medium text-foreground mb-2">Tên thực đơn</p>
                <Textarea
                    value={ initialData.description }
                    disabled={ true }
                    placeholder="Nhập ghi chú cho sản phẩm"
                    className="min-h-[100px] bg-background disabled:opacity-90"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>

                        <p className="text-sm font-medium text-foreground mb-2">Có hiệu lực tử</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    disabled={ true }
                                    className={ cn(
                                        "w-full pl-3 text-left font-normal",
                                        !initialData.validFrom && "text-muted-foreground"
                                    ) }
                                >
                                    { initialData.validFrom ? (
                                        format( initialData.validFrom, "dd/MM/yyyy HH:mm" )
                                    ) : (
                                        <span>Chọn ngày và giờ</span>
                                    ) }
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={ initialData.validFrom }
                                    disabled={ ( date ) => date < new Date() }
                                    captionLayout="dropdown"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>


                    <div>
                        <p className="text-sm font-medium text-foreground mb-2">Có hiệu lực đến</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    disabled={ true }
                                    className={ cn(
                                        "w-full pl-3 text-left font-normal",
                                        !initialData.validTo && "text-muted-foreground"
                                    ) }
                                >
                                    { initialData.validTo ? (
                                        format( initialData.validTo, "dd/MM/yyyy HH:mm" )
                                    ) : (
                                        <span>Chọn ngày và giờ</span>
                                    ) }
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={ initialData.validTo }
                                    disabled={ true }
                                    captionLayout="dropdown"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default OverviewMenu