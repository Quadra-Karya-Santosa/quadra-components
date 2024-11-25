export interface Columns<T> {
  fieldId: string;
  fieldId2?: string;
  fieldId3?: string;
  label: string | React.ReactElement;
  render?: (data?: T) => React.ReactElement | string;
  renderHeader?: () => React.ReactElement | string;
}
