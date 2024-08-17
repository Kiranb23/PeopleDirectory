import React from "react";
import { flexRender } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";


function TableRow({ row, isEven }) {

  const navigate = useNavigate();

  function ShowItem(){
    navigate("/peopleDirectory/Oliva")

  }


  const bgClass = isEven ? "bg-gray-50" : "";

  return (
    <tr className={`${bgClass} border-b border-solid border-b-gray-200`}>
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id} className="px-6 py-4 min-h-[60px] max-md:px-5">
          {cell.column.columnDef.header === "Name" ? (
            <div className="flex z-0 gap-3 items-center w-full cursor-pointer" onClick={ShowItem}>
              <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                <img
                  loading="lazy"
                  src={row.original.image}
                  className="object-cover absolute inset-0 size-full"
                  alt={`${row.original.name}'s avatar`}
                />
                <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
              </div>
              <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                <div className="font-medium text-gray-900">
                  {row.original.name}
                </div>
                <div className="text-slate-600">{row.original.username}</div>
              </div>
            </div>
          ) : (
            flexRender(cell.column.columnDef.cell, cell.getContext())
          )}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
