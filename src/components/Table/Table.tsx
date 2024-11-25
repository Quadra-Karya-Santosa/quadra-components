import { Columns } from "../../types/interface";

interface Props<T> {
  data?: any[];
  columns: Columns<T>[];
  loading?: boolean | null;
  error?: string;
  action?: boolean;
  currentPage?: number;
  limit?: number;
  onRowClick?: (item: T) => void;
  color?: string;
  textColor?: string;
}

export default function Table<T>({
  data = [],
  columns = [],
  loading = false,
  error = "",
  action = false,
  currentPage = 1,
  limit = 0,
  onRowClick,
  color = "#234764",
  textColor = "#fff",
}: Props<T>): React.ReactElement {
  const handleRowClick = (item: T): void => {
    if (onRowClick !== undefined) {
      onRowClick(item);
    }
  };
  return (
    <table style={{ minWidth: "100%" }}>
      <thead style={{ backgroundColor: color }}>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              style={{
                borderRightWidth: "1px",
                borderLeftWidth: "1px",
                borderColor: "#bdbdbd",
                padding: "1rem",
                textAlign: "center",
                whiteSpace: "nowrap",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: textColor,
                fontWeight: 600,
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                {column.label}
                {column?.renderHeader !== undefined && column?.renderHeader()}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody style={{ backgroundColor: "#ffffff" }}>
        {loading !== true &&
          !error &&
          data &&
          data?.map((data, index) => (
            <tr
              key={index}
              onClick={(): void => {
                handleRowClick(data);
              }}
              role={action ? "button" : undefined}
            >
              {columns.map((column, row) => (
                <td
                  key={row}
                  style={{
                    borderRightWidth: "0px",
                    borderLeftWidth: "1px",
                    borderColor: "#bdbdbd",
                    padding: "1rem",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    lineHeight: "1.75rem",
                    fontSize: "0.875rem",
                    color: "#201B1C",
                  }}
                >
                  {column.fieldId === "index" &&
                    index + 1 + (currentPage - 1) * limit}
                  {column?.render === undefined && data[column.fieldId]}
                  <p className="text-gray-500">
                    {column?.fieldId2 !== undefined && data[column.fieldId2]}
                  </p>
                  {column?.render !== undefined && column.render(data)}
                  <span>
                    {column?.fieldId3 !== undefined && data[column.fieldId3]}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        {loading !== true && !error && !data && (
          <tr>
            <td
              colSpan={columns.length}
              style={{
                borderRightWidth: "0px",
                borderLeftWidth: "1px",
                borderColor: "#bdbdbd",
                padding: "1rem",
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "1.25rem",
                fontSize: "0.875rem",
                color: "#201B1C",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                    color: "#7c7c7c",
                  }}
                >
                  No Data Here
                </span>
              </div>
            </td>
          </tr>
        )}
        {loading !== true && error && (
          <tr>
            <td
              colSpan={columns.length}
              style={{
                borderRightWidth: "0px",
                borderLeftWidth: "1px",
                borderColor: "#bdbdbd",
                padding: "1rem",
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "1.25rem",
                fontSize: "0.875rem",
                color: "#201B1C",
              }}
            >
              {error}
            </td>
          </tr>
        )}
        {loading === true && (
          <tr>
            <td
              colSpan={columns.length}
              style={{
                borderRightWidth: "0px",
                borderLeftWidth: "1px",
                borderColor: "#bdbdbd",
                padding: "1rem",
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "1.25rem",
                fontSize: "0.875rem",
                color: "#201B1C",
              }}
            >
              Loading...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
