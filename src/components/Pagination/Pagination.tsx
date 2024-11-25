import { useEffect, useState } from "react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  color?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  color = "#234764",
}) => {
  const [inputPage, setInputPage] = useState<any>(currentPage);

  useEffect(() => {
    setInputPage(currentPage);
  }, [currentPage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputPage(e.target.value);
  };

  const handlePageChange = (): void => {
    if (inputPage >= 1 && inputPage <= totalPages) {
      onPageChange(inputPage);
    } else {
      setInputPage(currentPage);
    }
  };

  const handlePreviousPage = (): void => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageButtonClick = (page: number): void => {
    onPageChange(page);
  };

  const generatePageButtons = (): React.ReactNode => {
    const buttons = [];
    const maxButtons = 7;
    const halfMaxButtons = Math.floor(maxButtons / 2);
    let start: number = Math.max(1, currentPage - halfMaxButtons);
    const end: number = Math.min(start + maxButtons - 1, totalPages);

    if (end - start < maxButtons - 1) {
      start = Math.max(1, end - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <a
          key={i}
          href="#"
          style={{
            backgroundColor: i === currentPage ? color : "transparent",
            color: i === currentPage ? "#ffffff" : "#262626",
            borderRadius: "9999px",
            width: "1.5rem",
            height: "1.5rem",
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.75rem",
            lineHeight: "1rem",
          }}
          onClick={() => {
            handlePageButtonClick(i);
          }}
        >
          {i}
        </a>
      );
    }

    return buttons;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
        marginTop: "4rem",
        gap: "1rem",
      }}
    >
      <div style={{ gridColumn: "span 2 / span 2" }} />
      <div style={{ paddingTop: "1px", gridColumn: "span 6 / span 6" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="#"
            onClick={handlePreviousPage}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              color: "#262626",
              width: "1.5rem",
              height: "1.5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{ width: "1.5rem", height: "1.5rem" }}
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </a>
          {generatePageButtons()}
          <a
            href="#"
            onClick={handleNextPage}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              color: "#262626",
              width: "1.5rem",
              height: "1.5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{ width: "1.5rem", height: "1.5rem" }}
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </a>
        </div>
      </div>
      <div style={{ gridColumn: "span 2 / span 2" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={{ flex: "none" }}>
            <div
              style={{
                fontSize: "0.75rem",
                lineHeight: "23px",
                height: "23px",
                display: "block",
                color: "#bdbdbd",
              }}
            >
              Go to page
            </div>
          </div>
          <div style={{ flex: "1 1 0%" }}>
            <input
              onChange={handleInputChange}
              value={inputPage}
              type="text"
              style={{
                borderWidth: "1px",
                borderRadius: "9999px",
                borderColor: color,
                display: "block",
                width: "100%",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                height: "23px",
                color: "#262626",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                outlineWidth: "0px",
              }}
            />
          </div>
          <div style={{ flex: "1 1 0%" }}>
            <button
              type="button"
              onClick={handlePageChange}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.75rem",
                lineHeight: "1rem",
                height: "23px",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                fontWeight: 600,
                borderRadius: "9999px",
                color: "#ffffff",
                backgroundColor: color,
              }}
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
