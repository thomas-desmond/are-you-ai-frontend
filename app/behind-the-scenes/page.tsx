/* eslint-disable @next/next/no-img-element */
import ViewSourceCode from "@/components/behindTheScenes/viewSourceCode";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { accordionData } from "@/content/accordionData";
import Markdown from "react-markdown";

export const runtime = "edge";

export default function BehindTheScenes() {
  return (
    <>
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Button>&#x2190; Back Home</Button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center w-full md:w-4/5">
          <h1 className="text-3xl font-bold mb-6">
            Behind the Scenes: How &quot;Are you AI?&quot; Works
          </h1>
          <h3 className="text-xl font-bold mb-6">
            Taking advantage of Cloudflare&apos;s Developer Platform and Global
            Network
          </h3>
          <ViewSourceCode />
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl md:text-5xl underline">
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="min-w-4xl">
                {accordionData.map((item, index) => (
                  <AccordionItem
                    value={`item-${index}`}
                    key={index}
                    className="border-b last:border-b-0 pb-4"
                  >
                    <AccordionTrigger className="hover:no-underline my-4 w-full">
                      <div className="flex flex-row justify-between items-center">
                        <h3 className="text-left text-lg md:text-3xl font-semibold">
                          {item.title}
                        </h3>
                        <ChevronDown />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        <Markdown>{item.description}</Markdown>
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          className="rounded-lg"
                        />
                        <Button className="w-full mb-4 sm:w-auto bg-[#F6821F] text-black ">
                          <a
                            href={item.learnMoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn More
                          </a>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
