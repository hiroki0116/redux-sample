import Link from "next/link";
import Menu from "antd/lib/menu";
import { useState } from "react";
import type { MenuProps } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const Header = () => {
  const [current, setCurrent] = useState("");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  const items: MenuProps["items"] = [
    {
      label: <Link href="/redux">Redux Sample</Link>,
      key: "redux",
      icon: <AppstoreOutlined />,
    },
  ];

  return (
    <div className="bg-green-50 text-center px-5 py-3 flex justify-between items-center">
      <Link href="/" className="font-extrabold">
        Logo Image
      </Link>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        items={items}
        className="bg-green-50"
      />
    </div>
  );
};

export default Header;
