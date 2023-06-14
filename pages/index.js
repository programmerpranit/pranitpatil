import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <h2 className="leading-normal text-center p-5 mt-14 md:text-[55px] md:max-w-3xl m-auto md:leading-relaxed md:mt-20">
        Hey, I&lsquo;m a{" "}
        <span className="text-primary"> Fullstack Developer </span> from Mumbai
      </h2>

      <WorkSection />
    </>
  );
}
