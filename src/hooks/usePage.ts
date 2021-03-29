import { useEffect, useState } from "react";
import { TablePaginationConfig } from "antd";

export interface Page {
  page: number;
  size: number;
}

export interface PageData<T> {
  list: T[];
  total: number;
}

export function usePage<T>(
  getPageData: (page: Page) => Promise<PageData<T>>,
  defaultPage?: Page
) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState({
    page: defaultPage?.page || 1,
    size: defaultPage?.size || 10,
  });
  const [dataSource, setDataSource] = useState<T[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { list, total: totalNumber } = await getPageData(page);
        setDataSource(list);
        setTotal(totalNumber);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, getPageData]);

  const onReset = () => {
    setPage({ page: 1, size: page.size });
  };

  const onChange = (page: number, pageSize: number) => {
    setPage({ page, size: pageSize });
  };

  const onShowSizeChange = (current: number, size: number) => {
    setPage({ page: current, size });
  };

  return {
    loading,
    dataSource,
    onReset,
    pagination: {
      showQuickJumper: true,
      showTotal: (total: number) => `Total ${total} items`,
      total,
      onChange,
      onShowSizeChange,
    } as TablePaginationConfig,
  };
}
