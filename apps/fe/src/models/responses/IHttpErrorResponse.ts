export type IHttpErrorResponse = ({ error: string } | { errors: any[] }) & {
  status: number;
  type: string;
};
