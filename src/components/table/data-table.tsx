import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import
{
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import
{
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import
{
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import
{
    type ColumnDef,
    type ColumnFilter,
    type ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type PaginationState,
    type SortingState,
    useReactTable,
} from "@tanstack/react-table";
import
{
    ChevronLeftIcon,
    ChevronRightIcon,
    RotateCcw,
    Search,
    Settings
} from "lucide-react";
import { useState } from "react";

interface SearchStateProps extends ColumnFilter
{
    searchPlaceholder?: string;
}

interface DataTableProps<TData, TValue>
{
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    totalItems: number;
    currentPage: number;
    pageSize: number;
    onPageChange: ( page: number ) => void;
    onPageSizeChange: ( size: number ) => void;
    onRowClick?: ( row: TData ) => void;
    isLoading?: boolean;
    pageSizeOptions?: number[];
    // Search props
    searchValues?: SearchStateProps[];
    onSearchChange?: ( value: ColumnFiltersState ) => void;
    // Sort props
    sortValues?: SortingState;
    onSortChange?: ( value: SortingState ) => void;
    // Filter props
    filterValue?: string;
    onFilterChange?: ( value: string ) => void;
    filterOptions?: { label: string; value: string }[];
    filterPlaceholder?: string;
    showRefresh?: boolean;
    onRefresh?: () => void;
    showSettings?: boolean;
    onSettings?: () => void;
    title?: string;
}

// Skeleton component for loading state
function TableSkeleton<TData, TValue> ( { columns, pageSize }: { columns: ColumnDef<TData, TValue>[], pageSize: number } )
{
    // Create an array of skeleton rows based on the current page size
    const skeletonRows = Array.from( { length: pageSize }, ( _, index ) => index );

    return (
        <Table className="relative">
            <TableHeader>
                <TableRow>
                    { columns.map( ( _, index ) => (
                        <TableHead key={ index }>
                            {/* Skeleton for header text with varying widths to look more natural */ }
                            <Skeleton className="h-4 w-20" />
                        </TableHead>
                    ) ) }
                </TableRow>
            </TableHeader>
            <TableBody>
                { skeletonRows.map( ( rowIndex ) => (
                    <TableRow key={ rowIndex }>
                        { columns.map( ( _, colIndex ) => (
                            <TableCell key={ colIndex }>
                                {/* Skeleton for cell content with varying widths */ }
                                <Skeleton
                                    className={ `h-4 ${
                                        // Vary the width to make it look more realistic
                                        colIndex % 3 === 0 ? 'w-24' :
                                            colIndex % 3 === 1 ? 'w-32' : 'w-16'
                                        }` }
                                />
                            </TableCell>
                        ) ) }
                    </TableRow>
                ) ) }
            </TableBody>
        </Table>
    );
}

export function DataTable<TData, TValue> ( {
    columns,
    data,
    totalItems,
    onRowClick,
    pageSizeOptions = [ 5, 10, 20, 30, 40, 50, 100, 200, 500 ],
    currentPage,
    pageSize,
    onPageChange,
    onPageSizeChange,
    isLoading = false,
    // Search props
    searchValues = [],
    onSearchChange,
    // Sort props
    sortValues = [],
    onSortChange,
    // Filter props
    filterValue = "",
    onFilterChange,
    filterOptions = [],
    filterPlaceholder = "Tất cả trạng thái",
    showRefresh = true,
    onRefresh,
    showSettings = true,
    onSettings,
}: DataTableProps<TData, TValue> )
{

    const [ inputValues, setInputValues ] = useState<Record<string, string>>( () =>
        Object.fromEntries( searchValues.map( f => [ f.id, String( f.value ?? "" ) ] ) )
    );

    const paginationState = {
        pageIndex: currentPage - 1,
        pageSize,
    };

    const searchState = searchValues;

    const sortingState = sortValues;

    const pageCount = Math.ceil( totalItems / pageSize );

    const handlePaginationChange = ( updater: PaginationState | ( ( old: PaginationState ) => PaginationState ) ) =>
    {
        const next = typeof updater === "function" ? updater( paginationState ) : updater;
        onPageChange( next.pageIndex + 1 );
        onPageSizeChange( next.pageSize );
    };

    const handleColumnFiltersChange = ( updater: ColumnFiltersState | ( ( old: ColumnFiltersState ) => ColumnFiltersState ) ) =>
    {
        const next = typeof updater === "function" ? updater( searchState ) : updater;
        if ( onSearchChange )
        {
            onSearchChange( next );
        }
    }

    const handleSortingChange = ( updater: SortingState | ( ( old: SortingState ) => SortingState ) ) =>
    {
        const next = typeof updater === "function" ? updater( [] ) : updater;
        if ( onSortChange )
        {
            onSortChange( next );
        }
    }

    const table = useReactTable( {
        data,
        columns,
        pageCount: pageCount,
        state: {
            pagination: paginationState,
            columnFilters: searchState,
            sorting: sortingState,
        },
        onPaginationChange: handlePaginationChange,
        onColumnFiltersChange: handleColumnFiltersChange,
        onSortingChange: handleSortingChange,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        manualPagination: true,
        manualFiltering: true,
        manualSorting: true,
    } );

    return (
        <div className="space-y-4 rounded-lg border bg-card p-4 shadow-xl">
            {/* Enhanced Header Section */ }
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-1 items-center gap-4">
                    {/* More Search Input */ }
                    { onSearchChange &&
                        searchValues.map( ( search ) =>
                        {
                            const currentValue = inputValues[ search.id ] ?? "";
                            return (
                                <div key={ search.id } className="relative flex-1 max-w-sm">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        placeholder={ search.searchPlaceholder || "Tìm kiếm..." }
                                        value={ currentValue }
                                        onChange={ ( e ) =>
                                            setInputValues( ( prev ) => ( {
                                                ...prev,
                                                [ search.id ]: e.target.value,
                                            } ) )
                                        }
                                        onKeyDown={ ( e ) =>
                                        {
                                            if ( e.key === "Enter" )
                                            {
                                                const newFilters: ColumnFiltersState = searchValues.map( ( s ) => ( {
                                                    id: s.id,
                                                    value: inputValues[ s.id ] ?? "",
                                                } ) );
                                                onSearchChange?.( newFilters );
                                            }
                                        } }
                                        className="pl-9"
                                        disabled={ isLoading }
                                    />
                                </div>
                            );
                        } ) }


                    {/* Filter Dropdown */ }
                    { onFilterChange && filterOptions.length > 0 && (
                        <Select
                            value={ filterValue }
                            onValueChange={ onFilterChange }
                            disabled={ isLoading }
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder={ filterPlaceholder } />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">Tất cả</SelectItem>
                                { filterOptions.map( ( option ) => (
                                    <SelectItem key={ option.value } value={ option.value }>
                                        { option.label }
                                    </SelectItem>
                                ) ) }
                            </SelectContent>
                        </Select>
                    ) }
                </div>

                {/* Action Buttons */ }
                <div className="flex items-center gap-2">
                    { showRefresh && onRefresh && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={ onRefresh }
                            disabled={ isLoading }
                            className="h-8 w-8 p-0"
                        >
                            <RotateCcw className="h-4 w-4" />
                        </Button>
                    ) }
                    { showSettings && onSettings && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={ onSettings }
                            disabled={ isLoading }
                            className="h-8 w-8 p-0"
                        >
                            <Settings className="h-4 w-4" />
                        </Button>
                    ) }
                </div>
            </div>

            {/* Table Container with improved styling */ }
            <div className="">
                <ScrollArea className="h-[calc(80vh-280px)] md:h-[calc(90dvh-250px)]">
                    {/* Conditionally render skeleton or actual table based on loading state */ }
                    { isLoading ? (
                        <TableSkeleton columns={ columns } pageSize={ pageSize } />
                    ) : (
                        <Table className="relative">
                            <TableHeader className="rounded-lg sticky z-10 top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                                { table.getHeaderGroups().map( ( headerGroup ) => (
                                    <TableRow key={ headerGroup.id } className="rounded-lg bg-muted/60">
                                        { headerGroup.headers.map( ( header ) => (
                                            <TableHead
                                                key={ header.id }
                                                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground"
                                            >
                                                { header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    ) }
                                            </TableHead>
                                        ) ) }
                                    </TableRow>
                                ) ) }
                            </TableHeader>
                            <TableBody>
                                { table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map( ( row, _ ) => (
                                        <TableRow
                                            key={ row.id }
                                            data-state={ row.getIsSelected() && "selected" }
                                            onClick={ () => onRowClick && onRowClick( row.original ) }
                                            className={ cn(
                                                'bg-background transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
                                                onRowClick ? 'cursor-pointer' : '' )
                                            }
                                        >
                                            { row.getVisibleCells().map( ( cell ) => (
                                                <TableCell
                                                    key={ cell.id }
                                                    className="px-4 py-3 align-middle"
                                                >
                                                    { flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    ) }
                                                </TableCell>
                                            ) ) }
                                        </TableRow>
                                    ) )
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={ columns.length }
                                            className="h-24 text-center text-muted-foreground"
                                        >
                                            { searchValues || filterValue ?
                                                'Không tìm thấy kết quả phù hợp.' :
                                                'Chưa có dữ liệu.'
                                            }
                                        </TableCell>
                                    </TableRow>
                                ) }
                            </TableBody>
                        </Table>
                    ) }
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                {/* Enhanced Pagination Section */ }
                <div className="flex flex-col items-center justify-between gap-4 border-t px-4 py-4 sm:flex-row">
                    {/* Results Info */ }
                    <div className="flex-1 text-sm text-muted-foreground">
                        { isLoading ? (
                            <Skeleton className="h-4 w-48" />
                        ) : totalItems > 0 ? (
                            <>
                                Hiển thị{ " " }
                                <span className="font-medium">
                                    { paginationState.pageIndex * paginationState.pageSize + 1 }
                                </span>{ " " }
                                đến{ " " }
                                <span className="font-medium">
                                    { Math.min(
                                        ( paginationState.pageIndex + 1 ) * paginationState.pageSize,
                                        totalItems
                                    ) }
                                </span>{ " " }
                                của{ " " }
                                <span className="font-medium">{ totalItems }</span>{ " " }
                                kết quả
                            </>
                        ) : (
                            "Không có dữ liệu"
                        ) }
                    </div>

                    {/* Page Size Selector */ }
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <p className="whitespace-nowrap text-sm font-medium">
                                Số hàng mỗi trang:
                            </p>
                            <Select
                                value={ `${ paginationState.pageSize }` }
                                onValueChange={ ( value ) =>
                                {
                                    table.setPageSize( Number( value ) );
                                } }
                                disabled={ isLoading }
                            >
                                <SelectTrigger className="h-8 w-[70px]">
                                    <SelectValue placeholder={ paginationState.pageSize } />
                                </SelectTrigger>
                                <SelectContent side="top">
                                    { pageSizeOptions.map( ( pageSize ) => (
                                        <SelectItem key={ pageSize } value={ `${ pageSize }` }>
                                            { pageSize }
                                        </SelectItem>
                                    ) ) }
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Page Info */ }
                        <div className="flex items-center justify-center text-sm font-medium min-w-[100px]">
                            { isLoading ? (
                                <Skeleton className="h-4 w-24" />
                            ) : totalItems > 0 ? (
                                <>
                                    Trang { paginationState.pageIndex + 1 } trong tổng{ " " }
                                    { table.getPageCount() }
                                </>
                            ) : (
                                "0 trang"
                            ) }
                        </div>

                        {/* Navigation Buttons */ }
                        <div className="flex items-center gap-1">
                            <Button
                                aria-label="Trang đầu"
                                variant="outline"
                                className="hidden h-8 w-8 p-0 lg:flex"
                                onClick={ () => onPageChange( 1 ) }
                                disabled={ currentPage === 1 || isLoading }
                            >
                                <DoubleArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                            </Button>
                            <Button
                                aria-label="Trang trước"
                                variant="outline"
                                className="h-8 w-8 p-0"
                                onClick={ () => onPageChange( currentPage - 1 ) }
                                disabled={ currentPage === 1 || isLoading }
                            >
                                <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
                            </Button>
                            <Button
                                aria-label="Trang sau"
                                variant="outline"
                                className="h-8 w-8 p-0"
                                onClick={ () => onPageChange( currentPage + 1 ) }
                                disabled={ currentPage >= table.getPageCount() || isLoading }
                            >
                                <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                            </Button>
                            <Button
                                aria-label="Trang cuối"
                                variant="outline"
                                className="hidden h-8 w-8 p-0 lg:flex"
                                onClick={ () => onPageChange( table.getPageCount() ) }
                                disabled={ currentPage >= table.getPageCount() || isLoading }
                            >
                                <DoubleArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}