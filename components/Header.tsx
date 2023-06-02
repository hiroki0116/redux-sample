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
      label: "Navigation Two",
      key: "app",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
      ],
    },
    {
      label: <Link href="/redux">Redux Sample</Link>,
      key: "alipay",
    },
  ];

  return (
    <div className="bg-green-50 text-center px-5 py-3 flex justify-between items-center">
      <Link href="/" className="font-extrabold">
        Logo Image
      </Link>
      <Menu
        mode="horizontal"
        onClick={onClick}
        selectedKeys={[current]}
        items={items}
        className="bg-green-50"
      />
    </div>
  );
};

export default Header;
