import * as React from "react";

function DeleteDetails() {
  return (
    <div className="flex flex-col gap-2 p-6 font-bold bg-white rounded-lg border border-solid shadow-2xl border-white border-opacity-0 max-w-[600px] max-md:px-5">
      <div className="flex flex-wrap gap-2 items-center w-full text-lg leading-6 text-neutral-800 max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
          Delete Member Details
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0cc5aeacef6800464ccc8aa5d1397985f21dd42ae8e670c3d0aa32134767fa0?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      </div>
      <div className="py-1.5 mt-2 w-full text-sm leading-5 text-slate-700 max-md:max-w-full">
        Are you sure you want to delete this Member details? This action cannot
        be undone.
      </div>
      <div className="flex gap-10 items-start mt-2 w-full text-base tracking-widest leading-tight text-white uppercase whitespace-nowrap max-md:max-w-full">
        <div className="flex gap-2 items-center w-[173px]">
          <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-3 my-auto bg-violet-700 rounded min-h-[42px]">
            <div className="flex flex-col justify-center items-center self-stretch my-auto">
              <div className="gap-2.5 self-stretch">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteDetails;