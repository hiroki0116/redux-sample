import { APIData } from "../types";
import Table from "antd/lib/table";

const DataDisplay = ({
  data,
  loading = false,
}: {
  data: APIData | undefined;
  loading?: boolean;
}) => {
  const columns = [
    {
      title: "API",
      dataIndex: "API",
      key: "API",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Link",
      dataIndex: "Link",
      key: "Link",
    },
    {
      title: "Category",
      dataIndex: "Category",
      key: "Category",
    },
  ];

  return (
    <div className="bg-sky-950 py-20 px-10 text-white flex items-center flex-col">
      <p className="font-bold text-3xl pb-5">Display Large Data</p>
      <p className="text-right">Data Total: {data?.count}</p>
      <Table
        dataSource={data?.entries}
        columns={columns}
        bordered
        size="large"
        tableLayout="auto"
        pagination={{ pageSize: 5 }}
        loading={loading}
      />
    </div>
  );
};

export default DataDisplay;
