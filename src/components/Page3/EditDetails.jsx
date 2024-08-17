import * as React from "react";

function EditDetails({}) {
    

  return (
    <div className="flex flex-col py-6 bg-white rounded-lg border border-solid shadow-2xl border-white border-opacity-0 max-w-[704px]">
      <div className="flex-1 shrink gap-2 self-stretch px-6 w-full text-2xl font-bold text-slate-900 max-md:px-5 max-md:max-w-full">
        Edit Profile
      </div>
      <div className="flex flex-col px-6 pt-6 w-full h-[510px] max-md:px-5 max-md:max-w-full">
        <div className="flex relative flex-col justify-center self-center max-w-full aspect-square rounded-[200px] w-[100px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative shrink-0 w-full border-black border-solid border-[0.75px] h-[100px] opacity-[0.08] rounded-[200px]" />
        </div>
        <div className="flex flex-col mt-6 w-full min-h-[459px] max-md:max-w-full">
          <div className="flex flex-col self-center max-w-full text-sm font-bold tracking-wider leading-tight uppercase text-slate-900 w-[345px]">
            <div className="flex gap-2 items-center w-full">
              <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2 my-auto rounded border border-solid bg-slate-50 border-slate-300">
                <div className="flex gap-2 justify-center items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe36741f3433d8ff3f559e80d4fbb9f4731b0cb34153f6a9cda35ffd51d5371a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="gap-2.5 self-stretch my-auto">
                    change photo
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2 my-auto rounded border border-solid bg-slate-50 border-slate-300">
                <div className="flex gap-2 justify-center items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc095ed27ec33fb68f548487dce0b2417cc8c5154c68f6491bd33dddd82804fb?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="gap-2.5 self-stretch my-auto">
                    Remove photo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 justify-center items-start mt-6 w-full text-base h-[72px] max-md:max-w-full">
            <div className="flex flex-wrap gap-3 items-start min-w-[240px] max-md:max-w-full">
              <div className="flex flex-col min-w-[240px] w-[312px]">
                <div className="font-semibold leading-tight text-slate-900">
                  Name
                </div>
                <div className="flex overflow-hidden flex-col mt-2 w-full leading-none bg-white rounded text-slate-700">
                  <div className="flex flex-col w-full rounded">
                    <div className="flex flex-col py-px w-full bg-white rounded border border-solid border-slate-300">
                      <div className="gap-2.5 self-start py-3.5 ml-3 min-h-[46px] max-md:ml-2.5">
                        Olivia Rhye
                      </div>
                      <div className="shrink-0 h-px border border-solid bg-slate-600 border-slate-600" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col whitespace-nowrap min-w-[240px] w-[312px]">
                <div className="font-semibold leading-tight text-slate-900">
                  Email
                </div>
                <div className="flex overflow-hidden flex-col mt-2 w-full leading-none bg-white rounded text-slate-700">
                  <div className="flex flex-col w-full rounded">
                    <div className="flex flex-col py-px w-full bg-white rounded border border-solid border-slate-300">
                      <div className="gap-2.5 self-start py-3.5 ml-3 min-h-[46px] max-md:ml-2.5">
                        Oliviarhye@email.com
                      </div>
                      <div className="shrink-0 h-px border border-solid bg-slate-600 border-slate-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 justify-center items-start mt-6 w-full min-h-[72px] max-md:max-w-full">
            <div className="flex flex-wrap gap-3 items-start min-w-[240px] max-md:max-w-full">
              <div className="flex flex-col min-w-[240px] w-[312px]">
                <div className="text-sm font-semibold leading-tight text-slate-900">
                  Role
                </div>
                <div className="flex overflow-hidden flex-col mt-2 w-full text-base leading-none bg-white rounded text-slate-700">
                  <div className="flex flex-col w-full rounded">
                    <div className="flex flex-col py-px w-full bg-white rounded border border-solid border-slate-300">
                      <div className="flex gap-5 justify-between self-center w-full">
                        <div className="gap-2.5 self-stretch py-3.5 min-h-[46px]">
                          Product Designer
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4376fac8a255ece83664b9e67c1b16a9603a399d1962b9b385689f9c4bb0f832?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                          className="object-contain shrink-0 my-auto w-6 aspect-square"
                        />
                      </div>
                      <div className="shrink-0 h-px border border-solid bg-slate-600 border-slate-600" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col whitespace-nowrap min-w-[240px] w-[312px]">
                <div className="text-sm font-semibold leading-tight text-slate-900">
                  Status
                </div>
                <div className="flex overflow-hidden flex-col mt-2 w-full text-base leading-none bg-white rounded text-slate-700">
                  <div className="flex flex-col w-full rounded">
                    <div className="flex flex-col py-px w-full bg-white rounded border border-solid border-slate-300">
                      <div className="flex gap-5 justify-between self-center w-full">
                        <div className="gap-2.5 self-stretch py-3.5 min-h-[46px]">
                          Active
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4376fac8a255ece83664b9e67c1b16a9603a399d1962b9b385689f9c4bb0f832?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                          className="object-contain shrink-0 my-auto w-6 aspect-square"
                        />
                      </div>
                      <div className="shrink-0 h-px border border-solid bg-slate-600 border-slate-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col mt-6 w-full min-h-[68px] max-md:max-w-full">
            <div className="flex relative z-0 flex-col w-full h-[68px] max-md:max-w-full">
              <div className="z-0 text-base leading-none text-slate-700">
                Teams
              </div>
              <div className="flex overflow-hidden z-0 flex-col mt-1 w-full bg-white rounded min-h-[45px] max-md:max-w-full">
                <div className="flex flex-col w-full rounded max-md:max-w-full">
                  <div className="flex flex-col pt-11 bg-white rounded border border-solid border-slate-300 max-md:max-w-full">
                    <div className="shrink-0 h-px border border-solid bg-slate-600 border-slate-600 max-md:max-w-full" />
                  </div>
                </div>
              </div>
              <div className="flex absolute z-0 gap-2 items-center self-start bottom-[9px] h-[26px] min-h-[26px] right-[19px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1288040c360fc159975d2d14691fff69c16754fc2a19b8d3c84088aa656f1ce5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="shrink-0 self-stretch w-0 border border-solid bg-slate-200 border-slate-200 h-[26px]" />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/90eee20f9b2a2a5838e2ee8e78a9ef4597aeaca7877ae29ce6cabbea69d89a15?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
            <div className="flex absolute z-0 flex-wrap gap-1 items-start max-w-full text-sm leading-none text-violet-700 whitespace-nowrap bottom-[9px] left-[7px] w-[592px]">
              <div className="flex gap-2.5 justify-center items-center p-1 bg-white rounded border-solid border-[0.5px] border-slate-200">
                <div className="self-stretch my-auto">Design</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ba7b8832916249d0f2404ab3e263efb1129b49f46955c2caca2bfae5eeab45?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <div className="flex gap-2.5 justify-center items-center p-1 bg-white rounded border-solid border-[0.5px] border-slate-200">
                <div className="self-stretch my-auto">Product</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ba7b8832916249d0f2404ab3e263efb1129b49f46955c2caca2bfae5eeab45?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <div className="flex gap-2.5 justify-center items-center p-1 bg-white rounded border-solid border-[0.5px] border-slate-200">
                <div className="self-stretch my-auto">Marketing</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ba7b8832916249d0f2404ab3e263efb1129b49f46955c2caca2bfae5eeab45?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <div className="flex gap-2.5 justify-center items-center p-1 bg-white rounded border-solid border-[0.5px] border-slate-200">
                <div className="self-stretch my-auto">Finance</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ba7b8832916249d0f2404ab3e263efb1129b49f46955c2caca2bfae5eeab45?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-4 w-full text-base font-bold tracking-widest leading-tight uppercase whitespace-nowrap max-md:max-w-full">
        <div className="flex gap-10 items-start px-6 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-2 items-center w-[173px]">
            <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-3 py-2 my-auto rounded border border-solid bg-slate-50 border-slate-300 min-h-[42px] text-slate-900">
              <div className="flex flex-col justify-center items-center self-stretch my-auto">
                <div className="gap-2.5 self-stretch cursor-pointer">Cancel</div>
              </div>
            </div>
            <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-3 py-2 my-auto rounded bg-slate-100 min-h-[42px] text-slate-300">
              <div className="flex flex-col justify-center items-center self-stretch my-auto">
                <div className="gap-2.5 self-stretch">Save</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDetails;