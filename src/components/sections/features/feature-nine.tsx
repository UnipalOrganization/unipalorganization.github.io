import Image from "next/image";

import { Section, Container } from "@/components/craft/craft";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn, isVideoSrc } from "@/lib/utils";
import type { ImageContent } from "../types";

export type FeatureNineProps = {
  title: string;
  body?: string;
  images: ImageContent[];
  /**
   * How each image fills its card. "cover" (default) suits photos; "contain"
   * suits logos/stickers/transparent art — it centers each on a soft panel
   * without cropping.
   */
  fit?: "cover" | "contain";
};

/** Feature with an image carousel, built on the shadcn `Carousel` primitive. */
export const FeatureNine = ({
  title,
  body,
  images,
  fit = "cover",
}: FeatureNineProps) => (
  <Section>
    <Container>
      <h2 className="mb-4">{title}</h2>
      {body && <p>{body}</p>}

      <Carousel className="mt-6 w-full">
        <CarouselContent>
          {images.map((photo, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="relative overflow-hidden">
                <CardContent
                  className={cn(
                    "flex aspect-square items-center justify-center",
                    fit === "contain" ? "bg-soft p-8" : "p-0",
                  )}
                >
                  {isVideoSrc(photo.src) ? (
                    <video
                      src={photo.src}
                      aria-label={photo.alt}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={cn(
                        "h-full w-full",
                        fit === "contain"
                          ? "object-contain"
                          : "absolute inset-0 object-cover",
                      )}
                    />
                  ) : (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={720}
                      height={720}
                      className={cn(
                        "h-full w-full",
                        fit === "contain"
                          ? "object-contain"
                          : "absolute inset-0 object-cover",
                      )}
                    />
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  </Section>
);
