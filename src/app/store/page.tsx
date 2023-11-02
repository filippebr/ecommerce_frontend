import BreadCrumb from '@/components/BreadCrumb'
import RatingStar from '@/lib/common-components/RatingStar'
import Image from 'next/image'
import FilterBy from '../../components/FilterBy'

export default function OurStore() {
  return (
    <>
      <BreadCrumb title="Our Store" />
      <div className="py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-3">
            <div className="mb-1 rounded-lg bg-white px-3 py-4">
              <h3 className="mb-5 text-base font-semibold text-darkgray">
                Shop By Categories
              </h3>
              <div>
                <ul className="cursor-pointer list-none text-sm leading-7 text-lightgray">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <FilterBy />
            <div className="mb-1 rounded-lg bg-white px-3 py-4">
              <h3 className="mb-5 text-base font-semibold text-gray">
                Product Tags
              </h3>
              <div>
                <div className="product-tags flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-lg bg-white px-2 py-1 text-darkgray">
                    Headphone
                  </span>
                  <span className="rounded-lg bg-white px-2 py-1 text-darkgray">
                    Laptop
                  </span>
                  <span className="rounded-lg bg-white px-2 py-1 text-darkgray">
                    Mobile
                  </span>
                  <span className="rounded-lg bg-white px-2 py-1 text-darkgray">
                    Wire
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-1 rounded-lg bg-white px-3 py-4">
              <h3 className="mb-5 text-base font-semibold text-gray">
                Random Product
              </h3>
              <div>
                <div className="flex w-72 border-b-[1px]">
                  <div className="w-36 border-darkgray">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                      src="/images/watch.jpg"
                      alt="watch"
                      className="rounded-full p-1"
                    ></Image>
                  </div>
                  <div className="w-36 text-base">
                    <h5 className="mb-2">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <div className="flex flex-row">
                      <RatingStar sizeProp={14} />
                    </div>
                    <b>$ 300</b>
                  </div>
                </div>
                <div className="flex w-72 border-b-[1px]">
                  <div className="w-36 border-darkgray">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                      src="/images/watch.jpg"
                      alt="watch"
                      className="rounded-full p-1"
                    ></Image>
                  </div>
                  <div className="w-36 text-base">
                    <h5 className="mb-2">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <div className="flex flex-row">
                      <RatingStar sizeProp={14} />
                    </div>
                    <b>$ 300</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9 text-xl">
            <div className="rounded-lg bg-white p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="mb-0 block">Sort By:</p>
                  <select name="" className="" id="">
                    <option value="">Featured</option>
                    <option value="">Best selling</option>
                    <option value="">Alphabetically, A-Z</option>
                    <option value="">Alphabetically, Z-A</option>
                    <option value="">Price, low to high</option>
                    <option value="">Price, high to low</option>
                    <option value="">Date, old to new</option>
                    <option value="">Date, new to old</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <p className="totalproducts">21 Products</p>
                  <div className="flex items-center gap-2">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '34px', height: '34px' }}
                      src="/images/gr4.svg"
                      alt="grid"
                    ></Image>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '34px', height: '34px' }}
                      src="/images/gr3.svg"
                      alt="grid"
                    ></Image>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '34px', height: '34px' }}
                      src="/images/gr2.svg"
                      alt="grid"
                    ></Image>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '34px', height: '34px' }}
                      src="/images/gr.svg"
                      alt="grid"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
