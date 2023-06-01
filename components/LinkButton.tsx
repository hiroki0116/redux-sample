import Button from "antd/lib/button";

const LinkButton = ({ path, label }: { path: string; label: string }) => {
  return (
    <div className="flex justify-center pb-10">
      <Button href={path} type="primary">
        {label}
      </Button>
    </div>
  );
};

export default LinkButton;
