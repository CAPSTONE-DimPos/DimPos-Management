import { useBrand } from "@/hooks/use-brand"
import { handleApiError } from "@/lib/error"
import AvatarCard from "./components/avatar-card"
import DetailCard from "./components/detail-card"
import StoresCard from "./components/stores-card"

type Props = {}

const BrandPage = ( _: Props ) =>
{
    const { getBrandDetails } = useBrand()
    const { data, isError, error } = getBrandDetails()
    if ( isError && error )
    {
        handleApiError( error );
    }
    console.log( data );
    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8">
            <h1 className="text-2xl font-semibold mb-6">Thương hiệu của tôi</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <AvatarCard />
                <DetailCard
                    initialData={ data.data.data }
                />
            </div>
            <StoresCard />
        </div>
    )
}

export default BrandPage