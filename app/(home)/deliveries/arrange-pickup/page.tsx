"use client";
import { GoBack } from "@/components/GoBack";
import React from "react";
import { PurchasedProductsTable } from "../PurchasedProductsTable";
import { useGetTransactionsQuery } from "@/services/transactions.service";
import { useAuthToken } from "@/hooks/useAuthToken";
import { TransactionEventType, TransactionI } from "@/interfaces/transactions";
import Link from "next/link";
import { Button } from "antd";

const ArrangePickupPage = () => {
  const { token } = useAuthToken();
  const { data, isLoading } = useGetTransactionsQuery({
    authToken: token as string,
  });
  const purchases = data?.filter(
    (product) =>
      product?.type === "product_purchase" &&
      product?.kind === "debit" &&
      !product?.events?.find(
        (e) =>
          e.eventName ===
          TransactionEventType.SHIPMENT_CONFIRMED_FOR_PRODUCT_PURCHASE,
      ) &&
      product?.payment_method !== "internal_transfer" &&
      product?.status === "success",
  );
  return (
    <main>
      <GoBack />
      <div className="flex gap-3 md:flex-row flex-col md:items-center">
        <div className="flex flex-col md:flex-row gap-3 md:justify-between md:items-center w-full">
          <h2 className="text-2xl text-black font-bold">Arrange Pickup</h2>
          <Link href={"/account/address"}>
            <Button type="primary" className="bg-primary h-[40px]">
              Manage Pickup Address
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <p>Purchased Products</p>
        <PurchasedProductsTable
          data={purchases as TransactionI[]}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
};

export default ArrangePickupPage;
