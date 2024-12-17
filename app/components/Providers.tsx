"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      // successUrl={process.env.NEXT_PUBLIC_VERCEL_URL as string}."/stripe/success"
      successUrl={`${process.env.NEXT_PUBLIC_VERCEL_URL}/stripe/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_VERCEL_URL}/stripe/error`} 
      // cancelUrl="https://commerce-next-yt.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
