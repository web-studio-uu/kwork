import {benefitsList} from "@/data/benefits-data";
import {BenefitCard} from "@/components/layout/sections/benefits/benefit-card";

export const BenefitsSection = () => {
  return (
      <section id="benefits" className="container py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 place-items-center gap-12 lg:gap-24">
          <div className="max-w-xl">
            <h2 className="text-lg font-medium text-primary mb-2 tracking-wider">
              Benefits
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Your Shortcut to Success
            </h3>
            <p className="text-xl text-muted-foreground">
              Unlock your business potential with our proven strategies and tools designed
              to accelerate growth and maximize results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 w-full">
            {benefitsList.map((benefit, index) => (
                <BenefitCard
                    key={benefit.title}
                    {...benefit}
                    index={index}
                />
            ))}
          </div>
        </div>
      </section>
  );
};