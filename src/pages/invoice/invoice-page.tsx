import InvoiceListCard from "./components/invoice-list-card"
import PrintConfigCard from "./components/print-config-card"

type Props = {}

const InvoicePage = ( _: Props ) =>
{
    return (
        <div className="px-8 py-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Quản lý hoá đơn</h1>
            </div>
            <div className="flex flex-col gap-4">
                <PrintConfigCard />
                <InvoiceListCard />
            </div>
        </div>
    )
}

export default InvoicePage