import type { ColumnFiltersState } from "@tanstack/react-table";
import { useSearchParams } from "react-router-dom";

interface UseQueryParamsOptions
{
    defaultPage?: number;
    defaultPageSize?: number;
    defaultSortBy?: string;
    defaultIsAsc?: boolean;
    defaultFilter?: ColumnFiltersState;
}

export const useQueryParams = ( {
    defaultPage = 1,
    defaultPageSize = 10,
    defaultSortBy = "id",
    defaultIsAsc = true,
    defaultFilter = [], // Now we can specify multiple search parameters
}: UseQueryParamsOptions = {} ) =>
{
    console.log( "defaultFilter", defaultFilter );
    const [ searchParams, setSearchParams ] = useSearchParams();

    // --- Get values from URL with fallback defaults ---
    const currentPage = parseInt( searchParams.get( "page" ) || `${ defaultPage }`, 10 );
    const pageSize = parseInt( searchParams.get( "size" ) || `${ defaultPageSize }`, 10 );
    const sortBy = searchParams.get( "sortBy" ) || defaultSortBy;
    const isAsc = searchParams.get( "isAsc" ) === "false" ? false : defaultIsAsc;
    const filter: ColumnFiltersState = [];
    defaultFilter.forEach( ( f, _ ) =>
    {
        filter.push( {
            id: f.id,
            value: searchParams.get( f.id ) || f.value,
        } )
    } )


    // --- Helper function to update parameters while preserving others ---
    const updateParams = ( updates: Record<string, string | null> ) =>
    {
        const current = Object.fromEntries( searchParams.entries() );

        // Handle null values by removing them from the URL
        Object.entries( updates ).forEach( ( [ key, value ] ) =>
        {
            if ( value === null || value === undefined || value === '' )
            {
                delete current[ key ];
            } else
            {
                current[ key ] = value;
            }
        } );

        setSearchParams( current );
    };

    // --- Pagination setters ---
    const setPage = ( page: number ) =>
    {
        updateParams( { page: page.toString() } );
    };

    const setPageSize = ( size: number ) =>
    {
        updateParams( { page: "1", size: size.toString() } );
    };

    // --- Sorting setters ---
    const setSort = ( newSortBy: string, ascending: boolean = true ) =>
    {
        updateParams( {
            page: "1",
            sortBy: newSortBy,
            isAsc: ascending.toString(),
        } );
    };

    // --- Filtering setters ---
    const setFilter = ( filters: ColumnFiltersState ) =>
    {
        const updates: Record<string, string | null> = {};
        filters.forEach( ( filter ) =>
        {
            updates[ filter.id ] = filter.value as string;
        } );
        updateParams( { page: "1", ...updates } );
    };



    return {
        // Pagination
        currentPage,
        pageSize,
        setPage,
        setPageSize,

        // Sorting
        sortBy,
        isAsc,
        setSort,

        // Filtering
        filter,
        setFilter,

    };
};