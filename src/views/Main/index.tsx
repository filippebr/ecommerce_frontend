import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
  return (
    <>
      <section>
        <div className="py-5">
          <div className="grid grid-cols-12 items-center px-6 sm:px-12 lg:px-24">
            <div className="col-span-6">
              <div className="relative p-3">
                <Image
                  width="830"
                  height="550"
                  className="rounded-lg"
                  src="/images/main-banner.jpg"
                  alt="main banner"
                ></Image>
                <div className="absolute top-16 left-8 space-y-4">
                  <h4 className="font-bold text-luckypoint">
                    SUPERCHARGED FOR PROS
                  </h4>
                  <h5 className="text-5xl font-semibold">iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <p>
                    <Link href="" className="text-stiletto font-bold">
                      BUY NOW
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
