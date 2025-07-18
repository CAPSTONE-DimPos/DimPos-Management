import type { Row, Table } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";

export const RowSelectHeader = ( {
    table,
}: {
    table: Table<any>;
} ) =>
{
    return (
        <Checkbox
            color=""
            checked={
                table.getIsAllPageRowsSelected() ||
                ( table.getIsSomePageRowsSelected() && "indeterminate" )
            }
            onCheckedChange={ ( value ) => table.toggleAllPageRowsSelected( !!value ) }
            aria-label="Select all"
        />
    );
}

export const RowSelectCell = ( {
    row,
}: {
    row: Row<any>
} ) =>
{
    return (
        <Checkbox
            checked={ row.getIsSelected() }
            onCheckedChange={ ( value ) => row.toggleSelected( !!value ) }
            aria-label="Select row"
        />
    );
}