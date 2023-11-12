import clsx from "clsx";

interface ColorBoxProps {
  className: string;
  name: string;
  color: string;
  colorHexa: string;
}

const ColourBox = ({ className, name, colorHexa, color }: ColorBoxProps) => (
  <div className={clsx("flex flex-col items-center", className)}>
    <div className={clsx("w-16 h-16 mb-1", color)} />
    <p className="text-[#000]">{name}</p>
    <span className="text-[#000] opacity-40">{colorHexa}</span>
  </div>
);

export default function ComponentsPage() {
  return (
    <div className="grid justify-start  bg-[#fff] gap-2">
      {/* Text */}
      <ColourBox
        className="row-start-1"
        color="bg-text-main"
        name="Text / Main"
        colorHexa="#F3F3F3"
      />
      <ColourBox
        className="row-start-1"
        color="bg-text-dim"
        name="Text / Dim"
        colorHexa="#76808C"
      />
      {/* Background */}
      <ColourBox
        className="row-start-2"
        color="bg-bg-main"
        name="Bg / Main"
        colorHexa="#0E141B"
      />
      <ColourBox
        className="row-start-2"
        color="bg-bg-highlight"
        name="Bg / Highlight"
        colorHexa="#1E2329"
      />
      <ColourBox
        className="row-start-2"
        color="bg-bg-hover"
        name="Bg / Hover"
        colorHexa="#313843"
      />
      <ColourBox
        className="row-start-2"
        color="bg-bg-secondary"
        name="Bg / Secondary"
        colorHexa="#14344B"
      />
      <ColourBox
        className="row-start-2"
        color="bg-bg-tertiary"
        name="Bg / Tertiary"
        colorHexa="#212B45"
      />
      {/* Main colors */}
      <ColourBox
        className="row-start-3"
        color="bg-primary"
        name="Colour / Primary"
        colorHexa="#66C0F4"
      />
      <ColourBox
        className="row-start-3"
        color="bg-secondary"
        name="Colour / Secondary"
        colorHexa="#4B619B"
      />
      {/* Accent */}
      <ColourBox
        className="row-start-4"
        color="bg-accent-green"
        name="Accent / Green"
        colorHexa="#A1CD44"
      />
      <ColourBox
        className="row-start-4"
        color="bg-accent-red"
        name="Accent / Red"
        colorHexa="#CD5444"
      />
      <ColourBox
        className="row-start-4"
        color="bg-accent-yellow"
        name="Accent / Yellow"
        colorHexa="#C1B15F"
      />
    </div>
  );
}
