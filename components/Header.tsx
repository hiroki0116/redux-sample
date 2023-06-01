import Menu from "antd/lib/menu";
import { useState } from "react";
import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

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
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
  ];

  return (
    <div className="bg-green-50 text-center px-5 py-3 flex justify-between items-center">
      <p className="font-extrabold">Logo Image</p>
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
