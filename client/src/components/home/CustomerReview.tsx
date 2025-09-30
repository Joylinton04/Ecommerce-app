import assets from '@/assets/assets'
import React from 'react'
import ProductTitle from '../ProductTitle'

const CustomerReview = () => {
  return (
    <div className="mt-20 px-14 py-8 mb-12 max-w-[1440px] mx-auto ssm:px-4">
        <ProductTitle
          title="CUSTOMERS REVIEW"
          text="See what our valued customers are saying about their experiences!"
        />
        <div className="flex flex-col gap-20 mt-10">
          <div className="flex gap-4">
            <img
              src={assets.fqa1}
              className="w-[251px] ssm:w-full object-cover object-center"
            />
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-xl mdd:text-base ssm:text-sm">
                Fast shipping and great packaging! My order arrived in perfect
                condition.
              </p>
              <div className="flex gap-3 mdd:gap-2">
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
              </div>
              <span className="block h-1 bg-black"></span>
              <h1 className="font-bold text-xl mdd:text-base ssm:text-sm">
                Mariana Van Zeeler
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={assets.fqa2}
              className="w-[251px] ssm:w-full object-cover object-center"
            />
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-xl mdd:text-base ssm:text-sm">
                Fast shipping and great packaging! My order arrived in perfect
                condition.
              </p>
              <div className="flex gap-3 mdd:gap-2">
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
              </div>
              <span className="block h-1 bg-black"></span>
              <h1 className="font-bold text-xl mdd:text-base ssm:text-sm">
                Mariana Van Zeeler
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={assets.fqa3}
              className="w-[251px] ssm:w-full object-cover object-center"
            />
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-xl mdd:text-base ssm:text-sm">
                Fast shipping and great packaging! My order arrived in perfect
                condition.
              </p>
              <div className="flex gap-3 mdd:gap-2">
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
              </div>
              <span className="block h-1 bg-black"></span>
              <h1 className="font-bold text-xl mdd:text-base ssm:text-sm">
                Mariana Van Zeeler
              </h1>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CustomerReview