import React from "react";
import { Skeleton } from "./ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-[226px] ssm:w-[160px] h-[256px]" />
      <Skeleton className="w-[226px] ssm:w-[160px] h-[30px]" />
      <Skeleton className="w-[150px] ssm:w-[160px] h-[30px]" />
      <Skeleton className="w-[226px] ssm:w-[160px] h-[30px]" />
    </div>
  );
};

type LoadingProductsProps = {
  isLoading: boolean;
};

export const LoadingProducts = ({ isLoading }: LoadingProductsProps) => {
  return (
    isLoading ? (
      <div className="flex gap-8 mdd:flex-wrap">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    ) : null
  );
};


export default LoadingProducts;
