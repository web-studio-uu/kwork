import { featureList } from "@/data/features-data";
import {FeatureCard} from "@/components/layout/sections/features/feature-card";

export const FeaturesSection = () => {
  return (
      <section id="features" className="container py-24 sm:py-32 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-lg text-primary tracking-wider font-medium">
            Features
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold">
            What Makes Us Different
          </h3>

          <p className="mx-auto max-w-[50ch] text-xl text-muted-foreground">
            Transform your online presence with our comprehensive suite of features
            designed to engage your audience and drive results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
  );
};