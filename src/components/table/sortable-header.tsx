import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

export const SortableHeader = ( {
    column,
    children,
}: {
    column: any;
    children: React.ReactNode;
} ) =>
{
    const sorted = column.getIsSorted();

    return (
        <Button
            variant="ghost"
            onClick={ () => column.toggleSorting( sorted === "asc" ) }
            className="hover:bg-muted/50 -ml-3 h-8 data-[state=open]:bg-accent"
        >
            <span className="font-semibold text-base">{ children }</span>
            {/* Visual indicator for sorting state - shows all three states clearly */ }
            { sorted === "asc" ? (
                <ArrowUp className="ml-2 h-4 w-4" />
            ) : sorted === "desc" ? (
                <ArrowDown className="ml-2 h-4 w-4" />
            ) : null }
        </Button>
    );
};