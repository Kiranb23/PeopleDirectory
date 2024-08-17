import React from 'react';

function TableHeader({ headerGroups }) {
  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, index) => (
            <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className="flex z-0 gap-3 items-center px-6 py-3.5 w-full text-xs font-medium whitespace-nowrap bg-white border-b border-solid border-b-gray-200 min-h-[44px] text-slate-600 max-md:px-5"
            >
              <div className="gap-1 self-stretch my-auto">{column.render('Header')}</div>
              {index === 0 && (
                <img loading="lazy" src="http://b.io/ext_40-" className="object-contain absolute top-3.5 z-0 w-4 h-4 aspect-square left-[92px]" alt="" />
              )}
              {index === 1 && (
                <img loading="lazy" src="http://b.io/ext_41-" className="object-contain absolute bottom-3.5 z-0 shrink-0 self-start w-4 h-4 aspect-square right-[27px]" alt="" />
              )}
              {index === 2 && (
                <img loading="lazy" src="http://b.io/ext_42-" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}

export default TableHeader;