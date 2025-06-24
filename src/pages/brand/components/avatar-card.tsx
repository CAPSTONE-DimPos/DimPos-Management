import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

const AvatarCard = ( _: Props ) =>
{
    return (
        <Card className="lg:col-span-1 bg-white shadow-sm gap-3">
            <CardHeader >
                <CardTitle className='text-lg font-semibold'>
                    Ảnh đại diện
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-40 w-full border rounded-xl">

                </div>
            </CardContent>
        </Card>
    )
}

export default AvatarCard