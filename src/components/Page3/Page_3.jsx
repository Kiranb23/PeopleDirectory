import * as React from "react";
import { useNavigate } from "react-router-dom";

function MyComponent() {
    const navigate = useNavigate();

    function ClosePopup(){
        navigate("/peopleDirectory")
    }
  return (
    <main className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
      <section className="flex overflow-hidden flex-col grow mt-3.5 w-full text-4xl font-semibold leading-none text-gray-900 bg-white rounded-xl border border-gray-200 border-solid shadow-sm min-h-[874px] max-md:max-w-full">
      <div className="flex flex-wrap gap-3 items-start">
      <div className="flex overflow-hidden flex-col min-w-[240px] w-[450px] max-md:max-w-full">
        {/*  */}
        <div className="flex overflow-hidden flex-col mt-0 w-full bg-white rounded-xl border border-gray-200 border-solid shadow-sm max-md:max-w-full">
          <div className="flex flex-col w-full bg-white max-w-[1216px] max-md:max-w-full">
            <div className="flex gap-4 px-6 py-5 w-full max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col justify-center">
                <div className="flex gap-2 items-center">
                  <div className="self-stretch my-auto text-lg font-semibold leading-loose text-gray-900">
                    Team members
                  </div>
                  <div className="self-stretch px-2 py-0.5 my-auto text-sm font-medium leading-none text-center text-violet-700 bg-purple-50 rounded-2xl border border-gray-200 border-solid">
                    100 users
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full bg-gray-200 fill-gray-200 min-h-[1px] max-md:max-w-full" />
          </div>
          <div className="flex items-start max-w-full w-[1216px]">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <div className="flex gap-3 items-center px-6 py-3 w-full text-xs font-medium whitespace-nowrap bg-white border-b border-solid border-b-gray-200 min-h-[44px] text-slate-600 max-md:px-5">
                <div className="flex shrink-0 self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid" />
                <div className="gap-1 self-stretch my-auto">Name</div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">Olivia Rhye</div>
                  <div className="text-slate-600">@olivia</div>
                </div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">Phoenix Baker</div>
                  <div className="text-slate-600">@phoenix</div>
                </div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">Lana Steiner</div>
                  <div className="text-slate-600">@lana</div>
                </div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/811e0dd70bf62ab7f8ca0fede39e454eb49275b9ea089f3b57693bf8f21a9d0e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/811e0dd70bf62ab7f8ca0fede39e454eb49275b9ea089f3b57693bf8f21a9d0e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/811e0dd70bf62ab7f8ca0fede39e454eb49275b9ea089f3b57693bf8f21a9d0e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/811e0dd70bf62ab7f8ca0fede39e454eb49275b9ea089f3b57693bf8f21a9d0e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/811e0dd70bf62ab7f8ca0fede39e454eb49275b9ea089f3b57693bf8f21a9d0e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/811e0dd70bf62ab7f8ca0fede39e454eb49275b9ea089f3b57693bf8f21a9d0e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/811e0dd70bf62ab7f8ca0fede39e454eb49275b9ea089f3b57693bf8f21a9d0e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/811e0dd70bf62ab7f8ca0fede39e454eb49275b9ea089f3b57693bf8f21a9d0e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">
                    Demi Wilkinson
                  </div>
                  <div className="text-slate-600">@demi</div>
                </div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc16c31751ef39d5ce41e0d9cbf1c45b9a6ad3486a64e29ee56c96f11f71307a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc16c31751ef39d5ce41e0d9cbf1c45b9a6ad3486a64e29ee56c96f11f71307a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc16c31751ef39d5ce41e0d9cbf1c45b9a6ad3486a64e29ee56c96f11f71307a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc16c31751ef39d5ce41e0d9cbf1c45b9a6ad3486a64e29ee56c96f11f71307a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc16c31751ef39d5ce41e0d9cbf1c45b9a6ad3486a64e29ee56c96f11f71307a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc16c31751ef39d5ce41e0d9cbf1c45b9a6ad3486a64e29ee56c96f11f71307a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc16c31751ef39d5ce41e0d9cbf1c45b9a6ad3486a64e29ee56c96f11f71307a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc16c31751ef39d5ce41e0d9cbf1c45b9a6ad3486a64e29ee56c96f11f71307a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">Candice Wu</div>
                  <div className="text-slate-600">@candice</div>
                </div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/42454d5df7798a3840e6dbd9a32bfe3212538ceda8020151ad5c353dad22478e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/42454d5df7798a3840e6dbd9a32bfe3212538ceda8020151ad5c353dad22478e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42454d5df7798a3840e6dbd9a32bfe3212538ceda8020151ad5c353dad22478e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/42454d5df7798a3840e6dbd9a32bfe3212538ceda8020151ad5c353dad22478e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/42454d5df7798a3840e6dbd9a32bfe3212538ceda8020151ad5c353dad22478e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42454d5df7798a3840e6dbd9a32bfe3212538ceda8020151ad5c353dad22478e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/42454d5df7798a3840e6dbd9a32bfe3212538ceda8020151ad5c353dad22478e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/42454d5df7798a3840e6dbd9a32bfe3212538ceda8020151ad5c353dad22478e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">Natali Craig</div>
                  <div className="text-slate-600">@natali</div>
                </div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ecce2d3efea17358d00b4861f4e3b8fbdc55a57b29802a0b35b5d7b69e642acd?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecce2d3efea17358d00b4861f4e3b8fbdc55a57b29802a0b35b5d7b69e642acd?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecce2d3efea17358d00b4861f4e3b8fbdc55a57b29802a0b35b5d7b69e642acd?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecce2d3efea17358d00b4861f4e3b8fbdc55a57b29802a0b35b5d7b69e642acd?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecce2d3efea17358d00b4861f4e3b8fbdc55a57b29802a0b35b5d7b69e642acd?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecce2d3efea17358d00b4861f4e3b8fbdc55a57b29802a0b35b5d7b69e642acd?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecce2d3efea17358d00b4861f4e3b8fbdc55a57b29802a0b35b5d7b69e642acd?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecce2d3efea17358d00b4861f4e3b8fbdc55a57b29802a0b35b5d7b69e642acd?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">Drew Cano</div>
                  <div className="text-slate-600">@drew</div>
                </div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02f6f265b4dc88b6f779412d626d92785caf66b74b91c151614ee82d5bed38a6?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f6f265b4dc88b6f779412d626d92785caf66b74b91c151614ee82d5bed38a6?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f6f265b4dc88b6f779412d626d92785caf66b74b91c151614ee82d5bed38a6?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f6f265b4dc88b6f779412d626d92785caf66b74b91c151614ee82d5bed38a6?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f6f265b4dc88b6f779412d626d92785caf66b74b91c151614ee82d5bed38a6?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f6f265b4dc88b6f779412d626d92785caf66b74b91c151614ee82d5bed38a6?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f6f265b4dc88b6f779412d626d92785caf66b74b91c151614ee82d5bed38a6?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02f6f265b4dc88b6f779412d626d92785caf66b74b91c151614ee82d5bed38a6?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">Orlando Diggs</div>
                  <div className="text-slate-600">@orlando</div>
                </div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e16f8e84e9a7ccbf10a772a81ed2580650fe3d56e397c758325f698308ea648?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e16f8e84e9a7ccbf10a772a81ed2580650fe3d56e397c758325f698308ea648?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e16f8e84e9a7ccbf10a772a81ed2580650fe3d56e397c758325f698308ea648?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e16f8e84e9a7ccbf10a772a81ed2580650fe3d56e397c758325f698308ea648?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e16f8e84e9a7ccbf10a772a81ed2580650fe3d56e397c758325f698308ea648?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e16f8e84e9a7ccbf10a772a81ed2580650fe3d56e397c758325f698308ea648?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e16f8e84e9a7ccbf10a772a81ed2580650fe3d56e397c758325f698308ea648?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e16f8e84e9a7ccbf10a772a81ed2580650fe3d56e397c758325f698308ea648?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">Andi Lane</div>
                  <div className="text-slate-600">@andi</div>
                </div>
              </div>
              <div className="flex gap-3 items-center px-6 py-4 w-full border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <div className="flex self-stretch my-auto w-5 h-5 rounded-md border border-gray-300 border-solid min-h-[20px]" />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square rounded-[200px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4520c9b99e3a38b4af68a19d0ae98bb47bf1cee23d83153ea0ba215867c6acab?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4520c9b99e3a38b4af68a19d0ae98bb47bf1cee23d83153ea0ba215867c6acab?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4520c9b99e3a38b4af68a19d0ae98bb47bf1cee23d83153ea0ba215867c6acab?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4520c9b99e3a38b4af68a19d0ae98bb47bf1cee23d83153ea0ba215867c6acab?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4520c9b99e3a38b4af68a19d0ae98bb47bf1cee23d83153ea0ba215867c6acab?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4520c9b99e3a38b4af68a19d0ae98bb47bf1cee23d83153ea0ba215867c6acab?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4520c9b99e3a38b4af68a19d0ae98bb47bf1cee23d83153ea0ba215867c6acab?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4520c9b99e3a38b4af68a19d0ae98bb47bf1cee23d83153ea0ba215867c6acab?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full h-10 border-black border-solid border-[0.75px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-sm leading-none">
                  <div className="font-medium text-gray-900">Kate Morrison</div>
                  <div className="text-slate-600">@kate</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-xs font-medium whitespace-nowrap text-slate-700 w-[109px]">
              <div className="flex gap-3 items-center px-6 py-3.5 w-full bg-white border-b border-solid border-b-gray-200 min-h-[44px] text-slate-600 max-md:px-5">
                <div className="flex gap-1 items-center self-stretch my-auto">
                  <div className="self-stretch my-auto">Status</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac050d50f9bffa96a711a3dfc883f5e7515b9e39069ba33f813445060d28b356?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
              <div className="flex items-center px-6 py-6 w-full text-center border-b border-solid border-b-gray-200 min-h-[72px] max-md:px-5">
                <div className="flex gap-1 items-center self-stretch px-1.5 py-0.5 my-auto bg-white rounded-md border border-gray-300 border-solid shadow-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c221b21714cada30b1ba4d5b2b2e1ecf5717529a8e378bd8c331954bec5a54b?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
                  />
                  <div className="self-stretch my-auto">Active</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[179px] max-md:hidden">
              <div className="flex gap-3 w-full bg-white border-b border-solid border-b-gray-200 min-h-[44px]" />
              <div className="flex w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px]" />
              <div className="flex w-full border-b border-solid border-b-gray-200 min-h-[72px]" />
              <div className="flex w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px]" />
              <div className="flex w-full border-b border-solid border-b-gray-200 min-h-[72px]" />
              <div className="flex w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px]" />
              <div className="flex w-full border-b border-solid border-b-gray-200 min-h-[72px]" />
              <div className="flex w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px]" />
              <div className="flex w-full border-b border-solid border-b-gray-200 min-h-[72px]" />
              <div className="flex w-full bg-gray-50 border-b border-solid border-b-gray-200 min-h-[72px]" />
              <div className="flex w-full border-b border-solid border-b-gray-200 min-h-[72px]" />
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center pt-3 pb-4 pl-6 w-full text-sm font-semibold leading-none whitespace-nowrap border-t border-solid border-t-gray-200 max-w-[1216px] text-slate-700 max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-1 shrink items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex overflow-hidden gap-1 justify-center items-center self-stretch px-3 py-2 my-auto bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1207c71e3fc1c645e5288189f74d411359a6c6415c3215d8258e336173a94094?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
                <div className="self-stretch px-0.5 my-auto">Previous</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 shrink px-px pb-2 basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col pb-28 w-full bg-white rounded-2xl border border-solid border-slate-300 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between items-start px-5 py-5 bg-cyan-800 rounded-lg shadow-sm max-md:max-w-full">
            <div className="flex flex-col pb-4 mt-1.5">
              <div className="flex gap-9 items-center">
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto aspect-square rounded-[200px] w-[100px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/257a2e32c0faeec4ce82101f783c48665159f349527cd14d1a4ac43a0f69584e?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative shrink-0 w-full border-black border-solid border-[0.75px] h-[100px] opacity-[0.08] rounded-[200px]" />
                </div>
                <div className="flex flex-col self-stretch my-auto text-white">
                  <div className="text-xl font-bold">Olivia Rhye</div>
                  <div className="flex gap-6 items-start mt-3 text-sm">
                    <div className="flex flex-col">
                      <div className="leading-none">@olivia</div>
                      <div className="mt-1.5 font-medium">User ID</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="leading-none">Product Designer</div>
                      <div className="mt-1.5 font-medium">Role</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-10 shrink-0 self-center mt-0 ml-9 w-px border border-white border-solid h-[33px]" />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e6a8e80121f2277c9f7a950474fa0cfaa95226ebc577f4da7923a1eabdb87af?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
              className="object-contain shrink-0 w-6 aspect-square cursor-pointer"
              onClick={ClosePopup}
            />
          </div>
          <div className="flex overflow-hidden flex-col items-center mb-0 rounded-lg min-h-[640px] max-md:mr-1.5 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col max-w-full rounded-lg min-h-[563px] w-[676px]">
              <div className="flex flex-col px-2.5 pt-2.5 pb-5 w-full bg-white rounded-lg min-h-[563px] max-md:max-w-full">
                <div className="gap-2.5 self-stretch px-2.5 py-3 w-full text-base font-semibold leading-tight rounded bg-slate-100 min-h-[42px] text-slate-700 max-md:max-w-full">
                  Personal Information
                </div>
                <div className="flex flex-col mt-2.5 w-full rounded-lg max-md:max-w-full">
                  <div className="flex flex-wrap gap-10 items-end p-3 w-full border-b border-solid border-b-slate-200 max-md:max-w-full">
                    <div className="text-sm font-medium leading-none text-gray-900 w-[155px]">
                      Date of Birth
                    </div>
                    <div className="text-base leading-none text-slate-500">
                      29-04-2005
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-10 items-end p-3 w-full whitespace-nowrap border-b border-solid border-b-slate-200 max-md:max-w-full">
                    <div className="text-sm font-medium leading-none text-gray-900 w-[155px]">
                      Gender
                    </div>
                    <div className="text-base leading-none text-slate-500">
                      Female
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-10 items-end p-3 w-full whitespace-nowrap border-b border-solid border-b-slate-200 max-md:max-w-full">
                    <div className="text-sm font-medium leading-none text-gray-900 w-[155px]">
                      Nationality
                    </div>
                    <div className="text-base leading-none text-slate-500">
                      Canadian
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-10 items-end p-3 w-full border-b border-solid border-b-slate-200 max-md:max-w-full">
                    <div className="text-sm font-medium leading-none text-gray-900 w-[155px]">
                      Contact no.
                    </div>
                    <div className="text-base leading-none text-slate-500">
                      1234567890
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-10 items-end p-3 w-full border-b border-solid border-b-slate-200 max-md:max-w-full">
                    <div className="text-sm font-medium leading-none text-gray-900 w-[155px]">
                      E-mail Address
                    </div>
                    <div className="text-base leading-none text-slate-500">
                      Oliviadesign@gmail.com
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-10 items-end p-3 w-full border-b border-solid border-b-slate-200 max-md:max-w-full">
                    <div className="text-sm font-medium leading-none text-gray-900 w-[155px]">
                      Work email Address
                    </div>
                    <div className="text-base leading-none text-slate-500">
                      Oliviadesign@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
                  <div className="flex flex-col w-full bg-white max-md:max-w-full">
                    <div className="gap-2.5 self-stretch px-2.5 py-3 w-full text-base font-semibold leading-tight rounded bg-slate-100 min-h-[42px] text-slate-700 max-md:max-w-full">
                      Research & Publication
                    </div>
                    <div className="flex flex-col max-w-full w-[602px]">
                      <div className="flex flex-col gap-2 items-start p-3 w-full bg-white border-b border-solid border-b-slate-200 max-md:max-w-full">
                        <div className="self-stretch text-sm font-medium leading-none text-gray-900">
                          AI and User Experience: The Future of Design
                        </div>
                        <div className="flex gap-3 items-center mt-2 text-xs leading-none text-slate-600">
                          <div className="gap-2.5 self-stretch my-auto min-w-[240px]">
                            Published in the Journal of Modern Design • 2022
                          </div>
                        </div>
                        <div className="flex flex-col mt-2 max-w-full w-[476px]">
                          <div className="text-xs leading-4 text-orange-600 max-md:max-w-full">
                            AI, IoT based real time condition monitoring of
                            Electrical Machines using Python language Abstract:
                            Maintaining induction motors in good working order
                            before they fail benefits small
                            <span className="text-orange-600">
                              {" "}
                              See More...
                            </span>
                          </div>
                          <div className="flex overflow-hidden gap-2 justify-center items-center self-start p-2 text-sm font-bold tracking-wider leading-tight text-orange-600 uppercase rounded border-0 border-solid border-slate-300">
                            <div className="flex gap-2 justify-center items-center self-stretch my-auto">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9308eae0b8da36dfce59c43c1f82fdd4cbb6282d68191029bb8570e1a533ce77?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                              />
                              <div className="gap-2.5 self-stretch my-auto">
                                See publication
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>          
      </section>
    </main>
    
  );
}

export default MyComponent;