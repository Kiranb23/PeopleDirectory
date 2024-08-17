import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import TableRow from "./TableRow";
import SearchBar from "./SearchBar";
import EditDetails from "../Page3/EditDetails";
import DeleteDetails from "../Page3/DeleteDetails";

function TeamMembersTable() {
  const teamMembers = [
    {
      name: "Olivia Rhye",
      username: "@olivia",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
    {
      name: "Phoenix Baker",
      username: "@phoenix",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
    {
      name: "Lana Steiner",
      username: "@lana",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
    {
      name: "Demi Wilkinson",
      username: "@demi",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/811e0dd70bf62ab7f8ca0fede39e454eb49275b9ea089f3b57693bf8f21a9d0e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
    {
      name: "Candice Wu",
      username: "@candice",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cc16c31751ef39d5ce41e0d9cbf1c45b9a6ad3486a64e29ee56c96f11f71307a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
    {
      name: "Natali Craig",
      username: "@natali",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/42454d5df7798a3840e6dbd9a32bfe3212538ceda8020151ad5c353dad22478e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
    {
      name: "Drew Cano",
      username: "@drew",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ecce2d3efea17358d00b4861f4e3b8fbdc55a57b29802a0b35b5d7b69e642acd?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
    {
      name: "Orlando Diggs",
      username: "@orlando",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/02f6f265b4dc88b6f779412d626d92785caf66b74b91c151614ee82d5bed38a6?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
    {
      name: "Andi Lane",
      username: "@andi",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3e16f8e84e9a7ccbf10a772a81ed2580650fe3d56e397c758325f698308ea648?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
    {
      name: "Kate Morrison",
      username: "@kate",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4520c9b99e3a38b4af68a19d0ae98bb47bf1cee23d83153ea0ba215867c6acab?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090",
    },
  ];

  const columns = React.useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: () => (
          <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
              className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-square"
              alt=""
            />
            <span className="self-stretch my-auto text-xs font-medium">
              Active
            </span>
          </div>
        ),
      },
      {
        header: "Role",
        accessorKey: "role",
        cell: () => "Product Designer",
      },
      {
        header: "Email address",
        accessorKey: "email",
        cell: ({ row }) => `${row.original.username.slice(1)}@untitledui.com`,
      },
      {
        header: "Teams",
        accessorKey: "teams",
        cell: () => (
          <div className="flex gap-1 items-start self-stretch my-auto">
            <span className="self-stretch px-2 py-0.5 text-xs font-medium text-violet-700 bg-purple-50 rounded-2xl border border-purple-200 border-solid">
              Design
            </span>
            <span className="self-stretch px-2 py-0.5 text-xs font-medium text-blue-700 bg-sky-50 rounded-2xl border border-sky-200 border-solid">
              Product
            </span>
            <span className="self-stretch px-2 py-0.5 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-2xl border border-indigo-200 border-solid">
              Marketing
            </span>
            <span className="self-stretch px-2 py-0.5 text-xs font-medium bg-gray-50 rounded-2xl border border-gray-200 border-solid text-slate-700">
              +4
            </span>
          </div>
        ),
      },
      {
        header: "",
        accessorKey: "actions",
        cell: () => (
          <div className="flex gap-1 items-center p-4 w-fit min-h-[72px]">
              <Popup trigger={<button
                  className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2.5 my-auto w-10 rounded-lg"
                  aria-label="Edit"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5353e5fb3fa24e818c4a3861334fda8b18f77788cab76254967537202447ac3e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain self-stretch my-auto w-5 aspect-square"
                    alt=""
                  />
                </button>}
                modal nested
                >
                <DeleteDetails />
              </Popup>
                
              
            <Popup
            trigger={

            <button
              className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2.5 my-auto w-10 rounded-lg"
              aria-label="Delete"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b61dda87a50dcf79bd2076762bb3fb3fda1f0376a8389c631d014e7998ecc80?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                className="object-contain self-stretch my-auto w-5 aspect-square"
                alt=""
              />
            </button>
            }
            modal nested
          >
            <EditDetails />
          </Popup>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: teamMembers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <section className="flex overflow-hidden flex-col mt-0 w-fit bg-white rounded-xl border border-gray-200 border-solid shadow-sm max-md:max-w-full">
      <div className="flex flex-col w-full bg-white max-md:max-w-full">
        <div className="flex gap-4 px-6 py-5 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center">
            <div className="flex gap-2 items-center">
              <h2 className="self-stretch my-auto text-lg font-semibold leading-loose text-gray-900">
                Team members
              </h2>
              <span className="self-stretch px-2 py-0.5 my-auto text-sm font-medium leading-none text-center text-violet-700 bg-purple-50 rounded-2xl border border-gray-200 border-solid">
                100 users
              </span>
            </div>
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-wrap items-start w-full max-md:max-w-full">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <TableRow key={row.id} row={row} isEven={index % 2 === 0} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TeamMembersTable;
