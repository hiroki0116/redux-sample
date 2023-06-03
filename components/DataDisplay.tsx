import Image from "antd/lib/image";
import List from "antd/lib/list";
import Space from "antd/lib/space";
import Avatar from "antd/lib/avatar";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { APIData } from "../types";
import { createElement, useEffect } from "react";
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space className="text-white px-5">
    {createElement(icon)}
    {text}
  </Space>
);

const DataDisplay = ({
  data,
  time,
  loading = false,
}: {
  data: APIData | undefined;
  time: number;
  loading?: boolean;
}) => {
  const count = useSelector((state: RootState) => state.counter.value);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className="text-white px-5">
      <p>Count {count}</p>
      <p className="font-bold text-3xl pb-5 text-center">Display Large Data</p>
      <p className="text-right">
        Data Total: {loading ? "Loading..." : data?.count} in {time} ms
      </p>

      <List
        className="px-3 sm:w-1/2 mx-auto break-words"
        itemLayout="vertical"
        loading={loading}
        pagination={{
          pageSize: 5,
        }}
        dataSource={data?.entries}
        renderItem={(item) => (
          <List.Item
            className="border rounded"
            key={item.API}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={""} className="mx-3" />}
              title={
                <a href={item.Link}>
                  <span className="text-white">{item.Category}</span>
                </a>
              }
              description={
                <span className="text-white">{item.Description}</span>
              }
            />
            <span className="text-white px-5">{item.Link}</span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default DataDisplay;
