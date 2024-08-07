export interface IEditScript {
  id: string;
  ip: string;
  port: number;
}

export interface Script {
  created_at: string;
  customer_id: string;
  expires_at: string | null;
  id: string;
  ip_address: string;
  port: number;
  script_download: string;
  script_id: string;
  script_name: string;
  updated_at: string;
}
