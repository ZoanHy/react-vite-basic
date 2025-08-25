import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import BookTable from "../components/book/book.table";
import { useEffect, useState } from "react";
import { fetchAllBookAPI } from "../services/api.service";

const BookPage = () => {
  const [dataBooks, setDataBooks] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(10);

  // empty array => run once

  useEffect(() => {
    // console.log(">>> run useEffect 111");
    loadBooks();
  }, [current, pageSize]);

  const loadBooks = async () => {
    const res = await fetchAllBookAPI(current, pageSize);

    // console.log(">>> check books", res.data);

    if (res.data) {
      setDataBooks(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
      // console.log(">>> check res.data: ", res.data);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Talbe Book</h3>

      <BookTable
        dataBooks={dataBooks}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
        setTotal={setTotal}
      />
    </div>
  );
};

export default BookPage;
