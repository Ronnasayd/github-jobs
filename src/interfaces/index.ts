export interface IJob {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
}
export interface IState {
  jobs: IJob[];
}

export interface AddAction {
  type: "ADD_CARD";
  jobs: IJob[];
}

export interface FetchJobsAction {
  type: "JOBS_FETCH_REQUESTED";
  description: string;
  location: string;
}
