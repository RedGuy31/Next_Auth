interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className=" w-full flex flex-col items-center gap-y-4 justify-center">
      <h1 className=" font-semibold text-3xl">Auth</h1>
      <p className=" text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
