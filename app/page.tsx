import { Layout } from "@/components/layout";
import { ProductView } from "@/components/ProductView";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Layout className="h-full mt-4 items-center justify-center">
        <ProductView
          images={[
            "/shoes_1.png",
            "/shoes_2.png",
            "/shoes_3.png",
            "/shoes_4.png",
            "/shoes_5.png",
          ]}
          title="WAVE STEALTH NEO 2"
          price={170}
          description="Product Description"
          sizes={[
            { size: "37", available: false },
            { size: "38", available: true },
            { size: "38,5", available: true },
            { size: "39", available: true },
            { size: "40", available: true },
            { size: "40,5", available: true },
            { size: "41", available: true },
            { size: "42", available: false },
            { size: "42,5", available: true },
            { size: "43", available: true },
            { size: "44", available: true },
            { size: "44,5", available: true },
            { size: "45", available: true },
            { size: "46", available: true },
            { size: "46,5", available: true },
            { size: "47", available: true },
            { size: "48,5", available: true },
            { size: "50", available: true },
            { size: "51", available: false },
          ]}
          company="Mizuno"
          new={true}
        />
      </Layout>
    </div>
  );
}
