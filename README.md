# quadra-component

`quadra-component` is a React.js library that provides components to to make it easier for quadra developers.

## Installation

Install the package via npm:

```bash
npm install quadra-component
```

Install the package via yarn:

```bash
yarn add quadra-component
```

## Components

### 1. Tabel component

This component is used to create tables dynamically and is easy to use and already uses types for the data that appears in the table.

#### Props

- `data` (any[]): This is props of your data.
- `columns` (Columns<T>[]): The structure of your table.
- `loading` (boolean): The loading state.
- `onRowClick` (void function): You can use this function to trigger any action while you click the table body.
- `color` (string): You can change the header table background color.
- `textColor` (string): You can change the header table text color.

#### Columns

- `fieldId` (string): The key of object in your data.
- `label` (string): The title you want to show in header table.
- `render` (React function): The render is a function that returns react element, you can use this to manipulate data and you can show the data as you want or you can enhance the look of your table body.
- `renderHeader` (React function): The renderHeader is a function that returns react element, you can use this to enhance or change the look of your table header.

#### Usage

### Columns

```jsx
import { type Columns } from "quadra-component";

const header: Columns<Forum>[] = [
  {
    fieldId: "index",
    label: "No",
  },
  {
    fieldId: "title",
    label: "Title",
  },
  {
    fieldId: "description",
    label: "Description",
    render: (data) => (
      <p>
        {data?.description !== undefined &&
          (data.description.length > 25
            ? data?.description.slice(0, 20) + "..."
            : data?.description)}
      </p>
    ),
  },
  {
    fieldId: "image",
    label: "Post Image",
    render: (data) => <img src={data?.image} alt="Images" />,
  },
  {
    fieldId: "created_at",
    label: "Posted At",
    render: (data) => <p>{moment(data?.created_at).format("MMM Do, YYYY")}</p>,
  },
  {
    fieldId: "likes",
    label: "Total Like",
  },
  {
    fieldId: "moderator",
    label: "Moderator",
  },
  {
    fieldId: "admin",
    label: "Posted By",
    render: (data) => <p>{data?.admin.email}</p>,
  },
];
```

### Table

```jsx
import { Table } from "quadra-component";

<Table<Forum>
  columns={header}
  data={data}
  loading={isLoading}
/>
```

#### 2. Pagination component

This component is used when you need pagination for the table

#### Props

- `currentPage` (number): The number of the current page.
- `totalPages` (number): The total of your data page.
- `onPageChange` (void function): The function that can be used to change your page
- `color` (string): You can change the color of pagination.

#### Usage

```jsx
import React from "react";
import { Pagination, Table } from "quadra-component";
const App = () =>{
 <>
    <Table<Forum>
      columns={header}
      data={data}
      loading={isLoading}
    />
    <Pagination
      currentPage={data!?.meta.currentPage}
      totalPages={data!?.meta.totalPages}
      onPageChange={handlePageChange}
    />
  </>
}
export default App;
```

#### 3. Svg Icon Components

This component allows you to changes the svg colors

#### Props

- `svg` (number): The svg you want to change.
- `className` (number): The react className.
- `normalWidth` (void function): The normal width for 1.5rem / 24px

#### Usage

```jsx
import React from "react";
import { SvgIcon } from "quadra-component";
import { ChevronLeftSVG } from "assets/images";
const App = () => {
  <>
    <SVGIcon svg={ChevronLeftSVG} className="bg-red" />
  </>;
};
export default App;
```

## License

This project is licensed under the ISC License.
