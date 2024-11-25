interface props {
  svg: string;
  className: string;
  normalWidth?: boolean;
}

export const SvgIcon: React.FC<props> = ({
  svg,
  className,
  normalWidth = true,
}) => {
  return (
    <div
      className={className}
      style={{
        maskImage: `url(${svg})`,
        WebkitMaskImage: `url(${svg})`,
        maskSize: "90%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        height: normalWidth ? "1.5rem" : "",
        width: normalWidth ? "1.5rem" : "",
      }}
    />
  );
};

export default SvgIcon;
