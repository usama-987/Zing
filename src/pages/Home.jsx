import Navbar from '../components/Navbar';
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";
import ProblemSolution from "../components/ProblemSolution";
import ComparisonSection from "../components/ComparisonSection";
import CaseStudyCard from "../components/CaseStudyCard";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatWeReplace from "../components/WhatWeReplace";
import ThreePrimitives from "../components/ThreePrimitives";
import HowZingDeploys from "../components/HowZingDeploys";
import WhoItsFor from "../components/WhoItsFor";
import CaseStudiesSection from "../components/CaseStudiesSection";
import OutcomesIntegrations from "../components/OutcomesIntegrations";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

import CompressIcon from "../assets/HeroSec/Compress.svg";
import StackIcon from "../assets/HeroSec/Stack.svg";
import IterateIcon from "../assets/HeroSec/Iterate.svg";
import ComposableIcon from "../assets/HeroSec/Composable.svg";

import OperatorIcon from "../assets/HeroSec/Operator.svg";
import MarginIcon from "../assets/HeroSec/Margin.svg";
import OwnedIcon from "../assets/HeroSec/Owned.svg";
import CompoundingIcon from "../assets/HeroSec/Compounding.svg";
import BigcomIcon from "../assets/HeroSec/Bigcom.svg";
import ShopifyIcon from "../assets/HeroSec/Shopify.svg";
import ShoplineIcon from "../assets/HeroSec/Shopline.svg";

import MainBg from "../assets/HeroSec/Main.png";
import Img1 from "../assets/HeroSec/Img1.png";
import Img2 from "../assets/HeroSec/Img2.png";
import Img3 from "../assets/HeroSec/Img3.png";
import Img4 from "../assets/HeroSec/Img4.png";
import Img5 from "../assets/HeroSec/Img5.png";
import Img6 from "../assets/HeroSec/Img6.png";
import Img7 from "../assets/HeroSec/Img7.png";
import Img8 from "../assets/HeroSec/Img8.png";
import Img9 from "../assets/HeroSec/Img9.png";
import Img10 from "../assets/HeroSec/Img10.png";
import LastBg from "../assets/HeroSec/Last.png";
import Chatgpt from "../assets/HeroSec/Chatgpt.svg";
import Claude from "../assets/HeroSec/Claude.svg";
import Airtable from "../assets/HeroSec/Airtable.svg";
import Hubspot from "../assets/HeroSec/Hubspot.svg";
import Slack from "../assets/HeroSec/Slack.svg";
import Postgres from "../assets/HeroSec/Postgres.svg";
import Aws from "../assets/HeroSec/Aws.svg";
import Supabase from "../assets/HeroSec/Supabase.svg";
import Noni from "../assets/HeroSec/Noni.svg";
import Edible from "../assets/HeroSec/Edible.svg";
import Authentication from "../assets/HeroSec/Authentication.svg";
import Amanda from "../assets/HeroSec/Amanda.svg";
import JM from "../assets/HeroSec/JM.svg";
import Svry from "../assets/HeroSec/Svry.svg";
import Chkm8 from "../assets/HeroSec/Chkm8.svg";

const buildWithIcons = [
  { src: Chatgpt, alt: "ChatGPT" },
  { src: Claude, alt: "Claude" },
  { src: Airtable, alt: "Airtable" },
  { src: Hubspot, alt: "HubSpot" },
  { src: Slack, alt: "Slack" },
  { src: Postgres, alt: "Postgres" },
  { src: Aws, alt: "AWS" },
  { src: Supabase, alt: "Supabase" },
  { src: Noni, alt: "Noni" },
];

const trustedByLogos = [
  { src: Edible, alt: "Edible" },
  { src: Authentication, alt: "Authentic" },
  { src: Svry, alt: "Svry Nutrition" },
  { src: JM, alt: "JM Packaging" },
  { src: Amanda, alt: "Amanda Monro" },
  { src: Chkm8, alt: "Chkm8" },
];

const stats = [
  { value: "20+ hrs", label: "Automated Weekly" },
  { value: "73%", label: "Lower Software Costs" },
  { value: "4X", label: "Faster Deployment" },
  { value: "6", label: "SaaS Tools Replaced" },
];

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection
        badge="AI Infrastructure for Scaling Teams"
        headingStart={"Replace Expensive\nSoftware with"}
        headingMiddle="AI-Powered"
        headingHighlight="Systems"
        subtext="We help growing companies eliminate manual processes, consolidate fragmented tools, and build custom systems that reduce costs, improve efficiency, and scale with their business."
        primaryCTA="Book Architecture Review"
        secondaryCTA="View Case Studies"
        backgroundImage={MainBg}
        buildWithIcons={buildWithIcons}
        trustedByLogos={trustedByLogos}
      />
      <StatsBar stats={stats} />
      <ProblemSolution
        problemHeading={"Most Companies Are\nRunning on Workarounds."}
        problemSubtext="We help companies simplify operations by replacing inefficient workflows with AI-powered systems built around how their business actually operates."
        problemPoints={[
          "Too many software subscriptions.",
          "Too many disconnected systems.",
          "Too many manual processes.",
        ]}
        problemImage={Img1}
        solutionHeadingStart="One system."
        solutionHeadingPrefix="Every"
        solutionHeadingHighlight="workflow."
        solutionSubtext="We design and deploy custom AI-powered operations systems that replace disconnected SaaS tools across fulfilment, support, finance, and revenue operations."
        solutionPoints={[
          "Automate repetitive tasks and eliminate manual work across your business.",
          "Build software tailored to your operations instead of adapting your business to generic tools.",
          "Centralise workflows, data, and operations into one connected platform.",
          "Improve response times, customer support, and operational efficiency with intelligent systems.",
        ]}
        solutionImage={Img2}
      />
      <CaseStudiesSection
        cases={[
          {
            label: "SHOPIFY INFRASTRUCTURE",
            videoUrl: "https://www.youtube.com/embed/63YuIb6S3WA?si=57I_6Org89ZAa9T8",
            companyName: "AppSumo",
            description: "Built custom systems that streamlined internal operations, reduced manual work, and improved scalability across key business processes.",
          },
          {
            label: "SHOPIFY INFRASTRUCTURE",
            videoUrl: "https://www.youtube.com/embed/63YuIb6S3WA?si=57I_6Org89ZAa9T8",
            companyName: "Glass Media",
            description: "Developed software solutions that eliminated operational bottlenecks, improved efficiency, and helped the team operate more effectively.",
          },
          {
            label: "ADCRUNCH",
            videoUrl: "https://www.youtube.com/embed/63YuIb6S3WA?si=57I_6Org89ZAa9T8",
            companyName: "AdCrunch",
            description: "Agency that helps wellness, beauty, eyewear. They optimise paid ad and customer offers across Meta, Google.",
          },
         
        ]}
      />
      <ComparisonSection
        heading={"Why most teams\noverpay for less."}
        subtext="The cost of stitching vendors together is rarely on the invoice. It's in headcount, drift, and the workflows you can't change."
        image={Img3}
        leftLabel="TRADITIONAL APPROACH"
        rightLabel="ZING APPROACH"
        leftPoints={[
          "Stack multiple SaaS tools to solve one problem",
          "Pay monthly forever with rising costs",
          "Rely on disconnected systems and manual work",
          "Hire expensive dev shops that move slow",
          "Wait weeks or months for simple changes",
          "Wait weeks or months for simple changes",
        ]}
        rightPoints={[
          "Replace tools with custom AI systems",
          "One-time builds or value-based pricing",
          "Fully connected workflows and data",
          "AI-assisted development for faster delivery",
          "Ship in days or weeks, not months",
          "Ship in days or weeks, not months",
        ]}
      />
      <CaseStudyCard
        image={Img4}
        heading={"Reduced manual\noperator"}
        subtext="Reduced manual operator work by 27 hours per week while replacing 6 disconnected SaaS tools"
        ctaText="Book Architecture Review"
      />
      <WhyChooseUs
        image={Img5}
        points={[
          "Reduce software costs",
          "Eliminate manual processes",
          "Replace disconnected systems",
          "Launch faster than traditional development firms",
          "Build software around your business, not someone else's",
        ]}
      />
      <WhatWeReplace
        images={[
          { src: Img6, alt: "Replace 1" },
          { src: Img7, alt: "Replace 2" },
          { src: Img8, alt: "Replace 3" },
        ]}
      />
      <ThreePrimitives
        subtext="Every Zing deployment is composed from the same three building blocks. They scale from a single workflow to an entire operations layer — without rewrites."
        image={Img9}
        engineeringSubtext={"Custom software used to mean months of scoping and a six-figure invoice.\nWith AI-native engineering, the calculus has fundamentally shifted."}
        cards={[
          { icon: CompressIcon, title: "Compress timelines", description: "What took a quarter ships in a week. Specs become working systems in the same session." },
          { icon: StackIcon, title: "Stack-agnostic", description: "Postgres or DuckDB. Nael or Hono. Whatever fits — not what a vendor mandates." },
          { icon: IterateIcon, title: "Iterate in production", description: "Change a workflow in the morning, watch the change ride traffic by afternoon." },
          { icon: ComposableIcon, title: "Composable, not bolted-on", description: "Every module is a primitive. Combine, replace, or extend without re-platforming." },
        ]}
        stats={[
          { value: "4x", label: "faster delivery" },
          { value: "60%", label: "cost reduction" },
          { value: "10x", label: "iteration speed" },
        ]}
        systemsImage={Img10}
      />
      <WhoItsFor
        heading={"Built for scaling\noperators,\nnot software\ntourists."}
        subtext="If your team lives inside the work — moving real volume, real money, real customers — you're who we build for."
        items={[
          "Growing Companies",
          "Operations Teams",
          "Multi-Location Businesses",
          "Media Companies",
          "Workflow Heavy Organizations",
        ]}
      />
      <OutcomesIntegrations
        outcomesSubtext="A 90-minute audit. A working prototype in two weeks. A production system in six. No retainer treadmill."
        cards={[
          { icon: OperatorIcon, title: "Operator throughput", description: "Reclaim 20+ hours per operator per week from manual stack-stitching." },
          { icon: MarginIcon, title: "Margin recovery", description: "Cut software spend by 50-80% while expanding the surface area of what you can do." },
          { icon: OwnedIcon, title: "Owned IP", description: "Code, infra, and data sit in your accounts, no rented logic, no vendor lock-in." },
          { icon: CompoundingIcon, title: "Compounding velocity", description: "Each module makes the next faster. Months 1-3 ship the next quarter's roadmap." },
        ]}
        integrations={[
          { icon: BigcomIcon, name: "BigCommerce" },
          { icon: ShopifyIcon, name: "Shopify" },
          { icon: ShoplineIcon, name: "ShopLine" },
        ]}
        integrationsSubtext="We are proud to stand alongside partners who share our commitment to a better tomorrow. These organizations provide the foundation that allows us to build, innovate, and sustain our mission."
      />
      <CTABanner
        backgroundImage={LastBg}
        subtext="Book a strategy call and discover how custom AI-powered systems can reduce costs, improve efficiency, and help your business scale faster."
        secondaryCTA="See Live System Examples"
        noteItems={["No commitment required", "Response within 24h", "Free audit included"]}
      />
      <Footer
        columns={[
          {
            title: "Company",
            links: [
              { label: "About" },
              { label: "Careers" },
              { label: "Press" },
              { label: "Contact" },
            ],
          },
          {
            title: "Platform",
            links: [
              { label: "Architecture" },
              { label: "Agents" },
              { label: "Data layer" },
              { label: "Security" },
            ],
          },
          {
            title: "Solutions",
            links: [
              { label: "Operations" },
              { label: "Revenue ops" },
              { label: "Finance" },
              { label: "Commerce" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy" },
              { label: "Terms" },
              { label: "SOC 2" },
              { label: "DPA" },
            ],
          },
        ]}
      />
    </div>
  )
}

export default Home
