import Input from "antd/lib/input";

const SearchEmployee = () => {
  return (
    <>
      <Input.Search
        placeholder="Employee Name"
        allowClear
        enterButton
        className="py-3 w-1/2"
      />
    </>
  );
};

export default SearchEmployee;
